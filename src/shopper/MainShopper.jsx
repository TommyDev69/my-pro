import { useState } from "react";
import img1 from "../image/products/product-img-1.jpg";
import img2 from "../image/products/product-img-2.jpg";
import img3 from "../image/products/product-img-3.jpg";
import img4 from "../image/products/product-img-4.jpg";
import img5 from "../image/products/product-img-5.jpg";
import img6 from "../image/products/product-img-6.jpg";

import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Shopping from "./Shopping";
const MainShopper = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState("All");
      
    const[allFruit] = useState([
        {id:1, Image:img1, Name:'strawberry', weight:"per kg", amount:'#1100', icon: faCartPlus, iconName:'add to cart'},
        {id:1, Image:img2, Name:'berry', weight:"per kg", amount:'#3500', icon: faCartPlus, iconName:'add to cart'},
        {id:2, Image:img3, Name:'lemon', weight:"per kg", amount:'#800', icon: faCartPlus, iconName:'add to cart'},
        {id:3, Image:img4, Name:'avocado', weight:"per kg", amount:'#2100', icon: faCartPlus, iconName:'add to cart'},
        {id:4, Image:img5, Name:'apple', weight:"per kg", amount:'#2100', icon: faCartPlus, iconName:'add to cart'},
        {id:6, Image:img6, Name:'strawberry', weight:"per kg", amount:'#1800', icon: faCartPlus, iconName:'add to cart'}

    
    ])

    const filteredFruits = selectedCategory === "All" ? allFruit : allFruit.filter(fruit => fruit.Name === selectedCategory);

    const itemsPerPage = 6;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedFruits = filteredFruits.slice(startIndex, startIndex + itemsPerPage);

    return (  
        <>
        <Shopping  result={paginatedFruits} onFilterSelect={setSelectedCategory} selectedCategory={selectedCategory} />
        </>
    );
}
 
export default MainShopper;