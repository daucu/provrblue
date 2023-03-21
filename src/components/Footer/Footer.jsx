import React from "react";
// import logo from "../Assets/Images/propvrwhite1.webp";
import { BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import logo from "../Assets/Images/n_logo.png";
import dmlogo from "../Assets/Images/dm1.png";

function Footer() {
  return (
    <div className="md:mt-24 mt-12">
      <div className="md:flex md:w-[80%] w-[88%] m-auto  ">
        <div className="md:w-[30%] w-full">
          <div className="w-[150px] flex items-center">
            <img src={logo} className="w-1/3" />
            <div className="font-semibold text-white ml-2 text-[20px]">
              Neuractory
            </div>
          </div>
          <div className="flex mt-4 items-center ">
            <div className="m-2">
              <button className="bg-[#191D24] p-2 rounded-md">
                <BsInstagram size={20} className="text-white" />
              </button>
            </div>
            <div className="m-2">
              <button className="bg-[#191D24] p-2 rounded-md">
                <BsLinkedin size={20} className="text-white" />
              </button>
            </div>
            <div className="m-2">
              <button className="bg-[#191D24] p-2 rounded-md">
                <BsTwitter size={20} className="text-white" />
              </button>
            </div>
            <div className="m-2">
              <button className="bg-[#191D24] p-2 rounded-md">
                <BsYoutube size={20} className="text-white" />
              </button>
            </div>
          </div>
        </div>
        <div className="md:flex  md:mt-0 mt-8 md:p-0 p-2 justify-around md:w-[70%] w-full">
          <div>
            <h1 className="text-[#F2F2F2] text-xl font-bold">Neuractory</h1>
            <div className="mt-4">
              <p className="text-[#F2F2F2] text-sm mt-4">Products</p>
              <p className="text-[#F2F2F2] text-sm mt-4">Metaverse</p>
              <p className="text-[#F2F2F2] text-sm mt-4">Spaces</p>
              <p className="text-[#F2F2F2] text-sm mt-4">Success Stories</p>
            </div>
          </div>
          <div>
            <h1 className="text-[#F2F2F2] md:mt-0 mt-8 text-xl font-bold">
              Company
            </h1>
            <div className="mt-4">
              <p className="text-[#F2F2F2] text-sm mt-4">Blog</p>
              <p className="text-[#F2F2F2] text-sm mt-4">Contact Us</p>
              <p className="text-[#F2F2F2] text-sm mt-4">About Us</p>
              <p className="text-[#F2F2F2] text-sm mt-4">Register</p>
            </div>
          </div>
          <div>
            <h1 className="text-[#F2F2F2] md:mt-0 mt-8 text-xl font-bold">
              Partnering
            </h1>
            <div className="mt-4">
              <img src={dmlogo} className="w-[130px]" />
              <div className="mt-2 text-white">D.M Group</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8   w-[80%] m-auto border-b-2  bg-white"></div>
      <div className="mt-8 w-[80%] m-auto font-bold text-white text-center pb-8">
        Copyright © 2016 Neuractory.
      </div>
    </div>
  );
}

export default Footer;
