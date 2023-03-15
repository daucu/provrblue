import React, { useState } from "react";
import logo from "../Assets/Images/n_logo.png";
import "../Assets/css/header.css";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

function Header() {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="containerHead bg-[#000000] p-6 fixed z-10 w-full">
        <div className="mainhead flex items-center  justify-between">
          <div className="w-[28%]">
            <Link to="/">
              <img src={logo} alt="logo" className="w-[50px] m-auto" />
            </Link>
          </div>
          <div className="itemCont w-[65%] flex items-center justify-evenly ">
            <div className="text-white text-[18px]   font-semibold cursor-pointer hover:text-[#4614B9]   border-b-2  border-b-[#4614B9]  ">
              Products
            </div>
            <Link to="/metaverse">
              <div className="text-white text-[18px]   font-semibold cursor-pointer hover:text-[#4614B9]   ">
                Metaverse
              </div>
            </Link>
            <div className="text-white text-[18px]   font-semibold cursor-pointer hover:text-[#4614B9]   ">
              Spaces
            </div>
            <Link to="/stories">
              <div className="text-white text-[18px]   font-semibold cursor-pointer hover:text-[#4614B9]   ">
                Success Stories
              </div>
            </Link>
            <div className="text-white text-[18px]   font-semibold cursor-pointer hover:text-[#4614B9]   ">
              Blog
            </div>
            <Link to="/contactus">
              <div className="text-white text-[18px]   font-semibold cursor-pointer hover:text-[#4614B9]   ">
                Contact Us
              </div>
            </Link>
            <div className="text-white text-[18px]   font-semibold cursor-pointer hover:text-[#4614B9]   ">
              About Us
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
                <div className="font-bold">
                  <div className="w-[28%]">
                    <Link to="/">
                      <img src={logo} alt="logo" className="w-[100px] m-auto" />
                    </Link>
                  </div>
                </div>
                <button
                  className="menuBtn p-2 rounded-md bg-[#191D24] hover:bg-[#4614B9]"
                  onClick={(e) => setActive(!active)}
                >
                  <RxCross1 className="text-white text-[20px] cursor-pointer" />
                </button>
              </div>
              <div className="cursor-pointer ml-4 mt-2 ">Products</div>
              <Link to="/metaverse">
                <div className="cursor-pointer mt-2 ml-4 ">Metaverse</div>
              </Link>
              <div className="cursor-pointer mt-2 ml-4 ">Spaces</div>
              <Link to="/stories">
                <div className="cursor-pointer mt-2 ml-4 ">Success Stories</div>
              </Link>
              <div className="cursor-pointer mt-2 ml-4 ">Blog</div>
              <Link to="/contactus">
                <div className="cursor-pointer mt-2 ml-4 ">Contact Us</div>
              </Link>
              <div className="cursor-pointer mt-2 ml-4 ">About Us</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
