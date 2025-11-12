
import React, { useState } from "react";
import NavBrand from './NavBrand'
import NavContent from './NavContent.';
import DropNav from "./DropNav";
// import NavEmojis from './NavEmojis';
const NavContainer = () => {
  const[openToggle, setToggle] =useState(false)
  const [hoverToggle, setHoverToggle] = useState(null)
  // const[openMenu, setOpenMenu] =useState(false);
  const handleLinkClick = () => {
    setToggle(false);
  };

 return(

 <div>

    <div className=' fixed top-0 left-0 w-full z-50 flex justify-between space-x-10 max-w-screen bg-[#051922] h-32 z-1'>
      <NavBrand  />
      <NavContent hoverToggle={hoverToggle} setHover={setHoverToggle} openToggle={openToggle} onMenuClick={() => setToggle(!openToggle)} />
    </div>
         {openToggle && <DropNav handleLinkClick={handleLinkClick}/>}
 </div>
  )
}
export default NavContainer;
