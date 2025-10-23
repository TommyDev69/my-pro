import { useState } from "react";
import { faShippingFast, faBagShopping, faMoneyBill, faSync } from "@fortawesome/free-solid-svg-icons";
import Img from '../image/feature-bg.jpg'
import ServeContent from "./ServeContent";
const AboutService = () => {
    const[service, setSevice] = useState([
        {id:1, image:faShippingFast, topic:'home delivery', content:'sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.'},
        {id:2, image:faBagShopping, topic:'best Price', content:'sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.'},
        {id:3, image:faMoneyBill, topic:'custom box', content:'sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.'},
        {id:4, image:faSync, topic:'quick refund', content:'sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.'},

    ])
 
    return ( 
          <div className="py-40">
            <ServeContent Service = {service} Photo = {Img} Quest = 'why these service' />
          </div>
     );
}
 
export default AboutService;