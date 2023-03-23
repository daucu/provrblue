import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { MdFacebook } from "react-icons/md";
import { Link } from "react-router-dom";

function BlogFooter() {
  return (
    <div className="bg-white md:px-16 mt-16">
      <div className="bg-white p-2 md:flex  items-center ">
        <div className="md:w-[50%] flex items-center justify-center">
          <div className="w-[25px] h-[25px] m-4  flex items-center justify-center rounded-full  bg-[black] text-white">
            <BsInstagram size={15} />
          </div>
          <div className="w-[25px] h-[25px]  m-4 flex items-center justify-center rounded-full  bg-[black] text-white">
            <MdFacebook size={20} />
          </div>
          <div className="w-[25px] h-[25px]  m-4 flex items-center justify-center rounded-full  bg-[black] text-white">
            <AiFillTwitterCircle size={19} />
          </div>
        </div>
        <div className="md:w-[50%]">
          <div className="flex items-center justify-evenly">
            <Link to="/">
              <div className="font-semibold m-4 text-black text-[20px]">
                Home
              </div>
            </Link>
            <Link to="/">
              <div className="font-semibold m-4 text-black text-[20px]">
                Home
              </div>
            </Link>
            <Link to="/">
              <div className="font-semibold m-4 text-black text-[20px]">
                Home
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-evenly">
            <Link to="/">
              <div className="font-semibold m-4 text-black text-[20px]">
                Home
              </div>
            </Link>
            <Link to="/">
              <div className="font-semibold m-4 text-black text-[20px]">
                Home
              </div>
            </Link>
            <Link to="/">
              <div className="font-semibold m-4 text-black text-[20px]">
                Home
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center p-4 text-[20px] text-[#4a4a4a]">
        Copyright © Neuractory - 2023
      </div>
    </div>
  );
}

export default BlogFooter;
