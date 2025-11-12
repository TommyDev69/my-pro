import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ButtonProduct from './ButtonProduct'

export default function Shopping({ result, onFilterSelect, selectedCategory }) {
  return (
    <div className='pt-24'>
      <ButtonProduct onFilterSelect = {onFilterSelect}  selectedCategory ={selectedCategory}/>

    <div className=' w-11/12 md:w-full grid grid-flow-row md:grid md:grid-cols-3 gap-4 container mx-auto my-10  justify-center'>
      {
        result.map(market =>(
          <div className=" hover:shadow-slate-500" key={market.id}>
            <div className="border-[#ccc] rounded-2xl border-2 block shadow-2xl hover:shadow-[#F28123]">
               <div className="w-full">
                <img src={market.Image} alt={market.Image} className='mx-auto  md:mx-0 md:w-full' />
               </div>
               <div className="w-full pt-12 ">
                <p className="capitalize font-bold text-[24px] flex flex-grow justify-center">{market.Name}</p>
               </div>
               <div className="w-full pt-2 pb-4">
                <p className="capitalize text-[16px] flex flex-grow justify-center">{market.weight}</p>
               </div>

                <div className="w-full">
                   <p className="capitalize font-bold text-[30px] flex flex-grow justify-center">{market.amount}</p>
               </div>

                <div className=" mx-auto flex justify-center items-center py-10">
                   <button type="button" className=" py-3 px-6 rounded-xl capitalize bg-[#F28123]  gap-4 text-[#ffffff]  border-2 text-[16px] flex flex-grow-0 items-center justify-center">
                    <FontAwesomeIcon icon={market.icon} />
                    {market.iconName}</button>
               </div>
            </div>
          </div>
        ))
      }
    </div>
    </div>
  )
}
