import { faMap, faClock, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import HeroBg from '../image/hero-bg-3.jpg'


export default function ContactDetails() {
  return (
    <div
      className="bg-cover  rounded-3xl md:w-4/12 my-14  pb-10 bg-center h-[60vh] flex flex-col text-black justifey-center pl-6"
      style={{ backgroundImage: `url(${HeroBg})` }} 
    >
      <div className="flex items-center pt-6  space-x-3  text-[20px]  rounded-xl">
        <FontAwesomeIcon icon={faMap} className="text-[#F28123] " />
        <p className="capitalize font-bold">
          Shop Address 
        </p>
      </div>
       <address className="not-italic px-14 text-[13px] text-[#5a5858] w-8/12">123 Fruit Lane, Lagos, Nigeria.</address>

        <div className="flex items-center pt-6  space-x-3  text-[20px]  rounded-xl">
        <FontAwesomeIcon icon={faClock} className="text-[#F28123] " />
        <p className="capitalize font-bold">
          Shop hours
        </p>
      </div>
      <div className="flex ">

       <p className="not-italic pl-14 text-[13px] text-[#5a5858] ">MON - FRIDAY:</p>
       <p className="not-italic  text-[15px] pl-1 text-[#5a5858] "> 8 to 9 PM</p>
      </div>
      <div className="flex ">

       <p className="not-italic pl-14 text-[13px] text-[#5a5858] ">SAT - SUN: </p>
       <p className="not-italic  text-[15px] pl-1 text-[#5a5858] ">10 to 8 PM</p>
      </div>

       <div className="flex items-center pt-6  space-x-3  text-[20px]  rounded-xl">
        <FontAwesomeIcon icon={faAddressBook} className="text-[#F28123] " />
        <p className="capitalize font-bold">
          contact 
        </p>
      </div>
      <div className="flex ">

       <p className="not-italic pl-14 text-[13px] text-[#5a5858] capitalize">phone:</p>
       <p className="not-italic  md:text-[13px] pl-1 text-[#5a5858] "> +234 9026-274950</p>
      </div>
      <div className="flex ">

       <p className="not-italic pl-14 text-[13px] text-[#5a5858] capitalize">email </p>
       <p className="not-italic  text-[13px] pl-1 text-[#5a5858] capitalize">sunnevian4life@gmail.com</p>
      </div>

    </div>
  )
}
