import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";


const DropNav = () => {
  const link = "#";

  // Each menu item has its own toggle
  const [homeOpen, setHomeOpen] = useState(false);
//   const [aboutOpen, setAboutOpen] = useState(false);
  const [pageOpen, setPageOpen] = useState(false);
  const [newsOpen, setNewsOpen] = useState(false);
//   const [contactOpen, setContactOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  

  return (
    <div className="fixed top-32 left-0  z-50 bg-[#051922] w-full md:hidden transition-all duration-500 ease-in-out">
        <div className="content divide-y divide-[#ffffff22] flex flex-col text-2xl text-white py-0">

            {/* HOME */}
            <div className="flex bg-[#F28123] p-5">
            <Link to="/" className="capitalize w-11/12 text-2xl font-bold transition">
                home
            </Link>
            <FontAwesomeIcon
                className="py-2 cursor-pointe bg-slate-700 border-[#ccc] border-2 p-2 rounded-xl"
                icon={homeOpen ? faMinus : faPlus}
                onClick={() => setHomeOpen(!homeOpen)}
            />
            </div>
            {homeOpen && (
            <div className="bg-[#00000044] text-lg text-white p-4 transition-all duration-500 ease-in-out">
                <a href={link} className="block py-6 uppercase hover:bg-[#F28123]">static home</a>
                <a href={link} className="block py-6 uppercase hover:bg-[#F28123]">slider home</a>
            </div>
            )}

            {/* ABOUT */}
            <div className="flex p-5 hover:bg-[#F28123] transition-all">
            <Link to ="/About" className="capitalize w-11/12 text-2xl">about</Link>
            </div>
            

            {/* PAGE */}
            <div className="flex p-5 hover:bg-[#F28123] transition-all">
            <a href={link} className="capitalize w-11/12 text-2xl">page</a>
            <FontAwesomeIcon
                className="py-2 cursor-pointer  bg-slate-700 border-[#ccc] border-2 p-2 rounded-xl"
                icon={pageOpen ? faMinus : faPlus}
                onClick={() => setPageOpen(!pageOpen)}
            />
            </div>
            {pageOpen && (
            <div className="bg-[#00000044] text-lg text-white px-4">
                <Link to ="/404" className="block py-6 uppercase hover:bg-[#F28123]">404 page</Link>
                <Link to ="/a   bout" className="block py-6 uppercase  hover:bg-[#F28123]">about</Link>
                <Link to ="/Cart" className="block py-6 uppercase  hover:bg-[#F28123]">cart</Link>
                <Link to ="/Checkout" className="block py-6 uppercase  hover:bg-[#F28123]">check out</Link>
                <Link to ="/Contact" className="block py-6 uppercase  hover:bg-[#F28123]">contact</Link>
                <Link to ="/News" className="block py-6 uppercase  hover:bg-[#F28123]">news</Link>
                <Link to ="/Shop" className="block py-6 uppercase  hover:bg-[#F28123]">shop</Link>
            </div>
            )}

            {/* NEWS */}
            <div className="flex p-5 hover:bg-[#F28123] transition-all">
            <a href={link} className="capitalize w-11/12 text-2xl">news</a>
            <FontAwesomeIcon
                className="py-2 cursor-pointer  bg-slate-700 border-[#ccc] border-2 p-2 rounded-xl"
                icon={newsOpen ? faMinus : faPlus}
                onClick={() => setNewsOpen(!newsOpen)}
            />
            </div>
            {newsOpen && (
            <div className="bg-[#00000044] text-lg text-white p-4 transition-all duration-500 ease-in-out">
                <Link to="/" className="block py-6 uppercase hover:bg-[#F28123">news</Link>
                <Link to="/Single_News" className="block py-6 uppercase hover:bg-[#F28123">single news</Link>
            </div>
            )}

            {/* CONTACT */}
            <div className="flex p-5 hover:bg-[#F28123] transition-all">
            <a href={link} className="capitalize w-11/12 text-2xl">contact</a>
            
            </div>

            {/* SHOP */}
            <div className="flex p-5 hover:bg-[#F28123] transition-all">
            <a href={link} className="capitalize w-11/12 text-2xl">shop</a>
            <FontAwesomeIcon
                className="py-2 cursor-pointer  bg-slate-700 border-[#ccc] border-2 p-2 rounded-xl"
                icon={shopOpen ? faMinus : faPlus}
                onClick={() => setShopOpen(!shopOpen)}
                />
            </div>
                {shopOpen &&(
                    <div className="bg-[#00000044] text-lg text-white p-4 transition-all duration-500 ease-in-out">
                    <Link to="/" className="block py-6 uppercase hover:bg-[#F28123]">shop</Link>
                    <Link to="/Checkout" className="block py-6 uppercase hover:bg-[#F28123]">checkout</Link>
                    <Link to="/Single_News" className="block py-6 uppercase hover:bg-[#F28123]">single product</Link>
                    <Link to="/Cart" className="block py-6 uppercase hover:bg-[#F28123]">cart</Link>

                </div>
                )}
       

            <div className="flex p-5 hover:bg-[#F28123] transition-all">
            <a href={link} className="capitalize w-11/12 text-2xl">regiser</a>
            <FontAwesomeIcon
                className="py-2 cursor-pointer  bg-slate-700 border-[#ccc] border-2 p-2 rounded-xl"
                icon={newsOpen ? faMinus : faPlus}
                onClick={() => setRegisterOpen(!registerOpen)}
            />
            </div>
            {registerOpen && (
                <div className="bg-[#00000044] text-lg text-white p-4 transition-all duration-500 ease-in-out">
                    <a href={link} className="block py-6 uppercase hover:bg-[#F28123]">sign up</a>
                    <a href={link} className="block py-6 uppercase hover:bg-[#F28123]">sign in</a>
                </div>
            )}
        </div>
    
    </div>
  );
};

export default DropNav;
