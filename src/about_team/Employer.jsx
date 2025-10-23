import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Employer = ({Employ}) => {
    return ( 
      <div className="container fldex flex-col mx-auto w-11/12 md:w-10/12">
      <div className=" flex justify-center text-worksans capitalize font-bold text-[35px] ">
      <p className=" text-[#051922]">our</p>&nbsp;
      <p className="text-[#F28123]"><u className="p">te</u>am</p>
      </div>
       <div className="flex justify-center py-12">
        <p className=" w-full md:w-[50%] text-center text-[16px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
       </div>
       <div className="grid md:grid-flow-col mx-auto gap-8 ">
        {Employ.map(people =>(
          <div className="bg-slate-90d0" key={people.id}>
            <div className="bg-center justify-center gap-4 contdai ner flex border-[#ccc] border-2 bg-cover rounded-xl  w-10/f12 text-center" style={{backgroundImage:`url(${people.image})`}} >
               <FontAwesomeIcon icon={people.Icon_1} className="text-2xl text-white bg-[#F28123] mt-[445px] rounded-full px-4 py-2 text-[24px] " />
               <FontAwesomeIcon icon={people.Icon_2} className="text-2xl text-white bg-[#F28123] mt-[445px] rounded-full  px-4 py-2 text-[24px]" />
               <FontAwesomeIcon icon={people.Icon_3} className="text-2xl text-white bg-[#F28123] mt-[445px] rounded-full  px-4 py-2 text-[24px]" />


            </div>
          </div>
          
        ))}
        </div> 
      </div>
    );
}
 
export default Employer;