const ActionButton = () => {
    const shopButton ="fruit collection"
    const contactButton = "contact us"

    return ( 
        <div className=" flex-col md:flex-row md:justify-center md:items-center md:space-x-5 space-x-0 space-y-6 md:space-y-0">
            <button className="text-white capitalize text-lg md:text-md rounded-full border-none py-4 px-5 w-screen md:w-52 bg-[#F28123] shadow-inner shadow-white">{shopButton}</button>
            <button className="text-white capitalize text-xl rounded-full border border-[#F28123] py-4 px-5 w-screen md:w-52  shadow-white shadow-inner ">{contactButton}</button>

        </div>
     );
}
 
export default ActionButton;