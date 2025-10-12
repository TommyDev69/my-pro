import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import NavEmojis from "./NavEmojis";


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
            <a href={link} className="capitalize text-2xl transition font-bold hover:text-[#F28123]">
              home
            </a>

            <div
              className={`absolute left-0 top-full mt-2 bg-white text-black px-2 rounded-xl shadow-lg flex flex-col w-56 transition-all duration-300 z-50 ${
                hoverToggle === "home"
                  ? "opacity-100 translate-y-1 visible"
                  : "opacity-0 translate-y-2 invisible"
              }`}
            >
              <a href={link} className="px-4 py-2 hover:bg-[#F28123] rounded-t-xl capitalize">
                static home
              </a>
              <a href={link} className="px-4 py-2 hover:bg-[#F28123] rounded-b-xl capitalize">
                slider home
              </a>
            </div>
          </div>
          <a href={link} className="capitalize text-2xl transition hover:text-[#F28123]">about</a>

          {/* PAGE DROPDOWN */}
          <div
            className="relative group"
            onMouseEnter={() => setHover("page")}
            onMouseLeave={() => setHover(null)}
          >
            <a href={link} className="capitalize text-2xl transition hover:text-[#F28123]">
              page
            </a>

            <div
              className={`absolute left-0 top-full mt-2 bg-white text-black px-2 rounded-xl shadow-lg flex flex-col w-56 transition-all duration-300 z-50 ${
                hoverToggle=== "page"
                  ? "opacity-100 translate-y-1 visible"
                  : "opacity-0 translate-y-2 invisible"
              }`}
            >
              <a href={link} className="px-4 py-2 hover:bg-[#F28123] capitalize rounded-t-xl">404 page</a>
              <a href={link} className="px-4 py-2 hover:bg-[#F28123] capitalize rounded-b-xl">about</a>
              <a href={link} className="px-4 py-2 hover:bg-[#F28123] capitalize rounded-t-xl">cart</a>
              <a href={link} className="px-4 py-2 hover:bg-[#F28123] capitalize rounded-b-xl">check out</a>
              <a href={link} className="px-4 py-2 hover:bg-[#F28123] capitalize rounded-t-xl">contact</a>
              <a href={link} className="px-4 py-2 hover:bg-[#F28123] capitalize rounded-b-xl">news</a>
              <a href={link} className="px-4 py-2 hover:bg-[#F28123] capitalize rounded-t-xl">shop</a>
            </div>
          </div>

          {/* OTHER LINKS */}
          <div className="relative group" onMouseEnter={() =>setHover('news')}
             onMouseLeave={() =>setHover(null)}>
          <a href={link} className="capitalize text-2xl transition hover:text-[#F28123]">news</a>
             <div
              className={`absolute left-0 top-full mt-2 bg-white text-black px-2 rounded-xl shadow-lg flex flex-col w-56 transition-all duration-300 z-50 ${
                hoverToggle === "news"
                  ? "opacity-100 translate-y-1 visible"
                  : "opacity-0 translate-y-2 invisible"
              }`}
            >
              <a href={link} className="px-4 py-2 hover:bg-[#F28123] rounded-t-xl capitalize">
                news
              </a>
              <a href={link} className="px-4 py-2 hover:bg-[#F28123] rounded-b-xl capitalize">
                single news
              </a>
            </div>
          </div>
          <a href={link} className="capitalize text-2xl transition hover:text-[#F28123]">contact</a>

          <div className="relative group" onMouseEnter={() =>setHover('shop')}
             onMouseLeave={() =>setHover(null)}>
          <a href={link} className="capitalize text-2xl transition hover:text-[#F28123]">shop</a>
           <div
              className={`absolute left-0 top-full mt-2 bg-white text-black px-2 rounded-xl shadow-lg flex flex-col w-56 transition-all duration-300 z-50 ${
                hoverToggle === "shop"
                  ? "opacity-100 translate-y-1 visible"
                  : "opacity-0 translate-y-2 invisible"
              }`}
            >
              <a href={link} className="px-4 py-2 hover:bg-[#F28123] rounded-t-xl capitalize">
                shop
              </a>
              <a href={link} className="px-4 py-2 hover:bg-[#F28123] rounded-b-xl capitalize">
                check out
              </a>
              <a href={link} className="px-4 py-2 hover:bg-[#F28123] rounded-t-xl capitalize">
                single product
              </a>
              <a href={link} className="px-4 py-2 hover:bg-[#F28123] rounded-b-xl capitalize">
                cart
              </a>
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
