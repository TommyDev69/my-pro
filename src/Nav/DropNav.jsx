    import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import React, { useState } from "react";
    import { Link } from "react-router-dom";


    const DropNav = ({handleLinkClick}) => {
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
        <div className="fixed top-32 left-0  z-50 bg-[#051922] w-full md:hidden transition-all duration-500 ease-in-out overflow-y-auto">
            <div className="content divide-y divide-[#ffffff22] flex flex-col text-2xl text-white py-0">

                {/* HOME */}
                <div className="flex bg-[#F28123] p-5">
                <Link to="/" onClick={handleLinkClick} className="capitalize w-11/12 text-2xl font-bold transition">
                    home
                </Link>
                {/* <FontAwesomeIcon
                    className="py-2 cursor-pointe bg-slate-700 border-[#ccc] border-2 p-2 rounded-xl"
                    icon={homeOpen ? faMinus : faPlus}
                    onClick={() => setHomeOpen(!homeOpen)}
                /> */}
                </div>
                {/* {homeOpen && (
                <div className="bg-[#00000044] text-lg text-white p-4 transition-all duration-500 ease-in-out">
                    <a href={link} className="block py-6 uppercase hover:bg-[#F28123]">static home</a>
                    <a href={link} className="block py-6 uppercase hover:bg-[#F28123]">slider home</a>
                </div>
                )} */}

                {/* ABOUT */}
                <div className="flex p-5 hover:bg-[#F28123] transition-all">
                <Link to ="/About" onClick={handleLinkClick} className="capitalize w-11/12 md:text-xl text-[18px]">about</Link>
                </div>
                

                {/* PAGE */}
                <div className="flex p-5 hover:bg-[#F28123] transition-all">
                <Link to="/Shop" onClick={handleLinkClick} className="capitalize w-11/12 md:text-xl text-[18px]">page</Link>
                <FontAwesomeIcon
                    className="py-2 cursor-pointer  bg-slate-700 border-[#ccc] border-2 p-2 rounded-xl"
                    icon={pageOpen ? faMinus : faPlus}
                    onClick={() => setPageOpen(!pageOpen)}
                />
                </div>
                {pageOpen && (
                <div className="bg-[#00000044] md:text-xl text-[18px] text-white px-4  duratiovn-500 ease-in-out">
                    <Link to ="/404" onClick={handleLinkClick} className="block py-6 uppercase hover:bg-[#F28123]">404 page</Link>
                    <Link to ="/About" onClick={handleLinkClick}  className="block py-6 uppercase  hover:bg-[#F28123]">about</Link>
                    <Link to ="/Cart" onClick={handleLinkClick}  className="block py-6 uppercase  hover:bg-[#F28123]">cart</Link>
                    <Link to ="/Checkout" onClick={handleLinkClick}  className="block py-6 uppercase  hover:bg-[#F28123]">check out</Link>
                    <Link to ="/Contact" onClick={handleLinkClick}  className="block py-6 uppercase  hover:bg-[#F28123]">contact</Link>
                    <Link to ="/News" onClick={handleLinkClick}  className="block py-6 uppercase  hover:bg-[#F28123]">news</Link>
                    <Link to ="/Shop" onClick={handleLinkClick}  className="block py-6 uppercase  hover:bg-[#F28123]">shop</Link>
                </div>
                )}

                {/* NEWS */}
                <div className="flex p-5 hover:bg-[#F28123] transition-all">
                <Link to='/News' onClick={handleLinkClick} className="capitalize w-11/12 md:text-xl text-[18px]">news</Link>
                <FontAwesomeIcon
                    className="py-2 cursor-pointer  bg-slate-700 border-[#ccc] border-2 p-2 rounded-xl"
                    icon={newsOpen ? faMinus : faPlus}
                    onClick={() => setNewsOpen(!newsOpen)}
                />
                </div>
                {newsOpen && (
                <div className="bg-[#00000044] md:text-xl text-[18px] text-white p-4 transition-all duration-500 ease-in-out">
                    <Link to="/News" onClick={handleLinkClick} className="block py-6 uppercase hover:bg-[#F28123]">news</Link>
                    <Link to="/Single_News" onClick={handleLinkClick} className="block py-6 uppercase hover:bg-[#F28123]">single news</Link>
                </div>
                )}

                {/* CONTACT */}
                <div className="flex p-5 hover:bg-[#F28123] transition-all">
                <Link to="/Contact" onClick={handleLinkClick} className="capitalize w-11/12 md:text-xl text-[20px]">contact</Link>
                
                </div>

                {/* SHOP */}
                <div className="flex p-5 hover:bg-[#F28123] transition-all">
                <Link to="/Shop" onClick={handleLinkClick} className="capitalize w-11/12 text-2xl">shop</Link>
                <FontAwesomeIcon
                    className="py-2 cursor-pointer  bg-slate-700 border-[#ccc] border-2 p-2 rounded-xl"
                    icon={shopOpen ? faMinus : faPlus}
                    onClick={() => setShopOpen(!shopOpen)}
                    />
                </div>
                    {shopOpen &&(
                        <div className="bg-[#00000044] text-lg text-white p-4 transition-all duration-500 ease-in-out">
                        <Link to="/Shop" onClick={handleLinkClick} className="block py-6 uppercase hover:bg-[#F28123]">shop</Link>
                        <Link to="/Checkout" onClick={handleLinkClick} className="block py-6 uppercase hover:bg-[#F28123]">checkout</Link>
                        <Link to="/Single_News" onClick={handleLinkClick} className="block py-6 uppercase hover:bg-[#F28123]">single product</Link>
                        <Link to="/Cart" onClick={handleLinkClick} className="block py-6 uppercase hover:bg-[#F28123]">cart</Link>

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
