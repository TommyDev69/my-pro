const DisplayTime = ({TimeLeft}) => {
    const isEnded =
    TimeLeft.days === "00" &&
    TimeLeft.hours === "00" &&
    TimeLeft.mins === "00" &&
    TimeLeft.secs === "00";

  if (isEnded) {
    return (
      <div className="text-center mt-6">
        <p className="text-[rgb(242,129,35)] text-3xl font-bold uppercase">
          Deal Ended
        </p>
      </div>
    );
  }
    return ( 
        <div className="flex items-center space-x-4 md:space-x-6 ">
            <div className="flex flex-col  border-2 border-[rgb(242,129,35)] items-center  justify-center text-[rgb(242,129,35)]">
                <p className="md:text-[28px] font-bold p-2 md:p-4 font-bitcount">{TimeLeft.days} </p>
                <p className="text-md md:text-2xl capitalize">days</p>
            </div>
            <div className="flex flex-col  border-2 border-[rgb(242,129,35)] items-center  justify-center text-[rgb(242,129,35)]">
                <p className="md:text-[28px] font-bold p-2 md:p-4 font-bitcount ">{TimeLeft.hours}</p>
                <p className="text-md md:text-2xl capitalize">hours</p>
            </div>
            <div className="flex flex-col  border-2 border-[rgb(242,129,35)] items-center  justify-center text-[rgb(242,129,35)]">
                <p className="md:text-[28px] font-bold p-2 md:p-4 font-bitcount">{TimeLeft.mins}</p>
                <p className="text-md md:text-2xl capitalize">mins</p>
            </div>
            <div className="flex flex-col  border-2 border-[rgb(242,129,35)] items-center  justify-center text-[rgb(242,129,35)]">
                <p className="md:text-[28px] font-bold p-2 md:p-4 font-bitcount">{TimeLeft.secs}</p>
                <p className="text-md md:text-2xl capitalize">secs</p>
            </div>
        </div>
     );
}
 
export default DisplayTime;