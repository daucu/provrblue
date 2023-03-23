import React from "react";
import "../Assets/css/BlogHeader.css";
import { BiHome } from "react-icons/bi";
import { GrMenu } from "react-icons/gr";

function BlogHeader() {
  return (
    <div className="fixed w-full top-0  bg-white border-b-2 p-4 shadow-md">
      <div className="maincont items-end justify-end">
        <div className="mainitem  flex items-end ">
          <div className="itemcont text-[20px] text-blue-500 ">Home</div>
          <div className="itemcont text-[20px] text-blue-500 ">
            Virtual Reality
          </div>
          <div className="itemcont text-[20px] text-blue-500 ">Metaverse</div>
          <div className="itemcont text-[20px] text-blue-500 ">
            Property Branding
          </div>
        </div>
      </div>
      <div className="menubtn">
        <div className="mr-6">
          <BiHome size={25} />
        </div>
        <div>
          <button>
            <GrMenu size={25} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogHeader;
