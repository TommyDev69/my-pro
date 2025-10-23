import React from 'react'
import { faXmark, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function SearchWorkSpace({Cancel,title}) {
  return (
    <div className='md:w-full  bg-[#051922] md:h-[100vh]'>
      <div className="flex justify-end  px-10 py-8 " >
        <FontAwesomeIcon
          icon={faXmark}
          onClick={Cancel}
          className='text-3xl text-white p-2 rounded-2xl border-2 cursor-pointer hover:bg-[#F28123] transition'
        />
      </div>
      <div className="py-24 w-full ">
        <p className="md:text-[34px] text-[34px] text-white uppercase text-center font-bold ">{title}</p>
        <form action="" className=' flex flex-col justify-center items-center py-8 '>
            <input type='text' placeholder='Keywords' className='md:w-5/12 w-10/12  bg-transparent pt-16 md:text-[40px] text-[30px] text-center border-b-2 focus-within:text-center focus-within:text-[40px] font-bold text-white border-[#F28123] focus:outline-none  placeholder:text-[#ccc] placeholder:opacity-50 placeholder:text-center placeholder:text-[40px]'  />
              <div className="pt-16">
                <button className=' py-4 px-6 text-[20px] font-bold hover:bg-white  rounded-full capitalize bg-[#F28123]'>search<FontAwesomeIcon icon={faSearch} className='px-2' /></button>
              </div>
        </form>
      </div>
    </div>
  )
}
