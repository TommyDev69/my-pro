const DropNav = () => {
      const link = "#"
    return (

        <div className="bg-[#051922cc] w-full md:hidden transition-transform ">
        
            <div className="  content  flex md:flex-row flex-col w-2bg-black gap-2 md:gap-0 text-2xl text-white md:py-0 py-0" >
                <a href={link} className="capitalize bg-[#F28123] p-5   text-2xl font-bold transition">home</a>
                <a href={link} className="capitalize  text-2xl  hover:bg-[#F28123]  p-5 transition-all ">about</a>
                <a href={link} className="capitalize  text-2xl  hover:bg-[#F28123]  p-5 transition-all">page</a>
                <a href={link} className="capitalize  text-2xl  hover:bg-[#F28123]  p-5 transition-all">about</a>
                <a href={link} className="capitalize  text-2xl  hover:bg-[#F28123]  p-5 transition-all">news</a>
                <a href={link} className="capitalize  text-2xl  hover:bg-[#F28123]  p-5 transition-all">contact</a>
                <a href={link} className="capitalize text-2xl  hover:bg-[#F28123]  p-5 transition-all">shop</a>
            
            </div>

        </div>
    );
}
 
export default DropNav;