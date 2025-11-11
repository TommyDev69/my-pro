import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'
import ArchivePos from './ArchivePos'
import Tags from './Tags'

export default function SingleWork({Ans}) {
  return (
    <div className='md:w-4/12 hidden md:block md:text-left text-center'>
      <p className='text-[#051922] text-[24px] font-semibold capitalize'>recent posts</p>
      {Ans.map(list =>(
        <div className=" text-[#051922] px-6 md:px-0 text-[15px] py-6" key={list}>
            <div className="flex items-center gap-2">
              <div className="">
                 <FontAwesomeIcon icon={list.icon_3} className='text-[10px] font-bold'/>
              </div>
               <p className="cursor-pointer">You will vainly look for fruit on it in autumn</p>
            </div>
             <div className="flex items-center gap-2  py-6">
              <div className="">
                 <FontAwesomeIcon icon={list.icon_3} className='text-[10px] font-black text-[#000000] '/>
              </div>
               <p className="cursor-pointer">A man's worth has its season,like tomato</p>
            </div>

            <div className="flex items-center gap-2  pb-6">
              <div className="">
                 <FontAwesomeIcon icon={list.icon_3} className='text-[10px] font-black text-[#000000] '/>
              </div>
               <p className="cursor-pointer">Good thoughts bear good fresh juicy fruit</p>
            </div>
             <div className="flex items-center gap-2  pb-6">
              <div className="">
                 <FontAwesomeIcon icon={list.icon_3} className='text-[10px] font-black text-[#000000] '/>
              </div>
               <p className="cursor-pointer">Fall inlove with the fresh oranges</p>
            </div>

             <div className="flex items-center gap-2  pb-6">
              <div className="">
                 <FontAwesomeIcon icon={list.icon_3} className='text-[10px] font-black text-[#000000] '/>
              </div>
               <p className="cursor-pointer">Why the berries always look deliciuos</p>
            </div>
        </div>
      ))}

      <ArchivePos ans={Ans} />
      <Tags />
    </div>
  )
}
