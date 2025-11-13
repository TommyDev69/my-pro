import { useState } from "react";
import ContactForm from "./ContactForm";

const MainContact = () => {
    const [contact, setContact] = useState('')
    return ( 
        <div className="bg-red-500">
        <ContactForm  title='you can write to us!'/>
        </div>

     );
}
 
export default MainContact;