import React from 'react'

export default function Tags() {

  return (
    <>
    <p className="text-[24px] font-bold text-[#051922] pb-4 ">Tags</p>
    <div className='w-11/12'>
        <div className="flex gap-4 pb-4 ">
         <div className='bg-[#ccc] p-4 rounded-xl'>Apple</div>
        <div className='bg-[#ccc] p-4 rounded-xl'>Stawberry</div>
        <div className='bg-[#ccc] p-4 rounded-xl'>Oranges</div>
        </div>
        
        <div className="flex gap-4">

        <div className='bg-[#ccc] p-4 rounded-xl'>Berries</div>
        <div className='bg-[#ccc] p-4 rounded-xl'>Lemon</div>
        <div className='bg-[#ccc] p-4 rounded-xl'>Banana</div>
        </div>

        


    </div>
    </>
  )
}
