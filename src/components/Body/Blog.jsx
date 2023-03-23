import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { AiOutlineRight, AiOutlineSearch } from "react-icons/ai";
import { BiFilterAlt } from "react-icons/bi";

import blur1 from "../Assets/Images/blur.webp";
import blur2 from "../Assets/Images/blur2.webp";
import blur3 from "../Assets/Images/blur3.webp";
import Messages from "./Messages";
function Blog() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div className="bg-black">
      <div className="md:pb-40 pb-28">
        <Header />
      </div>

      <div className="md:px-36 p-8  top-[-50px] relative   bg-[#47454526] ">
        <div className="md:flex items-center justify-between">
          <div className="md:w-[40%] flex items-center  ">
            <div className="font-semibold text-white text-[18px]">Home</div>
            <div className="font-semibold text-white text-[16px] ml-2 mr-2">
              <AiOutlineRight />
            </div>
            <div className="font-semibold text-[#391091] text-[18px]">
              All Post
            </div>
          </div>
          <div className="w-[50%] flex items-center justify-evenly ">
            <div className="flex bg-[#191919] hover:border-white border border-[#191919] p-[10px] rounded-md">
              <input
                className="bg-[#191919]  outline-none  text-white font-semibold text-[20px]"
                placeholder="Search Here.."
              />
              <button>
                <AiOutlineSearch size={25} />
              </button>
            </div>
            <div>
              <button className="flex items-center btn text-white font-semibold">
                <div>
                  <BiFilterAlt size={20} />
                </div>
                <div className="text-[20px] ml-2">Filter</div>
              </button>
            </div>
          </div>
        </div>
        <div className="md:mt-20">
          <div className="text-white text-center font-bold text-[30px]">
            All Post
          </div>
          <div className="text-white text-center font-semibold mt-4 text-[20px]">
            Unlocking the potential of Digital twins, Metaverse and 3d
            visualistations
          </div>
          <div className="flex mt-12 justify-evenly items-center">
            <div className="">
              <button className="btn bg-[#191919] hover:bg-[#4614B9] text-white font-semibold text-[17px]">
                All
              </button>
            </div>
            <div className="">
              <button className="btn bg-[#191919] hover:bg-[#4614B9] text-white font-semibold text-[17px]">
                Virtual Reality
              </button>
            </div>
            <div className="">
              <button className="btn bg-[#191919] hover:bg-[#4614B9] text-white font-semibold text-[17px]">
                Metaverse
              </button>
            </div>
            <div className="">
              <button className="btn bg-[#191919] hover:bg-[#4614B9] text-white font-semibold text-[17px]">
                Property Branding
              </button>
            </div>
          </div>
        </div>
        <div
          className="h-[60vh] blur-[100px]	"
          style={{
            backgroundImage: `url(${blur1})`,
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
      <div>
        <Messages />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Blog;
