import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import NavEmojis from "./NavEmojis";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const NavContent = ({ onMenuClick, openToggle, hoverToggle, setHover}) => {
  const link = "#";

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex">
        <div className="relative content flex md:flex-row gap-6 text-2xl text-white md:py-10 py-14">

          {/* HOME DROPDOWN */}
          <div
            className="relative group"
            onMouseEnter={() => setHover("home")}
            onMouseLeave={() => setHover(null)}
          >
            <Link to="/" className="capitalize text-2xl transition font-bold hover:text-[#F28123]">
              home
            </Link>

            <div
              className={`absolute left-0 top-full mt-2 bg-white text-black px-2 rounded-xl shadow-lg flex flex-col w-56 transition-all duration-300 z-50 ${
                hoverToggle === "home"
                  ? "opacity-100 translate-y-1 visible"
                  : "opacity-0 translate-y-2 invisible"
              }`}
            >
              <Link to="/" className="px-4 py-2 hover:bg-[#F28123] rounded-t-xl capitalize">
                static home
              </Link>
              <Link to="/" className="px-4 py-2 hover:bg-[#F28123] rounded-b-xl capitalize">
                slider home
              </Link>
            </div>
          </div>

          <Link to="/About" className="capitalize text-2xl transition hover:text-[#F28123]">about</Link>

          {/* PAGE DROPDOWN */}
          <div
            className="relative group"
            onMouseEnter={() => setHover("page")}
            onMouseLeave={() => setHover(null)}
          >
            <Link to="/" className="capitalize text-2xl transition hover:text-[#F28123]">
              page
            </Link>

            <div
              className={`absolute left-0 top-full mt-2 bg-white text-black px-2 rounded-xl shadow-lg flex flex-col w-56 transition-all duration-300 z-50 ${
                hoverToggle=== "page"
                  ? "opacity-100 translate-y-1 visible"
                  : "opacity-0 translate-y-2 invisible"
              }`}
            >
              <Link to="/" className="px-4 py-2 hover:bg-[#F28123] capitalize rounded-t-xl">404 page</Link>
              <Link to="/" className="px-4 py-2 hover:bg-[#F28123] capitalize rounded-b-xl">about</Link>
              <Link to="/Cart" className="px-4 py-2 hover:bg-[#F28123] capitalize rounded-t-xl">cart</Link>
              <Link to="/" className="px-4 py-2 hover:bg-[#F28123] capitalize rounded-b-xl">check out</Link>
              <Link to="/" className="px-4 py-2 hover:bg-[#F28123] capitalize rounded-t-xl">contact</Link>
              <Link to="/" className="px-4 py-2 hover:bg-[#F28123] capitalize rounded-b-xl">news</Link>
              <Link to="/" className="px-4 py-2 hover:bg-[#F28123] capitalize rounded-t-xl">shop</Link>
            </div>
          </div>

          {/* OTHER LINKS */}
          <div className="relative group" onMouseEnter={() =>setHover('news')}
             onMouseLeave={() =>setHover(null)}>
          <Link to="/" className="capitalize text-2xl transition hover:text-[#F28123]">news</Link>
             <div
              className={`absolute left-0 top-full mt-2 bg-white text-black px-2 rounded-xl shadow-lg flex flex-col w-56 transition-all duration-300 z-50 ${
                hoverToggle === "news"
                  ? "opacity-100 translate-y-1 visible"
                  : "opacity-0 translate-y-2 invisible"
              }`}
            >
              <Link to="/" className="px-4 py-2 hover:bg-[#F28123] rounded-t-xl capitalize">
                news
              </Link>
              <Link to="/" className="px-4 py-2 hover:bg-[#F28123] rounded-b-xl capitalize">
                single news
              </Link>
            </div>
          </div>
          <Link to="/" className="capitalize text-2xl transition hover:text-[#F28123]">contact</Link>

          <div className="relative group" onMouseEnter={() =>setHover('shop')}
             onMouseLeave={() =>setHover(null)}>
          <Link to="/" className="capitalize text-2xl transition hover:text-[#F28123]">shop</Link>
           <div
              className={`absolute left-0 top-full mt-2 bg-white text-black px-2 rounded-xl shadow-lg flex flex-col w-56 transition-all duration-300 z-50 ${
                hoverToggle === "shop"
                  ? "opacity-100 translate-y-1 visible"
                  : "opacity-0 translate-y-2 invisible"
              }`}
            >
              <Link to="/" className="px-4 py-2 hover:bg-[#F28123] rounded-t-xl capitalize">
                shop
              </Link>
              <Link to="/" className="px-4 py-2 hover:bg-[#F28123] rounded-b-xl capitalize">
                check out
              </Link>
              <Link to="/" className="px-4 py-2 hover:bg-[#F28123] rounded-t-xl capitalize">
                single product
              </Link>
              <Link to="/" className="px-4 py-2 hover:bg-[#F28123] rounded-b-xl capitalize">
                cart
              </Link>
            </div>
        </div>

         <div className="relative group" onMouseEnter={() =>setHover('register')}
             onMouseLeave={() =>setHover(null)}>
          <Link to="/" className="capitalize text-2xl transition hover:text-[#F28123]">register</Link>
           <div
              className={`absolute left-0 top-full mt-2 bg-white text-black px-2 rounded-xl shadow-lg flex flex-col w-56 transition-all duration-300 z-50 ${
                hoverToggle === "register"
                  ? "opacity-100 translate-y-1 visible"
                  : "opacity-0 translate-y-2 invisible"
              }`}
            >
              
              <Link to="/" className="px-4 py-2 hover:bg-[#F28123] rounded-b-xl capitalize">
                sign up
              </Link>
              <Link to="/" className="px-4 py-2 hover:bg-[#F28123] rounded-t-xl capitalize">
                sign in
              </Link>
              
            </div>
        </div>
        </div>
      </div>

      {/* Icons */}
      <NavEmojis />

      {/* Mobile Toggle */}
      <div className="md:hidden py-12 mx-4 w-14">
        <FontAwesomeIcon
          icon={openToggle ? faXmark : faBars}
          onClick={onMenuClick}
          className="text-[20px] text-white transition duration-300"
        />
      </div>
    </>
  );
};

export default NavContent;
