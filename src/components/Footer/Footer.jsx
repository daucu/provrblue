import React from "react";
import logo from "../Assets/Images/propvrwhite1.webp";
import { BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";

function Footer() {
  return (
    <div className="mt-24">
      <div className="flex w-[80%] m-auto  ">
        <div className="w-[30%]">
          <div className="w-[150px]">
            <img src={logo} />
          </div>
          <div className="flex mt-4 items-center ">
            <div className="m-2">
              <button className="bg-[#191D24] p-2 rounded-md">
                <BsInstagram size={20} />
              </button>
            </div>
            <div className="m-2">
              <button className="bg-[#191D24] p-2 rounded-md">
                <BsLinkedin size={20} />
              </button>
            </div>
            <div className="m-2">
              <button className="bg-[#191D24] p-2 rounded-md">
                <BsTwitter size={20} />
              </button>
            </div>
            <div className="m-2">
              <button className="bg-[#191D24] p-2 rounded-md">
                <BsYoutube size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-around w-[70%]">
          <div>
            <h1 className="text-[#F2F2F2] text-xl font-bold">Company</h1>
            <div className="mt-4">
              <p className="text-[#F2F2F2] text-sm mt-4">About Us</p>
              <p className="text-[#F2F2F2] text-sm mt-4">Careers</p>
              <p className="text-[#F2F2F2] text-sm mt-4">Contact Us</p>
              <p className="text-[#F2F2F2] text-sm mt-4">Blog</p>
            </div>
          </div>
          <div>
            <h1 className="text-[#F2F2F2] text-xl font-bold">Company</h1>
            <div className="mt-4">
              <p className="text-[#F2F2F2] text-sm mt-4">About Us</p>
              <p className="text-[#F2F2F2] text-sm mt-4">Careers</p>
              <p className="text-[#F2F2F2] text-sm mt-4">Contact Us</p>
              <p className="text-[#F2F2F2] text-sm mt-4">Blog</p>
            </div>
          </div>
          <div>
            <h1 className="text-[#F2F2F2] text-xl font-bold">Company</h1>
            <div className="mt-4">
              <p className="text-[#F2F2F2] text-sm mt-4">About Us</p>
              <p className="text-[#F2F2F2] text-sm mt-4">Careers</p>
              <p className="text-[#F2F2F2] text-sm mt-4">Contact Us</p>
              <p className="text-[#F2F2F2] text-sm mt-4">Blog</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8   w-[80%] m-auto border-b-2  bg-white"></div>
      <div className="mt-8 w-[80%] m-auto font-bold text-center pb-8">
      Copyright © 2016 Propvr.
      </div>
    </div>
  );
}

export default Footer;
