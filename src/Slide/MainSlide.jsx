import React, { useState, useEffect } from "react";

import img1 from "../image/avaters/ceo.png";
import img2 from "../image/avaters/posi.png";
import img4 from "../image/avaters/avatar3.png";
import img3 from "../image/avaters/avatar2.png";
// import { useState } from "react";
import SlideDetail from "./SlideDetail";
const Mainslide = ({ Info }) => {
   const [data,setData] = useState([
    {id:1, Image:img1, name:'Ajagbe Tomiwa', alias:'linux', title:'software develop', content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam sunt quod beatae corrupti atque velit quos et aperiam, expedita dolorem, repellendus sint. Itaque, architecto! Non ad eius labore cum iusto.'},
    {id:2, Image:img2, name:'Banwo olamiposi', alias:'atomi', title:'local shop owner', content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam sunt quod beatae corrupti atque velit quos et aperiam, expedita dolorem, repellendus sint. Itaque, architecto! Non ad eius labore cum iusto.'},
    {id:3, Image:img3, name:'jacob sikim', alias:'jux456', title:'local shop owner', content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam sunt quod beatae corrupti atque velit quos et aperiam, expedita dolorem, repellendus sint. Itaque, architecto! Non ad eius labore cum iusto.'},
    {id:4, Image:img4, name:'saira hakim', alias:'saya321', title:'local distributor', content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam sunt quod beatae corrupti atque velit quos et aperiam, expedita dolorem, repellendus sint. Itaque, architecto! Non ad eius labore cum iusto.'},
])

  const [index, setIndex] = useState(0);


useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [data.length]);
    return ( 
        <div>
            <SlideDetail Info={data} index={index} setIndex = {setIndex} />
        </div>
     );
}
 
export default Mainslide;