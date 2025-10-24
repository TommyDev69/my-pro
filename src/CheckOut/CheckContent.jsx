import React from 'react'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FormCheck from './FormCheck'
import DetailCheck from './DetailCheck'
import Shipping from './Shipping'
import CardDetail from './CardDetail'

export default function CheckContent({ OpenTogCheck, onTogCheckClick,  OpenTogShip, HandleShipClick, OpenTogCard, HandleCardClick}) {
  return (
    <div className="flex flex-col md:flex md:flex-row w-full gap-4 py-14 md:px-16 px-4">

    <div className="md:w-7/12   md:mx-24 mt-5 flex flex-col gap-4">
      <table className="w-full border border-[#e8e8e8] rounded-xl overflow-hidden  border-collapse">
        <thead>
          <tr>
            <th className="p-0 text-left ">
              <div
                onClick={onTogCheckClick}
                className={`cursor-pointer flex items-center gap-4 pl-4 py-4  w-full rounded-t-xl transition-colors duration-300 ${
                  OpenTogCheck ? 'bg-[#F28123]/20' : 'bg-[#e8e8e8]'
                }`}
              >
                <div className="bg-[#F28123] rounded-full">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="py-2 px-2 text-[12px] text-[#e8e8e8]"
                  />
                </div>
                <p className="capitalize text-[16px]">Billing Address</p>
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          {OpenTogCheck && (
            <tr>
              <td className="py-6 pl-4 border-2 border-[#e8e8e8]">
                <FormCheck />
              </td>
            </tr>
          )}

         
        </tbody>
      </table>
     {/* Shipping Section */}
        <Shipping 
          OpenTogShip={OpenTogShip}
          HandleShipClick={HandleShipClick}
        />

        {/* card details Section */}
        <CardDetail 
          OpenTogCard={OpenTogCard}
          HandleCardClick={HandleCardClick}
        />


    </div>
      <DetailCheck />
    </div>

  )
}
