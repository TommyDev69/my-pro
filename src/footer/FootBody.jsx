import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function FootBody({About, getInTouch, Page,Subscribe, iconic, icon_2}) {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 md:gap-x-12  md:container mx-auto md:px-6 px-6 py-24'>
      {About.map((about_data) =>(
        <div className="md:space-y-12 w-10/12 " key={about_data.id}>
            <p className="md:text-[24px] text-[18px] font-bold text-white capitalize py-12">{about_data.Topic}</p>
            <p className="md:text-[14px] text-white w-full">{about_data.content}</p>
        </div>
        
      ))}

       {getInTouch.map((getting_data) =>(
        <div className="md:space-y-12 w-10/12" key={getting_data.id}>
            <p className="md:text-[24px] text-[18px] font-bold text-white capitalize py-12">{getting_data.Topic}</p>
            <div className='md:text-[12px] text-white w-full'>
                <p>{getting_data.address}</p>
                <p className="py-2">{getting_data.email}</p>
                <p className="">{getting_data.contact}</p>
            </div>

        </div>
         ))}

          {Page.map((page_data) =>(
        <div className="md:space-y-12 w-10/12" key={page_data.id}>
            <p className="text-[18px] md:text-[24px] font-bold text-white capitalize py-12">{page_data.Topic}</p>
            <div className=' md:text-[12px] text-white w-full font-bold '>
               <div className="flex pb-4">
                 <FontAwesomeIcon  icon = {iconic}  className='text-[rgb(242,129,35)] '/>
                <p className="capitalize text hover:text-[rgb(242,129,35)] pl-2">home</p>
               </div>
               <div className="flex py-4">
                 <FontAwesomeIcon  icon = {iconic}  className='text-[rgb(242,129,35)] py-2'/>
                <p className="capitalize text hover:text-[rgb(242,129,35)] pl-2">about</p>
               </div>
               <div className="flex py-4">
                 <FontAwesomeIcon  icon = {iconic}  className='text-[rgb(242,129,35)]'/>
                <p className="capitalize text hover:text-[rgb(242,129,35)] pl-2">shop</p>
               </div>
               <div className="flex py-4">
                 <FontAwesomeIcon  icon = {iconic}  className='text-[rgb(242,129,35)]'/>
                <p className="capitalize text hover:text-[rgb(242,129,35)] pl-2">contact</p>
               </div>
               <div className="flex py-4">
                 <FontAwesomeIcon  icon = {iconic}  className='text-[rgb(242,129,35)]'/>
                <p className="capitalize text hover:text-[rgb(242,129,35)] pl-2">news</p>
               </div>   
            </div>

        </div>
         ))}

          {Subscribe.map((subscribe) =>(
        <div className="md:space-y-12  w-10/12" key={subscribe.id}>
            <p className="text-[18px] md:text-[24px] font-bold text-white capitalize py-12">{subscribe.Topic}</p>
            <p className="md:text-[12px] text-white w-full">{subscribe.content}</p>
            <form className="py-5">
                <div className="py-4 flex">
                    <input type="email" placeholder='Email' className='md:p-2 focus:p-4 text-[8px]  md:text-[8px] rounded-xl focus:placeholder-[rgb(242,129,35)] focus-within:bg-[#051922cc] focus-within: text-white border-[#051922cc]' />
                    <button  className='border-2  border-slate-500 rounded-xl md:py-4 md:px-4 px-2 md:text-[9px] text-[rgb(242,129,35)]'><FontAwesomeIcon icon={icon_2} /></button>
                </div>
            </form>

        </div>
         ))}
    </div>
  )
}
