import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function LastFooter({Media, Ceo, title}) {
  return (
    <div className='flex text-[10px] md:text-[20px] container py-8 justify-cewnter space-x-4 md:px-0 px-8'>
        <div className="flex md:w-11/12 md:px-24  bgww-red-400">
            <p className="text-white md:text-16">copyright &copy;{new Date().getFullYear()}-</p>
            <p className="text-[rgb(242,129,35)]">{Ceo},</p>
            <p className="text-white">{title}</p>
        </div>

        {Media.map((social) =>(
            <div className="bg-blue-w300 text-white"  key={social.id}>
                <FontAwesomeIcon  icon={social.icon}/>
            </div>
        ))}
      
    </div>
  )
}
