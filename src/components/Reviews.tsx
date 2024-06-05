"use client"
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { HTMLAttributes, useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Phone from "./Phone";
const PHONES = [
    '/testimonials/1.jpg',
    '/testimonials/2.jpg',
    '/testimonials/3.jpg',
    '/testimonials/4.jpg',
    '/testimonials/5.jpg',
    '/testimonials/6.jpg',
]
interface ReviewProps extends HTMLAttributes<HTMLDivElement>{
    imgSrc:string
}
const Review = ({imgSrc,className,...props}:ReviewProps) =>{
    const POSSIBLE_ANIMATION_DELAY=[
        '0s',
        '0.1s',
        '0.2s',
        '0.3s',
        '0.4s',
        '0.5s',
    ]

    const animationDelay = POSSIBLE_ANIMATION_DELAY[Math.floor(Math.random()*POSSIBLE_ANIMATION_DELAY.length)];

    
    return(
        <div className={cn('animate-fade-in rounded-[2.25rem] bg-white p-6 opacity-0 shadow-xl shadow-slate-900/5',className)}
        style={{animationDelay}}
        {...props}>
            <Phone imgSrc={imgSrc}/>
        </div>
    );
}
const ReviewColumn=({reviews,className, reviewClassName,msPerPixel=0}
    :
    {reviews:string[],className?:string, reviewClassName?: (reviewIndex:number)=>string, msPerPixel?:number})=>{

        const columnRef = useRef<HTMLDivElement | null>(null);
        const [columnHeight, setColumnHeight] = useState(0);
        const duration =  `${columnHeight*msPerPixel}ms`;

        useEffect(()=>{
            // console.log(columnRef.current?.offsetHeight);
            if(!columnRef.current){
                return;
            }
            const resizeObserver = new window.ResizeObserver(()=>{
                setColumnHeight(columnRef.current?.offsetHeight ?? 0);
            })
            resizeObserver.observe(columnRef.current);
            
            return ()=>{
                resizeObserver.disconnect()
            }
        },[])
          
    return(
        <div ref={columnRef} 
        className={cn('animate-marquee space-y-8 py-8',className)}
        style={{'--marquee-duration':duration} as React.CSSProperties}
        >
            { Array.isArray(reviews) && reviews.map((imgSrc, reviewIndex) => (
                <Review
                key={reviewIndex}
                className={reviewClassName?.(reviewIndex % reviews.length)}
                imgSrc={imgSrc}
        />
      ))}
        </div>
    )
}
function splitArray<T>(array:Array<T>, numParts:number){
    const result:Array<Array<T>> = []

    for(let i=0; i<array.length; i++){
        const index = i%numParts;   //i==0 && i==3 ==? 0-->1.png,3.png
        if(!result[index]){         //i==1 && i==4 ==? 1-->1.png,4.png
            result[index]=[];       //i==2 && i==5 ==? 2-->2.png,5.png,8.png
        }
        result[index].push(array[i]);
    }
    return result;
}
const ReviewGrid=()=>{
    const containerRef = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(containerRef,{once:true, amount:0.4});
    const columns = splitArray(PHONES,3);
    const columns1 = columns[0];
    const columns2 = columns[1];
    const columns3 = splitArray(columns[2],2);   // i=0 >> 0-->2.png,8.png
                                                // i==1 >> 1-->5.png
    return(
        <div ref={containerRef} className=" relative overflow-hidden -mx-4 h-[49rem] max-h-[150vh] items-start gap-8 px-4 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {isInView ?
            (<>
                <ReviewColumn
                    reviews={[...columns1,...columns3.flat(),...columns2]}
                    reviewClassName={(reviewIndex)=> 
                        cn({
                            'md:hidden': reviewIndex >= columns1.length + columns3[0].length,
                            'lg:hidden': reviewIndex >= columns1.length
                        })
                    }
                    msPerPixel={10}
                />
                <ReviewColumn
                    reviews={[...columns2, ...columns3[1]]}
                    className='hidden md:block'
                    reviewClassName={(reviewIndex) =>
                    reviewIndex >= columns2.length ? 'lg:hidden' : ''
                    }
                    msPerPixel={15}  
                />
                <ReviewColumn
                    reviews={columns3.flat()}
                    className='hidden md:block'
                    msPerPixel={10}
                />
            </>)
            :
            null
            }
            <div className='pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-100' />
            <div className='pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-100' />
        </div>
    )
}
const Reviews=()=>{
    return(
        <MaxWidthWrapper className="relative max-w-5xl">
            <img 
             aria-hidden='true'
            src='/what-people-are-buying.png' 
            className="absolute select-none hidden xl:block -left-32 top-1/3"
            alt="" />
            <ReviewGrid />
        </MaxWidthWrapper>
    )
}

export default Reviews;