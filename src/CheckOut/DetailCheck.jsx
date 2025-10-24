import React from 'react'

export default function DetailCheck() {
  return (
    <div className='md:mx-0 mdx-auto  py-6'>
      <table border={2} className=" border-red-600  md:w-0 w-full">
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
                <td className="flex justify-between boerder gap-x-6  px-2 py-9" colSpan={1}>
                    <div >
                        <button className='capital border px-6 py-4 rounded-full bg-[#F28123] text-[10px] md:text-[10px]  font-bold capitalize text-white hover:bg-[#ccc] hover:font-bold hover:text-[#F28123]'>place order</button>
                    </div>
                     

                </td>
                <td></td>
            </tr>
        </tbody>
      </table>

         </div>
  )
}
