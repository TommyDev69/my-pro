import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

export default function DataWork({ HandleVideo, closeModal, isPlaying, videoRef, Video }) {
  return (
    <div className="grid md:grid-cols-2 justify-items-center gap-8">
      
      <div className="relative fruit w-11/12 md:w-8/12 flex justify-center items-center rounded-3xl bg-slate-400  overflow-hidden">
       
        <FontAwesomeIcon
          icon={faPlayCircle}
          onClick={HandleVideo}
          className="text-[rgb(242,129,35)] text-7xl cursor-pointer hover:scale-110 transition-transform duration-300 opacity-90 z-30"
        />
      </div>

    
      <div className=" flex flex-col justify-center px-8 py-10 rounded-3xl">
        <p className="leading-snug text-[18px]">Since year 2020</p>
        <div className="flex capitalize font-bold text-[28px] py-2">
          <p className="pr-3">i am</p>
          <p className="text-[rgb(242,129,35)]">sunnevian </p>
        </div>

        <article className=" text-black rounded-xl p-4 text-[14px] leading-relaxed mt-4">
          <p className="pb-2">
            Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa porttitor vestibulum ac vel nisi.
            Vestibulum placerat eget dolor sit amet posuere. In ut dolor aliquet, aliquet sapien sed, interdum velit.
            Nam eu molestie lorem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente facilis illo repellat veritatis minus, et labore minima mollitia qui ducimus.
          </p>
        </article>
      </div>

      {/* 🎬 Modal Overlay */}
      {isPlaying && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 transition-opacity duration-500">
          <div className="relative w-11/12 md:w-7/12 bg-black rounded-3xl overflow-hidden shadow-lg">
            {/* Video */}
            <video
              ref={videoRef}
              src={Video}
              className="w-full h-auto"
            //   controls
            //   autoPlay
            />
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-white bg-[#000000] hover:bg-orange-600 px-3 py-1 rounded-full font-bold text-lg transition-all"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
