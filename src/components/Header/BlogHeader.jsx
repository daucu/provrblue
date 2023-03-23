import React, { useState } from "react";
import "../Assets/css/BlogHeader.css";
import { BiHome } from "react-icons/bi";
import { GrMenu } from "react-icons/gr";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

function BlogHeader() {
  const [active, setActive] = useState(false);
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
        <Link to="/">
          <div className="mr-6">
            <BiHome size={25} />
          </div>
        </Link>
        <div>
          <button onClick={() => setActive(true)}>
            <GrMenu size={25} />
          </button>
        </div>
        {active == true ? (
          <div className="fixed w-[200px] h-screen top-0 right-[-200px] p-4 drop-shadow-2xl  bg-white z-10 animate-slide_left">
            <div className="flex text-black  justify-end">
              <button onClick={() => setActive(false)}>
                <RxCross1 size={25} />
              </button>
            </div>
            <div className="h-[5vh]"></div>
            <div className="flex mt-2 flex-col justify-center ">
              <Link to="/">
                <div className="text-[20px]  text-blue-500 ">Home</div>
              </Link>
            </div>
            <div className="flex mt-6 flex-col justify-center ">
              <Link to="/">
                <div className="text-[20px]  text-blue-500 ">
                  Virtual Reality
                </div>
              </Link>
            </div>
            <div className="flex mt-6 flex-col justify-center ">
              <Link to="/">
                <div className="text-[20px]  text-blue-500 ">Metaverse</div>
              </Link>
            </div>
            <div className="flex mt-6 flex-col justify-center ">
              <Link to="/">
                <div className="text-[20px]  text-blue-500 ">
                  Property Branding
                </div>
              </Link>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default BlogHeader;
