import React from 'react'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Shipping({ HandleShipClick,  OpenTogShip}) {
  return (
    <div>
       <table className="w-full border border-[#e8e8e8] rounded-xl overflow-hidden  border-collapse">
        <thead>
          <tr>
            <th className="p-0 text-left">
              <div
                onClick={ HandleShipClick}
                className={`cursor-pointer flex items-center gap-4 pl-4 py-4 rounded-t-xl transition-colors duration-300 ${
                   OpenTogShip ? 'bg-[#F28123]/20' : 'bg-[#e8e8e8]'
                }`}
              >
                <div className="bg-[#F28123] rounded-full">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="py-2 px-2 text-[12px] text-[#e8e8e8]"
                  />
                </div>
                <p className="capitalize text-[16px]">shipping Address</p>
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          {OpenTogShip && (
            <tr>
              <td className="py-6 pl-4 border-2 border-[#e8e8e8] transition-all duration-300 ease-in-out">
                  Your shipping address form is here.
               
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
