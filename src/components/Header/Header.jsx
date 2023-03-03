import React from "react";
import logo from "../Assets/Images/propvrwhite1.webp";
function Header() {
  return (
    <div className="bg-[#5D3FD3] p-6">
      <div className="flex items-center ">
        <div className="w-[28%]">
          <img src={logo} alt="logo" className="w-[160px] m-auto" />
        </div>
        <div className="w-[65%] flex items-center justify-evenly ">
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
      </div>
    </div>
  );
}

export default Header;
