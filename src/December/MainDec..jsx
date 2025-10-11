

const MainDec = () => {
    return ( 
        <div className="December my-28 py-28 px-12 md:px-36">

            <div className=" mx-aeuto flex flex-col justify-items-center items-cqenter   ">
                <p className="font-worksans text-[24px] text-[#051922cc] font-bold md:text-[44px] leading-tight">
                    December sale is on!<br /> with big<span className="text-[rgb(242,129,35)] pl-4">Discount...</span>
                </p>
            </div>

            <div className="flex py-10">
                <div className="flex flex-col pt-6 text-[16px] md:text-[24px]">
                    <p className="">sale!</p>
                    <p className="">upto</p>
                </div>
                <p className="text-worksans text-[53px] md:text-[70px] text-[rgb(242,129,35)]">50%</p>
                <p className="xl pt-16 text-[16px] md:text-[24px]">off</p>

            </div>
            <button className="p-4 capitalize text-[20px] border-2 rounded-2xl border-white bg-[rgb(242,129,35)] text-white">shop now</button>
        </div>
     );
}
 
export default MainDec;