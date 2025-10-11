
import React, { useState } from "react";
import NavBrand from './NavBrand'
import NavContent from './NavContent.';
import DropNav from "./DropNav";
// import NavEmojis from './NavEmojis';
const NavContainer = () => {
  const[openToggle, setToggle] =useState(false)
  const [hoverToggle, setHoverToggle] = useState(null)
 return(

 <div>

    <div className='  flex justify-between space-x-10 max-w-screen bg-[#051922cc] h-32 z-1'>
      <NavBrand  />
      <NavContent hoverToggle={hoverToggle} setHover={setHoverToggle} openToggle={openToggle} onMenuClick={() => setToggle(!openToggle)} />
    </div>
         {openToggle && <DropNav />}
 </div>
  )
}
export default NavContainer;
