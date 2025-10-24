import React from 'react'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function CardDetail({OpenTogCard, HandleCardClick}) {
  return (
    <div>
       <table className="w-full border border-[#e8e8e8] rounded-xl overflow-hidden  border-collapse">
        <thead>
          <tr>
            <th className="p-0 text-left">
              <div
               onClick={HandleCardClick}
                className={`cursor-pointer flex items-center gap-4 pl-4 py-4 rounded-t-xl transition-colors duration-300 ${
                   OpenTogCard ? 'bg-[#F28123]/20' : 'bg-[#e8e8e8]'
                }`}
              >
                <div className="bg-[#F28123] rounded-full">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="py-2 px-2 text-[12px] text-[#e8e8e8]"
                  />
                </div>
                <p className="capitalize text-[16px]">card Address</p>
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          {OpenTogCard && (
            <tr>
              <td className="py-6 pl-4 border-2 border-[#e8e8e8] transition-all duration-300 ease-in-out">
                 Your card details goes here.
               
              </td>
            </tr>
          )}

          {/* <tr>
            <td>fffffffffffffffff</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  )
}
