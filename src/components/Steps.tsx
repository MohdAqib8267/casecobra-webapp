
"use client"

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation"


const STEPS = [
    {
        name:"Step 1: Add Image",
        description:"Choose an Image for your Case",
        url:'upload',
    },
    {
        name:"Step 2: Customise design",
        description:"Make the case yours",
        url:'design',
    },
    {
        name:"Step 3: Summary",
        description:"Review your final design",
        url:'preview',
    },
]
// const Steps=()=>{
//     const path = usePathname();
    
    
//     return(
//        <ol className="rounded-md bg-white lg:flex lg:rounded-node  lg:border-l lg:border-r lg:border-gray-200">
//         {
//             STEPS?.map((step,i)=>{
//                 const isCurrent = path.endsWith(step.url);
//                 const isCompleted = STEPS.slice(i+1).some((step)=>{
//                     path.endsWith(step.url);
//                 })
//                 const ImgPath = `/Snake-${i+1}.png`;
//                 return(
//                     <li key={step.name} className="relative overflow-hidden lg:flex-1">
//                         <div>
//                             <span className={cn('absolute left-0 top-0 h-full w-1 bg-zinc-400 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full',
//                                 {
//                                     'bg-zinc-700':isCurrent,
//                                     'bg-primary':isCompleted,
//                                 }
//                             )} aria-hidden="true">hi</span>
//                         </div>
//                     </li>
//                 )
//             })
//         }
//        </ol>
//     )
// }
const Steps=()=>{
    const path = usePathname();
    // console.log(path.split('/')[2]);
    const endPath = path.split('/')[2];

     const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://casecobra-webapp.vercel.app'
    return(
        <ol className="flex w-full my-4">
            {
                STEPS.map((val,index)=>{
                    return(
                        <li key={index} className="flex flex-1 items-center justify-center sm:h-auto md:h-auto lg:h-auto">
                            {/* separator */}
                            <div className="rotate-180 border-solid border border-gray-200 border-1 h-8">
                                <hr />
                            </div>
                            <div className="w-full ml-1 items-center flex flex-col justify-between h-full">
                                <div className={cn(' flex flex-col gap-2 lg:flex-row')}>
                                <img className="h-10 w-10" src={`/snake-${index+1}.png`} alt="step images" />
                                    <div>
                                        <h5 className="text-gray-600 text-sm lg:text-normal font-bold">{val?.name}</h5>
                                        <p className="text-gray-600 text-xs lg:text-sm">{val?.description}</p>
                                    </div>
                                </div>
                                <div className="w-full ">
                                    <hr className={cn('border-solid border-2',{
                                        'border-gray-700': val?.url == endPath
                                    })}/>
                                </div>
                            </div>
                            {/* separator */}
                            <div className="rotate-180 border-solid border border-gray-200 border-1 h-8">
                                <hr />
                            </div>
                        </li>
                    )
                })
            }
        </ol>
    )
}
export default Steps;