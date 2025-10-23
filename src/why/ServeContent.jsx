import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { div } from 'framer-motion/client';

export default function ServeContent({Service, Photo, Quest}) {
  return (
    
    <div className='flex flex-row '>
        <div className='w-full md:w-[60%] flex flex-col items-center md:items-start  '>

            <p className="capitalize text-[#F28123] font-worksans font-bold md:text-[35px] text-[30px] pb-16 md:px-32">{Quest}</p>
            <div className="grid grid-cols-2 w-full  md:px-32  " >
            {Service.map((service) =>(
                
<div>

                <div className=" px-4e0 w-full md:px-0 px-2" key={service.id}> 
                    <div className="grid grid-cols-[15%_85%] gap-0  md:gap-6">

                <FontAwesomeIcon  icon={service.image} className='border-2 md:text-[24px] text-[18px] rounded-full border-dashed my-6 text-[#F28123] border-[#F28123] p-4' />
                <p className="font-bold py-8 texet-[24px] md:px-4 md:pl-0 pl-12 capitalize md:text-[24px] text-[16px]  bg-bflue-700 ">{service.topic}</p>
                    </div>
                    <div className="w-full flex items-center md:ml-14  justxify-center">
                        <p className=" md:w-[60%] px-6 mxc:px-0 ">{service.content}</p>
                    </div>
                </div>
</div>
                    
                 
                    
                ))}
                </div>    
        </div>

        <div className="md:w-[40%] hidden md:block">
            <img src={Photo} alt="fruity" />
        </div>
    </div>
  )
}
