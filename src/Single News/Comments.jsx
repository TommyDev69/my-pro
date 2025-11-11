import React, { useState } from 'react'
import image1 from '../image/team/team-1.jpg';
import image2 from '../image/team/team-2.jpg';
import image3 from '../image/team/team-3.jpg';
import CommentBody from './CommentBody';


export default function Comments() {
    const[messages, setMessage] = useState([
        {id:1, Name:'jenny joe', Date:"April 26, 2025", Image:image1, Con:'reply',
         comment:'Nunc risus ex, tempus quis purus ac, tempor consequat ex. Vivamus sem magna, maximus at est id, maximus aliquet nunc. Suspendisse lacinia velit a eros porttitor, in interdum ante faucibus Suspendisse lacinia velit a eros porttitor, in interdum ante faucibus.'},
         {id:2, Name:'simon soe', Date:"April 27, 2025", Image:image2, Con:'reply',
         comment:'Nunc risus ex, tempus quis purus ac, tempor consequat ex. Vivamus sem magna, maximus at est id, maximus aliquet nunc. Suspendisse lacinia velit a eros porttitor, in interdum ante faucibus Suspendisse lacinia velit a eros porttitor, in interdum ante faucibus.',  textSize: 'text-[4px] md:text-[18px]',  indent: 'pl-14'},
         {id:3, Name:'addy aoe', Date:"May 12, 2025", Image:image3, Con:'reply',
         comment:'Nunc risus ex, tempus quis purus ac, tempor consequat ex. Vivamus sem magna, maximus at est id, maximus aliquet nunc. Suspendisse lacinia velit a eros porttitor, in interdum ante faucibus Suspendisse lacinia velit a eros porttitor, in interdum ante faucibus.'}
    ])
  return (
    <div className='mt-9'>
        <CommentBody Msg = {messages}  />
    </div>
  )
}
