import React from 'react'
import ContactDetails from './ContactDetails'

export default function ContactForm({title}) {
  return (
    <div className='flex flex-col md:flex md:flex-row'>
      <div className="leading-snug  md:w-8/12 py-12">
        <p className="font-bold capitalize text-[26px] px-7">{title}</p>
        <p className="md:text-[16px] w-full px-8 pt-4 pb-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque perspiciatis, obcaecati nulla modi libero ratione neque ut impedit dolor
             iusto, cumque optio fugit. Voluptatum autem placeat vero itaque cumque tempore.
        </p>
  
        <form  action="">
            <div className="flex flex-row md:flex justify-center gap-6 w-[9/12] py-2 mx-auto">
                <div className="w-5/12 ">
                  <input type="text" className='border w-full border-[#ccc] px-4 py-6 text-[14px] placeholder:px-4 placeholder:text-[14px] placeholder:py-6 rounded-2xl' placeholder='Name' />
                </div>
                <div className="w-5/12">
                <input type="email" className='border w-full border-[#ccc] px-4 py-6 text-[14px] placeholder:px-4 placeholder:text-[14px] placeholder:py-6 rounded-2xl' placeholder='Email' />
                </div>
            </div>
            <div className="flex flex-row md:flex justify-center gap-6 w-[9/12] py-6">
                <div className="w-5/12 ">
                  <input type="text" className='border w-full border-[#ccc] px-4 py-6 text-[14px] placeholder:px-4 placeholder:text-[14px] placeholder:py-6 rounded-2xl' placeholder='Phone' />
                </div>
                <div className="w-5/12">
                <input type="text" className='border w-full border-[#ccc] px-4 py-6 text-[14px] placeholder:px-4 placeholder:text-[14px] placeholder:py-6 rounded-2xl' placeholder='Subject' />
                </div>
            </div>

            <div className="flex flex-row md:flex justify-center itefms-center mx-auto gap-6 w-10/12">
                <textarea cols={10} rows={15} className='border w-full ww-[10fd0%]  border-[#ccc] px-4 py-6 text-[14px] placeholder:px-4 placeholder:text-[14px] placeholder:py-6 rounded-2xl' placeholder='Text us here' />
            </div>

            <div className='my-4 flex flex-row md:pl-24 pl-8' >
                <button className='capital border px-6 py-4 rounded-full bg-[#F28123] text-[10px] md:text-[16px]  font-bold capitalize text-white hover:bg-[#ccc] hover:font-bold hover:text-[#F28123]'>submit</button>
            </div>
        </form>
      </div>
      <ContactDetails />
    </div>
  )
}
