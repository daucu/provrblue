import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import walk3 from "../Assets/video/walk3.mp4";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { TfiReload } from "react-icons/tfi";
import { MdPhotoSizeSelectLarge } from "react-icons/md";

function SuccessStories() {
  return (
    <div>
      <Header />
      <div>
        {/* add video  */}
        <div className="flex justify-center items-center">
          <video
            src={walk3}
            autoPlay
            loop
            muted
            className="w-[100%] h-[100vh] object-cover"
          />
          {/*  add button on the video  */}
          <div className="absolute flex items-center bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <button className="bg-[#a5a4a3] border-2 border-black p-2 m-2 rounded-full">
              <AiOutlinePlus className=" text-black "  />
            </button>
            <button className="bg-[#a5a4a3] border-2 border-black p-2 m-2 rounded-full">
              <AiOutlineMinus className=" text-black "  />
            </button>
            <button className="bg-[#a5a4a3] border-2 border-black p-2 m-2 rounded-full">
              <TfiReload className=" text-black "  />
            </button>
            <button className="bg-[#a5a4a3] border-2 border-black p-2 m-2 rounded-full">
              <MdPhotoSizeSelectLarge className=" text-black "  />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SuccessStories;
