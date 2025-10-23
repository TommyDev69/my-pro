import new1 from '../image/latest-news/news-bg-1.jpg';
import new2 from '../image/latest-news/news-bg-2.jpg';
import new3 from '../image/latest-news/news-bg-3.jpg';
// TEAM PICS THAT WILL SHOW IN ABOUT NAVBAR
import CEO from '../image/avaters/ceo.png';
import  Team_1 from'../image/team/team-1.jpg'
import  Team_2 from'../image/team/team-2.jpg'


import { faGreaterThan, faUser, faCalendar} from "@fortawesome/free-solid-svg-icons";

import { useState } from 'react';
import NewsCard from './NewsCard';

const MainNews = () => {
    const [news, setNews] =useState([
        {id:1, image:new1, topic:'You will vainly look for fruit on it in autumn.', but:"read more", icon: faGreaterThan,  content:'Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.'},
        {id:1, image:new2, topic: "A man's worth has its season, like tomato.", but:"read more", icon: faGreaterThan,  content:"Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros."},
        {id:1, image:new3, topic: "Good thoughts, bear good good fresh fruit.", but:"read more", icon: faGreaterThan,  content:"Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros."},
       

    ])
    return (  
        <div>
          <NewsCard Data={news.filter((list)=> list.id === 1)} icon_1={faUser} icon_2={faCalendar} />
        </div>
    );
}
 
export default MainNews;