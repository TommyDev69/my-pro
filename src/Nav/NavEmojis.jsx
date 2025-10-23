import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const NavEmojis = () => {
    return (
    <div className="bg-forange-500 w-40 md:py-10 py-12 flex md:flex-row md:gap-6 gap-10 ">
      <Link to="/Cart" >
        <FontAwesomeIcon icon={faCartPlus} className="md:text-2xl text-[20px]  text-white " />
      </Link>
      <Link to = "/Search">
            <FontAwesomeIcon icon={faSearch} className="md:text-2xl text-[20px] text-white" />
      </Link>
   
      
    </div>
      );
}
 
export default NavEmojis;