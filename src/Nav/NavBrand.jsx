import React from 'react'
import brand_logo from '../image/brand logo.png'
export default function NavBrand() {
  return (
    <div className=' py-7 md:py-7 w-20 '>
      <img src={brand_logo} alt='logo' className='md:w-40 w-16'/>
    </div>
  )
}