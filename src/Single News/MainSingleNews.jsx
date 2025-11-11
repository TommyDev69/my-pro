import { faUser, faBoxArchive, faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import Image_News from '../image/latest-news/news-bg-6.jpg'
import { useState } from 'react';
import SingleSpace from './SingleSpace';
import SingleWork from './SingleWork';


const MainSingleNews = () => {
    var[content, setContent] = useState([
        {id:1, image:Image_News ,
        icon_1: faUser, icon_2: faBoxArchive, icon_3:faGreaterThan,
        topic: 'Pomegranate can prevent heart disease',
        content_1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint soluta, similique quidem fuga vel voluptates amet doloremque corrupti. Perferendis totam voluptates eius error fuga cupiditate dolorum? Adipisci mollitia quod labore aut natus nobis. Rerum perferendis, nobis hic adipisci vel inventore facilis rem illo, tenetur ipsa voluptate dolorem, cupiditate temporibus laudantium quidem recusandae expedita dicta cum eum. Quae laborum repellat a ut, voluptatum ipsa eum. Culpa fugiat minus laborum quia nam!",
        content_2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, praesentium, dicta. Dolorum inventore molestias velit possimus, dolore labore aliquam aperiam architecto quo reprehenderit excepturi ipsum ipsam accusantium nobis ducimus laudantium.",
        content_3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum est aperiam voluptatum id cupiditate quae corporis ex. Molestias modi mollitia neque magni voluptatum, omnis repudiandae aliquam quae veniam error! Eligendi distinctio, ab eius iure atque ducimus id deleniti, vel alias sint similique perspiciatis saepe necessitatibus non eveniet, quo nisi soluta.",
        content_4: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt beatae nemo quaerat, doloribus obcaecati odio!"  
    }
    ])
    return(
        <div className=' w-full md:container md:mx-auto mt-16  flex flex-col md:flex md:flex-row'>
           <SingleSpace Answer = {content} />
           <SingleWork Ans = {content}/>
        </div>

     );
}
 
export default MainSingleNews;
