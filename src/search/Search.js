
import { useState } from "react";
import SearchWorkSpace from "./SearchWorkSpace";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const [search, setSearch] =useState(true)
    const navigate = useNavigate();
    const handleCancel = () =>{
        setSearch(false);
        navigate("/");
    }
    return ( 
        <div className="w-full bg-[#051922] h-[100vh]">
          
           {search && <SearchWorkSpace Cancel ={handleCancel}  title='search for :' />}

           {!setSearch && (
        <div className="text-white text-2xl">
          Search closed. <button onClick={() => setSearch(true)} className="underline">Open Search</button>
        </div>
      )}
        </div>
     );
}
 
export default Search;