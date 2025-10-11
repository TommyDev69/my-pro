import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function FootBody({About, getInTouch, Page,Subscribe, iconic, icon_2}) {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 space-x-12 be container mx-auto px-24  g-[#051922cc] p-7'>
      {About.map((about_data) =>(
        <div className="py-24 w-10/12 " key={about_data.id}>
            <p className="text-[32px] font-bold text-white capitalize py-12">{about_data.Topic}</p>
            <p className="text-[14px] text-white w-full">{about_data.content}</p>
        </div>
        
      ))}

       {getInTouch.map((getting_data) =>(
        <div className="py-24 w-10/12" key={getting_data.id}>
            <p className="text-[32px] font-bold text-white capitalize py-12">{getting_data.Topic}</p>
            <div className='text-[14px] text-white w-full'>
                <p>{getting_data.address}</p>
                <p className="py-2">{getting_data.email}</p>
                <p className="">{getting_data.contact}</p>
            </div>

        </div>
         ))}

          {Page.map((page_data) =>(
        <div className="py-24 w-10/12" key={page_data.id}>
            <p className="text-12 md:text-[32px] font-bold text-white capitalize py-12">{page_data.Topic}</p>
            <div className=' text-[14px] text-white w-full font-bold '>
               <div className="flex pb-4">
                 <FontAwesomeIcon  icon = {iconic}  className='text-[rgb(242,129,35)] '/>
                <p className="capitalize text hover:text-[rgb(242,129,35)]">home</p>
               </div>
               <div className="flex py-4">
                 <FontAwesomeIcon  icon = {iconic}  className='text-[rgb(242,129,35)]'/>
                <p className="capitalize text hover:text-[rgb(242,129,35)]">about</p>
               </div>
               <div className="flex py-4">
                 <FontAwesomeIcon  icon = {iconic}  className='text-[rgb(242,129,35)]'/>
                <p className="capitalize text hover:text-[rgb(242,129,35)]">shop</p>
               </div>
               <div className="flex py-4">
                 <FontAwesomeIcon  icon = {iconic}  className='text-[rgb(242,129,35)]'/>
                <p className="capitalize text hover:text-[rgb(242,129,35)]">contact</p>
               </div>
               <div className="flex py-4">
                 <FontAwesomeIcon  icon = {iconic}  className='text-[rgb(242,129,35)]'/>
                <p className="capitalize text hover:text-[rgb(242,129,35)]">news</p>
               </div>   
            </div>

        </div>
         ))}

          {Subscribe.map((subscribe) =>(
        <div className="py-24 w-10/12" key={subscribe.id}>
            <p className="text-12 md:text-[32px] font-bold text-white capitalize py-12">{subscribe.Topic}</p>
            <p className="text-[14px] text-white w-full">{subscribe.content}</p>
            <form className="py-5">
                <div className="py-4 flex">
                    <input type="email" placeholder='Email' className='p-4  text-[16px] rounded-xl focus:placeholder-[rgb(242,129,35)] focus-within:bg-[#051922cc] focus-within: text-white border-[#051922cc]' />
                    <button  className='border-2 py-4'><FontAwesomeIcon icon={icon_2} />send</button>
                </div>
            </form>

        </div>
         ))}
    </div>
  )
}
