import React, { useState } from "react";
import logo from "../Assets/Images/propvrwhite1.webp";
import "../Assets/css/header.css";
import { FiMenu } from "react-icons/fi";
import main from "../Assets/Images/main.png";
import { RxCross1 } from "react-icons/rx";

function Header() {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="containerHead bg-[#000000] p-8 fixed z-10 w-full">
        <div className="mainhead flex items-center  justify-between">
          <div className="w-[28%]">
            <img src={logo} alt="logo" className="w-[160px] m-auto" />
          </div>
          <div className="itemCont w-[65%] flex items-center justify-evenly ">
            <div className="text-white text-[18px]   font-semibold cursor-pointer hover:text-[#4614B9]   border-b-2  border-b-[#4614B9]  ">
              Products
            </div>
            <div className="text-white text-[18px]   font-semibold cursor-pointer hover:text-[#4614B9]   ">
              Experience Centres
            </div>
            <div className="text-white text-[18px]   font-semibold cursor-pointer hover:text-[#4614B9]   ">
              Metaverse
            </div>
            <div className="text-white text-[18px]   font-semibold cursor-pointer hover:text-[#4614B9]   ">
              Digital Twin
            </div>
            <div className="text-white text-[18px]   font-semibold cursor-pointer hover:text-[#4614B9]   ">
              Case studies
            </div>
            <div className="text-white text-[18px]   font-semibold cursor-pointer hover:text-[#4614B9]   ">
              Blog
            </div>
            <div className="text-white text-[18px]   font-semibold cursor-pointer hover:text-[#4614B9]   ">
              Contact Us
            </div>
          </div>
          <div>
            <button
              className="menuBtn p-2 rounded-md bg-[#191D24] hover:bg-[#4614B9]"
              onClick={(e) => setActive(!active)}
            >
              <FiMenu className="text-white text-[20px] cursor-pointer" />
            </button>
          </div>
          <div className={active ? "fixed w-full p-4 left-0 top-0" : "hidden"}>
            <div className="bg-white p-[17px] rounded-md shadow-md text-black">
              <div className="flex justify-between">
                <div className="font-bold">Logo</div>
                <button
                  className="menuBtn p-2 rounded-md bg-[#191D24] hover:bg-[#4614B9]"
                  onClick={(e) => setActive(!active)}
                >
                  <RxCross1 className="text-white text-[20px] cursor-pointer" />
                </button>
              </div>
              <div className="cursor-pointer ">Products</div>
              <div className="cursor-pointer mt-2 ">Experience Centers</div>
              <div className="cursor-pointer mt-2 ">Metaverse</div>
              <div className="cursor-pointer mt-2 ">Digital Twin</div>
              <div className="cursor-pointer mt-2 ">Case Studies</div>
              <div className="cursor-pointer mt-2 ">Blog</div>
              <div className="cursor-pointer mt-2 ">Contact Us</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
