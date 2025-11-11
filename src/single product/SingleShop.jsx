import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


const SingleShop = ({Media, Photo, shop}) => {
    return ( 
        

        <div className="flex flex-col md:flex md:flex-row gap-16 md:justify-center py-40">
            <div className="shadow-2xl shadow-[#ccc] border-2 md:w-[30%]">
               <img src={Photo} alt={Photo} className="" />
            </div>
           
            <div className="flex flex-col md:w-[50%] px-6">
                <div></div>
                <div className="text-[#051922] font-semibold">
                    <p className=" text-[28px]">Green apples have polyphenols </p>
                </div>
                <div className="text-[#051922] my-4 ">
                    <p className="text-[20px]">Per Kg</p>
                </div>

                <div className="text-[#051922] my-4 font-montserrat">
                    <p className="text-[35px] font-[700]">#1000</p>
                </div>

                <div className="text-[#051922] my-4">
                    <p className="text-[19px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sint 
                        dignissimos, rem commodi cum voluptatem quae reprehenderit 
                        repudiandae ea tempora incidunt ipsa, quisquam animi perferendis eos eum modi! Tempora, earum.</p>
                </div>

                <div className="text-[#051922]">
                    <input type="number" className="w-40 h-20 border border-[#ccc] text-[24px] rounded-lg text-center" />
                </div>

                <div className='my-4 flex flex-row ' >
                    <button className='capital bordfer px-6 py-4 rounded-full bg-[#F28123] text-[10px] md:text-[20px]  capitalize text-white hover:bg-[#ccc] hover:font-bold hover:text-[#F28123]'>
                        <FontAwesomeIcon icon={faCartShopping} className="pr-2"/>add to cart
                    </button>
                </div>
                <div className="flex capitalize text-[19px] pb-20 ">
                    <p className="font-semibold pr-3 text-[#051922]">categories:</p>
                    <p className="font-light">fruit, organic</p>
                </div>
                <p className="text-[24px] font-bold capitalize text-[#051922]">share:</p>
                <div className="flex gap-2 text-[18px]">
                    {Media.map( (social, index) =>(
                        <div className="" key={index}>
                        <FontAwesomeIcon icon={social} />
                        </div>
                    ))}
                </div>

            </div>
       </div>

             
            

       
     );
}
 
export default SingleShop;