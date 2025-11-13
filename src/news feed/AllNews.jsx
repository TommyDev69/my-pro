import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NewsButton from './NewsButton';

export default function AllNews({AllData, icon_1, icon_2}) {
  return (
    <div>

            <div className="grid grid-cols-2 md:grid-cols-3 my-24 md:container md:mx-auto mx-3 gap-4 md:gap-5 py-10 ">
                {AllData.map((blog)=>(
                    <div className="flex-grow-0 w-full  md:w-full mxc-auto md:mx-0  hover:border-none hover:shadow-[rgb(242,129,35)] shadow-[black] shadow-xl border-2 rounded-3xl" key={blog.id}>
                        <img src={blog.image} alt={blog.news} className="w-full" />
                        <div className="md:px-4 px-4 py-8">
                            <p className="md:text-[14px] text-10 text-worksans font-bold text-[#051922cc]">{blog.topic}</p>
                            <div className="flex my-6 w-full items-center text-pretty justify-aronund text-slate-500">
                                <p className="md:text-[12px] text-[8px]"><FontAwesomeIcon icon={icon_1} className='md:text-[12px] text-[10px]' />&nbsp; Admin</p>
                                <p className="md:text-[12px] text-[8px] md:pl-3 pl-2 "><FontAwesomeIcon icon={icon_2} className='md:text-[12px] text-[10px]'/>&nbsp; 10 October 2025</p>

                            </div>

                            <p className="md:text-[14px] text-[8px] text-[montserrat] text-slate-600 ">{blog.content}</p>
                            <button className="md:text-[14px] text-10  pt-6 hover:text-[rgb(242,129,35)]">{blog.but} <FontAwesomeIcon icon={blog.icon} className="md:text-[10px] text-8 md:mt-2" /></button>
                        </div>
                    </div>

                ))}
            </div>
            <div className="flex justify-center  items-center my-24">
                <button className="rounded-full border-0 capitalize text-white text-[16px] bg-[rgb(242,129,35)] px-6 py-4 hover:bg-[#051922cc]">more news</button>
            </div>
            <NewsButton />
        </div>
  )
}
