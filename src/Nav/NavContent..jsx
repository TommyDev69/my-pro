import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavEmojis from "./NavEmojis";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
const NavContent = ({ onMenuClick}) => {
    const link = "#"
    return ( 
        <>
        <div className="hidden md:flex ">

            <div className="  content  flex md:flex-row flex-col w-2bg-black    gap-6 md:gap-6 text-2xl text-white md:py-10 py-14" >
                <a href={link} className="capitalize  text-2xl transition font-bold">home</a>
                <a href={link} className="capitalize  text-2xl transition">about</a>
                <a href={link} className="capitalize  text-2xl transition">page</a>
                <a href={link} className="capitalize  text-2xl transition">about</a>
                <a href={link} className="capitalize  text-2xl transition">news</a>
                <a href={link} className="capitalize  text-2xl transition">contact</a>
                <a href={link} className="capitalize text-2xl transition">shop</a>
            
            </div>

           
        </div>
        <NavEmojis />
         <div className="md:hidden  py-12 mx-4 w-14">
                 <FontAwesomeIcon icon={faBars} onClick={ onMenuClick} className="md:text-2xl text-[20px] text-white  transition" />
        </div>
        </>
    );
}
 
export default NavContent;

