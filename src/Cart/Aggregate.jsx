import React from 'react'

export default function Aggregate() {
  return (
    <div className='md:mx-0 mx-auto '>
      <table border={2} className=" border-red-600  md:wf-0 w-[f90%]  " celwlPadding={5} cellSpacwing={4}>
        <thead>
            <tr className="border  bg-[#efefef]  text-black  md:text-[18px] text-[14px] h-16 ">
                <td  className=' px-6'>total</td>
                <td className=' px-6'>price</td>
            </tr>
        </thead>
        
        <tbody>

            <tr className='border h-24   md:text-[18px] text-[14px]'>
                <td className='border px-6'>
                    
                        subtotal
                   
                </td>
                <td className='px-6'> #500</td>
                
            </tr>

            <tr className='border  h-24  md:text-[18px] text-[14px] '>
               <td className='border px-6'>
                   
                        shipping
                </td>
                <td className='px-6'> #500</td>
                
               
                
            </tr>

            <tr className=' h-24 md:text-[18px] text-[14px]'>
               <td className='border px-6'>
                    
                        total
                  
                </td>
                <td className='border px-6'>
                   

                    #500
                  
                </td>
                
            </tr>
            <tr>
                <td className="flex justify-between boerder gap-x-6  px-6 py-9" colSpan={1}>
                    <div >
                        <button className='capital border px-6 py-4 rounded-full bg-[#F28123] text-[10px] md:text-[16px]  font-bold capitalize text-white hover:bg-[#ccc] hover:font-bold hover:text-[#F28123]'>update cart</button>
                    </div>
                     <div >
                        <button className='capital border px-6 py-4 rounded-full bg-[#F28123] text-[10px] md:text-[16px] font-bold capitalize text-white hover:bg-[#ccc] hover:font-bold hover:text-[#F28123]'>cheack out</button>
                    </div>

                </td>
                <td></td>
            </tr>
        </tbody>
      </table>

      <p className="text-[24px] text-[#051922] capitalize pt-8 pb-2">apply coupon</p>
      <div className="flex w-full py-6">
        <input type="text" className='border text-[20px] h-14 px-2 placeholder:pl-2 rounded-3xl' placeholder='Coupon' />
      </div>
       <div>
         <button className='capital   flex justify-center border px-6 py-4  rounded-full bg-[#F28123] text-[10px] md:text-[16px] font-bold capitalize text-white hover:bg-[#ccc] hover:font-bold hover:text-[#F28123]'>apply</button>
         </div>

    </div>
  )
}
