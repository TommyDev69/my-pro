import DisplayTime from "./DisplayTime";

const PromoInfo = ({title, content,TimeLeft}) => {
    return ( 
        <div className="md:w-[50%] md:px-16 py-6">

        <div className="flex  justiwfy-center  pt-16 items-center text-[15px] md:text-[44px] w-full  font-bold ">
            <p className=" capitalize text-[rgb(242,129,35)]">deal</p>
            <p className="text pl-4">of the month</p>
        </div>
       <div className="flex flex-col justify-center w-full">
         <p className="md:text-[34px] text-[24px] font-bitcount uppercase">{title}</p>
        <p className="md:text-[18px] text-[12px]  pb-14">{content}</p>
       </div>
       <DisplayTime TimeLeft= {TimeLeft} />
        </div>
     );
}
 
export default PromoInfo;