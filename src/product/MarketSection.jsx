import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const MarketSection = ({details}) => {
    return ( 
          
            <div className="grid w-full md:container grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center px-6  ">
                {details.map((items) =>(
                    <div className="flex flex-col justify-center items-center  border-2 rounded-2xl py-4  md:w-11/12 hover:shadow-2xl shadow-inner shadow-[rgb(242,129,35)]" key={items.id}>
                        <img src={items.Image} alt={items.Name} className="w-1c/2" />
                        <p className="font-worksans text-2xl font-bold capitalize">{items.Name}</p>
                        <p className="text-lg text-gray-500">{items.weight}</p>
                        <p className="font-worksans text-4xl font-bold">{items.amount}</p>
                        <button className="flex justify-center text-lg text-white items-center border-2 rounded-2xl p-4 hover:bg-[#051922cc] bg-[rgb(242,129,35)] border-white"><FontAwesomeIcon icon={items.icon} className="px-2" />{items.iconName}</button>

                    </div>
                ))}
            </div>
      
     );
}
 
export default MarketSection;