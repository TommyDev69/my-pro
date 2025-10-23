import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function LastFooter({Media, Ceo, title}) {
  return (
    <div className='flex text-[8px] md:text-[20px] container py-8 justify-cewnter space-x-4 md:px-0 px-4'>
        <div className="flex md:w-11/12 w-full md:px-24">
            <p className="text-white text-[4px] md:text-[14px] py-2 pr-2">copyright &copy;{new Date().getFullYear()}-</p>
            <p className="text-[rgb(242,129,35)] pt-2">{Ceo},</p>
            <p className="text-white text-[8px] md:text-[14px] py-2 pl-2">{title}</p>
        </div>

        {Media.map((social) =>(
            <div className=" text-white pt-2 md:pt-0"  key={social.id}>
                <FontAwesomeIcon  icon={social.icon}/>
            </div>
        ))}
      
    </div>
  )
}
