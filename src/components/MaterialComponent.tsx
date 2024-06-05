// import { cn } from '@/lib/utils'
// import { Radio, RadioGroup } from '@headlessui/react'
// import { CheckCircleIcon } from '@heroicons/react/24/solid'
// import { useState } from 'react'  

// const plans = [
//   { name: 'Startup', ram: '12GB', cpus: '6 CPUs', disk: '256GB SSD disk' },
//   { name: 'Business', ram: '16GB', cpus: '8 CPUs', disk: '512GB SSD disk' },
//   { name: 'Enterprise', ram: '32GB', cpus: '12 CPUs', disk: '1TB SSD disk' },
// ]
// interface MaterialOption {
//     label: string;
//     price: number;
//   }

//   interface Config{
//     MATERIALS:{
//         name:string,
//         options:Array
//     },
//     setFin:{
//         label:string,
//         price:number
//     },
//     setMat:{
//         label:string,
//         price:number
//     }
//   }
// export default function Example({MATERIALS,setFinish,setMaterial}:Config) { 
    
//   const [selected, setSelected] = useState(plans[0])

//   const HandlePrice = (val: MaterialOption) => {
//     // console.log(val);
//     if (MATERIALS.name === 'material') {
//       setMaterial(val);
//     } else {
//       setFinish(val);
//     }
//   };
//   return (
//     <div className="w-full px-4">
//       <div className="mx-auto w-full ">
//         <RadioGroup by="value" value={selected} onChange={setSelected} aria-label="Server size" className="space-y-2">
//           {MATERIALS?.options?.map((plan) => (
//             <Radio
//               key={plan.value}
//               value={plan}
//               onClick={()=>HandlePrice(plan)}
//               className={cn('group relative flex cursor-pointer rounded-lg bg-white/5 py-4 px-5 text-black shadow-md transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/10',{
//                 'border-2 border-green-500':selected
//               })}
//             >
//               <div className="flex w-full items-center justify-between">
//                 <div className="text-sm/6">
//                   <p className="font-semibold text-black">{plan.label}</p>
//                   <div className="flex gap-2 text-black/50">
//                     {plan?.description != undefined && <div>{plan?.description}</div>}
//                     <div aria-hidden="true">&middot;</div>
//                     <div className='text-gray-800'>${plan.price}</div>
//                     {/* <div aria-hidden="true">&middot;</div>
//                     <div>{plan.disk}</div> */}
//                   </div>
//                 </div>
//                 <CheckCircleIcon className="size-6 fill-green opacity-0 transition group-data-[checked]:opacity-100" />
//               </div>
//             </Radio>
//           ))}
//         </RadioGroup>
//       </div>
//     </div>
//   )
// }