import React, { useEffect, useState } from "react";
import logo from "../Assets/Images/n_logo.png";
import "../Assets/css/header.css";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

function Header() {
  const [active, setActive] = useState(false);
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
    <>
      <div className="containerHead bg-[#000000] p-6 fixed z-10 w-full">
        <div className="mainhead flex items-center  justify-between">
          <div className="w-[28%] flex items-center md:justify-center">
            <NavLink
              to="/"
              // code to add active class to the navlink
            >
              <img src={logo} alt="logo" className="max-w-[50px] m-auto" />
            </NavLink>
            <NavLink to="/">
              <div className="ml-2 text-[20px] font-semibold text-white">
                Neuractory
              </div>
            </NavLink>
          </div>
          <div className="itemCont w-[65%] flex items-center justify-evenly ">
            {/* code to NavLink with active class  */}
            <NavLink
              to="/"
              activeClassName="active"
              className={({ isActive }) =>
                isActive ? "border-b-[3px] border-[#4614B9]" : ""
              }
            >
              <div className=" border-b-[3px] border-black text-white   text-[18px]   font-semibold cursor-pointer hover:text-[#4614B9]      ">
                Products
              </div>
            </NavLink>
            <NavLink
              to="/metaverse"
              className={({ isActive }) =>
                isActive ? "border-b-[3px] border-[#4614B9]" : ""
              }
            >
              <div className="  border-b-[3px] border-black text-white text-[18px]   font-semibold cursor-pointer hover:text-[#4614B9]   ">
                Metaverse
              </div>
            </NavLink>
            <NavLink
              to="/spaces"
              className={({ isActive }) =>
                isActive ? "border-b-[3px] border-[#4614B9]" : ""
              }
            >
              <div className="text-white text-[18px]  border-b-[3px] border-black   font-semibold cursor-pointer hover:text-[#4614B9]   ">
                Spaces
              </div>
            </NavLink>
            <NavLink
              to="/stories"
              className={({ isActive }) =>
                isActive ? "border-b-[3px] border-[#4614B9]" : ""
              }
            >
              <div className="text-white text-[18px]  border-b-[3px] border-black   font-semibold cursor-pointer hover:text-[#4614B9]   ">
                Success Stories
              </div>
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "border-b-[3px] border-[#4614B9]" : ""
              }
            >
              <div className="text-white text-[18px]  border-b-[3px] border-black   font-semibold cursor-pointer hover:text-[#4614B9]   ">
                Blog
              </div>
            </NavLink>
            <NavLink
              to="/contactus"
              className={({ isActive }) =>
                isActive ? "border-b-[3px] border-[#4614B9]" : ""
              }
            >
              <div className="text-white text-[18px]  border-b-[3px] border-black   font-semibold cursor-pointer hover:text-[#4614B9]   ">
                Contact Us
              </div>
            </NavLink>
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                isActive ? "border-b-[3px] border-[#4614B9]" : ""
              }
            >
              <div className="text-white text-[18px]  border-b-[3px] border-black   font-semibold cursor-pointer hover:text-[#4614B9]   ">
                About Us
              </div>
            </NavLink>
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
                  <div className="w-[30%]">
                    <NavLink to="/">
                      <img src={logo} alt="logo" className="w-[130px] m-auto" />
                    </NavLink>
                  </div>
                </div>
                <div>
                <button
                  className="menuBtn p-2 rounded-md bg-[#191D24] hover:bg-[#4614B9]"
                  onClick={(e) => setActive(!active)}
                >
                  <RxCross1 className="text-white text-[20px] cursor-pointer" />
                </button>
                </div>
             
              </div>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "border-b-[3px] border-[#4614B9]" : ""
                }
              >
                <div className="cursor-pointer ml-4 mt-2 ">Products</div>
              </NavLink>
              <NavLink to="/metaverse">
                <div className="cursor-pointer mt-2 ml-4 ">Metaverse</div>
              </NavLink>

              <NavLink to="/spaces">
                <div className="cursor-pointer mt-2 ml-4 ">Spaces</div>
              </NavLink>
              <NavLink to="/stories">
                <div className="cursor-pointer mt-2 ml-4 ">Success Stories</div>
              </NavLink>
              <NavLink to="/blog">
                <div className="cursor-pointer mt-2 ml-4 ">Blog</div>
              </NavLink>
              <NavLink to="/contactus">
                <div className="cursor-pointer mt-2 ml-4 ">Contact Us</div>
              </NavLink>
              <NavLink
                to="/aboutus"
                className={({ isActive }) =>
                  isActive ? "border-b-[3px] border-[#4614B9]" : ""
                }
              >
                <div className="cursor-pointer mt-2 ml-4 ">About Us</div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
