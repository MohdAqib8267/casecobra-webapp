import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement>{
    imgSrc:string
    dark?:boolean
}
const Phone=({imgSrc,className, dark=false,...props}:PhoneProps)=>{
    // console.log(imgSrc)
    return(
        <div className={cn('relative pointer-events-none z-50 overflow-hidden',className)}{...props}>
            <img 
            src={dark?'/phone-template-dark-edges.png':'/phone-template-white-edges.png'} 
            className="z-50 select-none pointer-events-none"
            alt="phone img" />

            <div className="absolute -z-10 inset-0">
                <img className="object-cover min-w-full min-h-full rounded-3xl" src={imgSrc} alt="overlay img" />
            </div>
        </div> 
    ) 
}

export default Phone;