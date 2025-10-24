import React from 'react'
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FormCheck from './FormCheck'

export default function CheckContent({OpenTogCheck}) {
  return (
    <div >
     <table className='w-10/12'>
        <thead>
            <tr>
                <th onClick={ OpenTogCheck} className='bg-[#e8e8e8] py-4 flex gap-4 flex-row cursor-pointer items-center  pl-4 rounded-t-xl mt-5 ml-4'>
                       <div className='  bg-[#F28123] rounded-full'>
                        <FontAwesomeIcon icon={faCheck} className='py-2 px-2  text-[12px] text-[#e8e8e8]' />
                    </div>
                    <div>
                        <p className='capitalize text-[16px] '>billing address</p>
                    </div>
                </th>
                <td className='bg-[#e8e8e8] py-8 flex gap-4 flex-row cursor-epointer  items-center  pl-4 roundeed-t-xl mtw-5 ml-4 border-[#e8e8e8] border-2'>
                    <FormCheck />
                </td>
            </tr>
        </thead>
{/* 
        <tbody>
           
        </tbody> */}
     </table>
   
    </div>
  )
}
