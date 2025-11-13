import { useState } from "react";

import { faFacebook,faTwitter,faLinkedin, faTiktok, faDiscord} from "@fortawesome/free-brands-svg-icons";
import LastFooter from "./LastFooter";
const MainLastfooter = () => {
    var Owner = "linux development";
    const [socialMedia, setSocialMedia] = useState([
        {id:1, icon:faFacebook },
        {id:2, icon:faTwitter} ,
        {id:3, icon:faLinkedin },
        {id:4, icon:faTiktok },
        {id:5, icon:faDiscord }
    ])
    return ( 
        <div className="bg-[#051922] border-t-2  border-t-[#8f8f8f] landscape:w-full w-full">
            <LastFooter  Media={socialMedia} Ceo={Owner} title="all rights reserved" />
        </div>
     );
}
 
export default MainLastfooter;