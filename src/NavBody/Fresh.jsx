import React from 'react'
import Delicious from './Delicious';

export default function Fresh() {
    var header = "fresh and organic";
    const content = 'delicious season fruits'

  return (
    <div className='grid  place-items-center py-52'>
        <p className="upper text-[#F28123] text-[13px] md:text-[15px] font-bold tracking-[7px] font-worksans ">{header}</p>
        <Delicious Content = {content} />
    </div>
  )
}
