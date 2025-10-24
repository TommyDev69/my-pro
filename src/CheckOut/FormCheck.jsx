import React from 'react'


export default function FormCheck() {
  return (
   
        <div className='flex flex-col w-full '>
            <div className=' md:w-11/12 mx-10 py-4'>
                <input type='text' className='border-2 border-[#e8e8e8] w-full py-4 text-[16px] px-8 rounded-2xl ' placeholder='Name' />
            </div>

            <div className=' md:w-11/12 mx-10 py-4'>
                <input type='text' className='border-2 border-[#e8e8e8] w-full py-4 text-[16px] px-8 rounded-2xl ' placeholder='Email' />
            </div>

            <div className=' md:w-11/12 mx-10 py-4'>
                <input type='text' className='border-2 border-[#e8e8e8] w-full py-4 text-[16px] px-8 rounded-2xl ' placeholder='Address' />
            </div>

            <div className=' md:w-11/12 mx-10 py-4'>
                <input type='text' className='border-2 border-[#e8e8e8] w-full py-4 text-[16px] px-8 rounded-2xl ' placeholder='Phone' />
            </div>
            <div className=' md:w-11/12 mx-10 py-4'>
                <textarea cols={10} rows={5} className='border-2 border-[#e8e8e8] w-full py-4 text-[16px] px-8 rounded-2xl' placeholder='Say something' ></textarea>
            </div>
        </div>
    
  )
}
