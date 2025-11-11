import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function ArchivePos({ans}) {
  return (
    <div className='text-[#051922]'>
        <p className="text-[24px] font-bold">Archive Posts</p>
        {
            ans.map(list =>(
                <div className=" text-[18px]" key={list.id}>
                    <div className="flex items-center gap-2 py-4">
                        <div className="">
                          <FontAwesomeIcon icon={list.icon_3} className='text-[10px] font-bold'/>
                        </div>
                        <p className="cursor-pointer">JAN 2025 (5)</p>
                    </div>

                    <div className="flex items-center gap-2 pb-4">
                        <div className="">
                          <FontAwesomeIcon icon={list.icon_3} className='text-[10px] font-bold'/>
                        </div>
                        <p className="cursor-pointer">FEB 2025 (3)</p>
                    </div>

                    


                    <div className="flex items-center gap-2 pb-4">
                        <div className="">
                            <FontAwesomeIcon icon={list.icon_3} className='text-[10px] font-bold'/>
                        </div>
                        <p className="cursor-pointer">MAY 2025 (5)</p>
                    </div>

                    <div className="flex items-center gap-2 pb-4">
                        <div className="">
                            <FontAwesomeIcon icon={list.icon_3} className='text-[10px] font-bold'/>
                        </div>
                        <p className="cursor-pointer">SEP 2025 (2)</p>
                    </div>

                    <div className="flex items-center gap-2 pb-4">
                        <div className="">
                            <FontAwesomeIcon icon={list.icon_3} className='text-[10px] font-bold'/>
                        </div>
                        <p className="cursor-pointer">DEC 2025 (10)</p>
                    </div>
                </div>
            ))
        }
     
    </div>
  )
}
