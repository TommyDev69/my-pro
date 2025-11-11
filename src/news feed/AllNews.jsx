import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AllNews({AllData, icon_1, icon_2}) {
  return (
    <div>

            <div className="grid grid-cols-2 md:grid-cols-3 container mx-auto gap-8 md:gap-16 py-10 ">
                {AllData.map((blog)=>(
                    <div className="block w-11/12  md:w-10/12 mx-auto md:mx-0  hover:border-none hover:shadow-[rgb(242,129,35)] shadow-[black] shadow-xl border-2 rounded-3xl hovewr:" key={blog.id}>
                        <img src={blog.image} alt={blog.news} className="w-full" />
                        <div className="md:px-8  py-8">
                            <p className="md:text-[24px] text-12 text-worksans font-bold text-[#051922cc]">{blog.topic}</p>
                            <div className="flex my-6 w-full items-center text-pretty justify-around text-slate-500">
                                <p className="md:text-[14px] text-[8px]"><FontAwesomeIcon icon={icon_1} className='text-[16px]' />&nbsp; Admin</p>
                                <p className="md:text-[14px] text-[8px] md:pl-20"><FontAwesomeIcon icon={icon_2} className='text-[16px]'/>&nbsp; 10 October 2025</p>

                            </div>

                            <p className="md:text-[14px] text-[montserrat] text-slate-600 ">{blog.content}</p>
                            <button className="md:text-[18px]  pt-6 hover:text-[rgb(242,129,35)]">{blog.but} <FontAwesomeIcon icon={blog.icon} className="md:text-[10px] md:mb-1" /></button>
                        </div>
                    </div>

                ))}
            </div>
            <div className="flex justify-center  items-center my-24">
                <button className="rounded-full border-0 capitalize text-white text-[16px] bg-[rgb(242,129,35)] px-6 py-4 hover:bg-[#051922cc]">more news</button>
            </div>
        </div>
  )
}
