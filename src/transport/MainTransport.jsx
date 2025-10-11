import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShippingFast, faPhoneVolume, faSync } from "@fortawesome/free-solid-svg-icons";
import Tariff from './Tariff';

export default function MainTransport() {
const [details, setDetails] = useState([
    {id:1, image:faShippingFast, topic:'Free Shipping', content:'When order over $75'},
     {id:2, image:faPhoneVolume, topic:'24/7 Support', content:'Get support all day'},
      {id:3, image:faSync, topic:'Refund', content:'Get refund within 3 days!'},
])

return(
    <div className='bg-[#cccccc]'>
        <Tariff Output={details} />
    </div>
)
}