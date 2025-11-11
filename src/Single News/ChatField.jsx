import React from 'react'

export default function ChatField() {
  return (
    <div className='text-[#051922] py-24'>
        <div className="w-full py-4">
           <p className="font-bold text-[28px] px-4 md:px-0">Leave a comment</p>
        </div>
        <div className="w-full pb-16 px-4 md:px-0">
           <p className="text-[#a7a5a5] text-[16px]">If you have a comment dont feel hesitate to send us your opinion.</p>
        </div>
        <div className="flex flex-col md:flex md:flex-row gap-6 pb-4">
            <div className="md:w-5/12 px-4 md:px-0">
               <input type='text' className='border border-[#ccc] py-4 pl-5 w-full rounded-lg text-[20px]' placeholder='Your Name' />
            </div>

             <div className="md:w-5/12 px-4 md:px-0">
               <input type='text ' className='border border-[#ccc] py-4 pl-5 w-full rounded-lg text-[20px]' placeholder='Your Email' />
            </div>
        </div>

        <div className='md:w-11/12 px-4 md:px-0'>
            <textarea cols={5} rows={7} className='border border-[#ccc] py-4 pl-5 w-full md:w-[93%] rounded-lg text-[20px]' placeholder='Your Message' />
        </div>

           <div >
                <button className='capital border px-6 py-4 rounded-full bg-[#F28123] text-[10px] md:text-[16px] font-bold capitalize text-white hover:bg-[#ccc] hover:font-bold hover:text-[#F28123]'>submit</button>
            </div>
    </div>
  )
}
