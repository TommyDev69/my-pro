import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NewsCard = ({Data, icon_1, icon_2}) => {
    return ( 
        <div>

            <div className="md:flex flex-row space-y-12 md:space-y-0 md:space-x-16 md:px-24 container justify-center mx-auto items-center">
                {Data.map((blog)=>(
                    <div className="block w-11/12 md:w-7/12 mx-auto md:mx-0  hover:border-none hover:shadow-[rgb(242,129,35)] shadow-[black] shadow-xl border-2 rounded-3xl hovewr:" key={blog.id}>
                        <img src={blog.image} alt={blog.news} className="w-full " />
                        <div className="px-8  py-8">
                            <p className="md:text-[24px] text-worksans font-bold text-[#051922cc]">{blog.topic}</p>
                            <div className="flex my-6 w-full text-pretty justfify-around text-slate-500">
                                <p className="text-12"><FontAwesomeIcon icon={icon_1} />&nbsp; Admin</p>
                                <p className="text-12 pl-20"><FontAwesomeIcon icon={icon_2} />&nbsp; 10 October 2025</p>

                            </div>

                            <p className="text-[14px] text-[montserrat] text-slate-600 ">{blog.content}</p>
                            <button className="text-[18px] pt-6 hover:text-[rgb(242,129,35)]">{blog.but} <FontAwesomeIcon icon={blog.icon} className="text-[10px] mb-1" /></button>
                        </div>
                    </div>

                ))}
            </div>
            <div className="flex justify-center  items-center my-24">
                <button className="rounded-full border-0 capitalize text-white text-[16px] bg-[rgb(242,129,35)] px-6 py-4 hover:bg-[#051922cc]">more news</button>
            </div>
        </div>
    );
}
 
export default NewsCard