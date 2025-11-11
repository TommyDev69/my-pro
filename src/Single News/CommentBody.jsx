import React from 'react'
import ChatField from './ChatField'

export default function CommentBody({Msg}) {
  return (
    <div>
      <p className="text-[#051922] px-6 md:px-0  font-bold text-[24px]">3 comments</p>
      {
        Msg.map(details=>(
            <div  className={`${details.indent ?? ''}`} key={details.id}>
                
                <div className="flex pt-6 pl-4 md:pl-0  gap-6">
                    {/* <div className="  bg-blue-500"> */}
                      <img src={details.Image} alt={details.Image} className='w-[300px] h-[50px] md:w-[150px] md:h-[70px] rounded-full' />
                    {/* </div> */}
                    <div className={` ${details.textSize ?? ''}`} >
                        <article className="flex gap-x-4 capitalize  items-center text-[18px] md:text-[20px] font-bold">{details.Name}
                            <p className="text-[#a8a5a5] text-[16px] md:text-[18px]">{details.Date}</p>
                            <p className="text-[16px] md:text-[18px] cursor-pointer underline lowercase text-[#504f4f]">{details.Con}</p>
                            
                        </article>
                        <div className="w-11/12 md:w-10/12 text-justify">
                           <p className="text-[14px] md:text-[16px] text-[#a8a5a5] pb-10 leading-10">{details.comment}</p>
                        </div>
                    </div>
                </div>
            </div>
        ))
      }
      <ChatField />
    </div>
  )
}
