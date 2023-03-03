import React from "react";
import { CiPlay1 } from "react-icons/ci";

import video from "../Assets/video/video.mp4";
function Video() {
  return (
    <div>
      {/* how to set backgorund video in the react js and add text  */}
      <div className="relative">
        <video autoPlay loop muted className="w-full h-[600px] object-cover">
          <source src={video} type="video/mp4" />
        </video>
        {/*  */}
        <div className="absolute mt-6 w-[80%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-6xl font-extralight  text-white">
            Interactive 3D Solutions for Real Estate
          </h1>
          <div className="mt-6 flex items-center ">
            <button className=" bg-[#4614B9]   text-white text-[17px] font-normal px-6 py-[10px] rounded-lg hover:bg-[#4614B9]  border-none mt-4">
              Book A Demo
            </button>
            <button className=" bg-[#191919] flex items-center ml-6  text-white text-[17px] font-normal px-4 py-[10px] rounded-lg hover:bg-[#191919]  border-none mt-4">
              <div>
                <CiPlay1 className="text-[#fff] text-[20px] font-semibold mr-2  " />
              </div>
              <div>Play Demo Video</div>
            </button>
          </div>
          {/* code to create transparent mouse with white border  */}
          <div className="absolute mt-52 w-[25px] h-[40px] border-2 border-white rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {/*  code to animate mouse scroller infinite time in the center of the mouse  */}
            <div className="animate-ping absolute mt-[-10px] w-[2px]  h-[10px] bg-white  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
