import React, {useState,useEffect} from "react";
import image from '../image/a.jpg';
import PromoInfo from './PromoInfo';
const MainPromo = () => { 
     // 🕒 Set the promo end date here
     const promoEndDate = new Date("2025-12-31T23:59:59").getTime();
     const [TimeLeft, setTimeLeft] = useState({
        days: "00",
        hours: "00",
        mins: "00",
        secs: "00",
     })

     useEffect (() =>{
        const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = promoEndDate - now

        if(distance <= 0) {
            clearInterval(timer)
            setTimeLeft({
                days: "00",
                hours: "00",
                mins: "00",
                secs: "00",
                
            });
        } else{
            const days =  Math.floor(distance /( 1000 * 60 * 60 * 24))
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((distance % (1000 * 60)) / 1000);
        
        setTimeLeft({
          days: days.toString().padStart(2, "0"),
          hours: hours.toString().padStart(2, "0"),
          mins: mins.toString().padStart(2, "0"),
          secs: secs.toString().padStart(2, "0"),
        });
    } 
        }, 1000);
        return () => clearInterval(timer);
     }, [promoEndDate])

    const Ceo = 'linux'
    const content = 'Quisquam minus maiores repudiandae nobis, minima saepe id, fugit ullam similique! Beatae, minima quisquam molestias facere ea. Perspiciatis unde omnis iste natus error sit voluptatem accusant'
    return (  
        <div className="flex relative justify-around items-center promo w-full ">
            <div className="flex relatiwve justify-center md:items-center min-w-60 md:min-w-[50%]">
                <div className="  absolute top-[70px] md:top-[40px] left-[4px] md:left-[100px] flex flex-col  rounded-full p-2 bg-[rgba(209,223,18,0.95)]">

                  <div className=" rounded-full  bg-[rgb(242,129,35)] p-4 md:p-6 text-white font-worksans font-bold">
                    <p className="text-md md:text-[20px] text-center">30%</p>
                  <p className="text-[8px] md:text-[12px]">off per kg</p>

                  </div>
                </div>

                <img src={image} alt="fruit" className=' md:w-[70%]' />
            </div>
         <PromoInfo title={Ceo} content={content}  TimeLeft = {TimeLeft}  />
        </div>
    );
}
 
export default MainPromo;