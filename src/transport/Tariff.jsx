import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Tariff({Output}) {

return(
    <div className='md:flex flex-row gap-2 justify-cengter'>
    {Output.map((items)=>
    <div className="text-2xl md:w-screen w-full md:justify-center flex" key={items.id}>
        <div className="w-[65px] h-[65px] border-2 rounded-full font-thin border-[#F28123] border-dotted bg-gray-950 my-10  flex justify-center items-center">

           <FontAwesomeIcon icon={items.image}  className='text-[24px] text-[#F28123]'/>

        </div>
       <div className="den">
         <p className="capitalize font-bold px-6 pt-14 ">{items.topic}</p>
        <p className="capitalize  px-6  ">{items.content}</p>
        
       </div>
    </div>
    )}
    </div>
)
}