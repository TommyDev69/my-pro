import React, { useRef, useState } from "react";
import Video from "../image/Fruit Commercial Midterm Project.mp4";
import DataWork from "./DataWork";

const MainVideoInfo = () => {
  // ✅ must start with null — not Video
  const videoRef = useRef(null);

  const [showModal, setShowModal] = useState(false);

  const handleVideo = () => {
    setShowModal(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 200);
  };

  const closeModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setShowModal(false);
  };

    return ( 
       <div >
        
        <DataWork    HandleVideo={handleVideo}  closeModal = {closeModal}
        videoRef={videoRef}
        Video={Video}
        isPlaying={showModal}/>
       </div>
     );
}
 
export default MainVideoInfo;