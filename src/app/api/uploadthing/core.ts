import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import {z} from 'zod';
import sharp from 'sharp'
import { db } from "@/db";
 
const f = createUploadthing();
 
const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function
 
// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    // Set permissions and file types for this FileRoute
    .input(z.object({configId: z.string().optional()}))
    .middleware(async ({ input }) => {
      
 
      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return {input};
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
    //   console.log("Upload complete for userId:", metadata.userId);
    const {configId} = metadata.input
 
      // console.log("file url", file.url);
      const res = await fetch(file.url);
      const buffer =await res.arrayBuffer();

      const imageMetaData = await sharp(buffer).metadata();
      const {width,height}=imageMetaData

      if(!configId){
        const configuration = await db.configuration.create({
          data:{
            imageUrl:file.url,
            height: height || 500,
            width: width || 500
          }
        })
        return {configId: configuration.id}
      }
      else{
        const updateConfiguration = await db.configuration.update({
          where:{
            id: configId,
          },
          data:{
            croppedImageUrl:file.url
          }
        })
        return {configId: updateConfiguration.id}
      }
 
      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { configId };
    }),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;