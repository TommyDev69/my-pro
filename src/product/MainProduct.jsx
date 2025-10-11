import { useState } from "react";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import MarketSection from "./MarketSection";
// IMAGE SECTION
import img1 from "../image/products/product-img-1.jpg";
import img2 from "../image/products/product-img-2.jpg";
import img3 from "../image/products/product-img-3.jpg";
import img4 from "../image/products/product-img-4.jpg";


const MainProduct = () => {
    var content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio."
    const[stock, setStock] = useState([
            {id:1, Image:img1, Name:'strawberry', weight:"per kg", amount:'#1100', icon: faCartPlus, iconName:'add to cart'},
            {id:1, Image:img2, Name:'berry', weight:"per kg", amount:'#3500', icon: faCartPlus, iconName:'add to cart'},
            {id:1, Image:img3, Name:'lemon', weight:"per kg", amount:'#800', icon: faCartPlus, iconName:'add to cart'},
            {id:1, Image:img4, Name:'strawberry', weight:"per kg", amount:'#2100', icon: faCartPlus, iconName:'add to cart'}

    ])
    return (  
        <div className="flex flex-col  justify-ceqqnter items-center py-40">
            <div className="md:text-[35px] text-[20px]  font-700 flex font-workswans">
                <p className="text-[rgb(242,129,35)] pr-1">Our</p>
                P <p className="flex"> <span className="border-b-2 border-solid border-[#F28123]">ro</span>ducts</p>
                
            </div>
            <p className="text-[16px] text-center leading-relaxed w-11/12 md:w-1/2 pb-20">{content}</p>


            <MarketSection details={stock} />

        </div>
    );
}
 
export default MainProduct;