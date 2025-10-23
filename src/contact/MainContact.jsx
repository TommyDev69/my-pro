import { useState } from "react";
import ContactForm from "./ContactForm";

const MainContact = () => {
    const [contact, setContact] = useState('')
    return ( 
        <div>
        <ContactForm  title='you can write to us!'/>
        </div>

     );
}
 
export default MainContact;