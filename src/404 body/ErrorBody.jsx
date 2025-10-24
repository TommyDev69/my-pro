import { faSadCry } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function ErrorBody() {
  return (
    <div className='py-44 text-[#051922] flex flex-col justify-center items-center'>
       <FontAwesomeIcon icon = {faSadCry} className='text-[80px] font-[400]' />
       <p className="pb-2 pt-8 capitalize text-[40px] font-[400] text-pretty">oops! not found.</p>
       <p className="capitalize text-[16px] pb-6">the page you requested for is not found.</p>
        <div>
         <button className='capital   flex justify-center border px-6 py-4  rounded-full bg-[#F28123] text-[8px] md:text-[12px] font-bold capitalize text-white hover:bg-[#ccc] hover:font-bold hover:text-[#F28123]'>back to home</button>
         </div>
    </div>
  )
}
