import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Comments from './Comments'

export default function SingleSpace({Answer}) {
  return (
    <div className='md:w-10/12'>
       {Answer.map(list =>(
        <div className="" key={list.id}>
           <div className="w-full ">
             <img className='w-11/12 mx-auto ' src={list.image} alt={list.image} />
           </div>

           <div className="flex gap-x-10">

           <div className="text-[14px] text-[#ccc] py-4 px-6 md:px-0 flex items-center gap-2">
             <FontAwesomeIcon icon={list.icon_1} />
             <p className="  capitalize">admin</p>
           </div>

           <div className="text-[14px] text-[#ccc] py-4 flex items-center gap-2">
             <FontAwesomeIcon icon={list.icon_2} />
             <p className="capitalize">{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
           </div>
           </div>
          <div className="md:w-full md:text-left text-center">
             <p className="font-bold text-[#051922] text-[24px] py-6">{list.topic}</p>
             <p className=" md:w-10/12 text-[18px]  px-6   pb-8">{list.content_1}</p>
             <p className=" md:w-10/12 text-[18px]  px-6  pb-8 ">{list.content_2}</p>
             <p className=" md:w-10/12 px-6  text-[18px] pb-8 ">{list.content_3}</p>
             <p className=" md:w-10/12  px-6  text-[18px] pb-8 ">{list.content_4}</p>
          </div>
        </div>
       ))}
       
       <Comments />
       
    </div>
  )
}
