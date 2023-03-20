import React from "react";
import { CiPlay1 } from "react-icons/ci";

import video from "../Assets/video/walk5.mp4";
function Video() {
  return (
    <div>
      {/* how to set backgorund video in the react js and add text  */}
      <div className="relative   ">
        <video autoPlay loop muted className="w-full h-[900px] object-cover">
          <source src={video} type="video/mp4" />
        </video>
        {/*  */}
        <div className="absolute mt-12 w-[80%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="md:text-7xl text-6xl  font-extralight  text-white">
            Constructing innovation with Immersive 3D Experiences
          </h1>
          <div className="mt-6 md:flex items-center ">
            <button className="bg-[#4614B9]   text-white text-[20px] font-semibold px-[53px] py-[15px] rounded-lg hover:bg-[#4614B9]  border-none mt-4">
              Book A Demo
            </button>
            <button className=" bg-[#191919] flex items-center md:ml-6  text-white text-[20px] font-semibold px-6 py-[15px] rounded-lg hover:bg-[#191919]  border-none mt-4">
              <div>
                <CiPlay1 className="text-[#fff] text-[20px] font-semibold mr-2  " />
              </div>
              <div>Play Demo Video</div>
            </button>
          </div>
          {/* code to create transparent mouse with white border  */}
          <div className="absolute md:mt-56 mt-80 w-[35px] h-[50px] border-2 border-white rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {/*  code to animate mouse scroller infinite time in the center of the mouse  */}
            <div className="animate-ping absolute mt-[-10px] w-[2px]  h-[10px] bg-white  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
