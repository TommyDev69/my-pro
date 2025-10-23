import React,{useState} from 'react'
import Employer from './Employer';
// TEAM PICS THAT WILL SHOW IN ABOUT NAVBAR
import CEO from '../image/avaters/ceo.png';
import  Team_1 from'../image/team/team-1.jpg'
import  Team_2 from'../image/team/team-2.jpg'
import { faFacebookF, faInstagram, faTwitter, } from "@fortawesome/free-brands-svg-icons";

const AboutTeam = () => {
    const[employer, setEmployer] = useState([
         {id:1, image:CEO, Icon_1:faFacebookF, Icon_2: faInstagram, Icon_3:faTwitter},
        {id:2, image:Team_1, Icon_1:faFacebookF, Icon_2: faInstagram, Icon_3:faTwitter},
        {id:3, image:Team_2, Icon_1:faFacebookF, Icon_2: faInstagram, Icon_3:faTwitter},

    ])
    return ( 
        <div className='pb-[500px]///'>
            <Employer Employ = {employer} />
        </div>
     );
}
 
export default AboutTeam;