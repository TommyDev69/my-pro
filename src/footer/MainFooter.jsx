import React,{useState} from 'react'
import { faGreaterThan, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import FootBody from './FootBody';

export default function MainFooter() {
    const [footer, setFootEmail] =useState([
      {id:1, Topic:'about us', content:"Ut enim ad minim veniam perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae."},
      {id:2, Topic:"get in touch", address:" ibadan, oyo state, nigeria", email:'sunnevian4life@gmail.com', contact:"(+234)90-2627-4950"},
      {id:3, Topic: "page", iconic: faGreaterThan, icon_2:faPaperPlane},
      {id:4, Topic:"subscribe", content:"Subscribe to our mailing list to get the latest updates."}
        
    ])

  return (
    <div className='bg-[#051922cc]'>
      <FootBody About = {footer.filter((about) => about.id === 1)} 
        getInTouch = {footer.filter((touch)=>touch.id===2)}
        Page = {footer.filter((page)=>page.id===3)}
        Subscribe= {footer.filter((subscribe)=>subscribe.id===4)}   
         iconic={faGreaterThan}   
        icon_2={faPaperPlane}   
      />
    </div>
  )
}
