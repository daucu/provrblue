import React from "react";
import { BsDropbox } from "react-icons/bs";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { SlEnergy } from "react-icons/sl";
function Marketing() {
  return (
    <div className="  md:mt-44 mt-12 items-center md:w-[80%] w-[95%] m-auto">
      <div className="text-center md:text-[35px] md:mt-8 text-[22px] text-white">
        A communication and marketing tool for architecture
      </div>
      <div className="text-center md:w-[80%] m-auto md:text-[19px] mt-4 text-[16px] text-[#d7d7d7]">
        Architects, designers and archviz professionals use Shapespark to easily
        present designs and to create realistic visualizations for real-estate
        marketing projects.
      </div>
      <div className="">
        <div className="md:flex justify-evenly md:mt-16 mt-12  py-12 rounded-lg ">
          <div className="md:w-1/3 w-full p-2 text-center md:mt-0 mt-8 ">
            <div className="bg-[#E6F2FD] w-[100px] m-auto p-6 rounded-full">
              <HiOutlineDesktopComputer className="text-[#4614B9] text-[50px]" />
            </div>
            <div className="text-center  md:w-[85%] w-[95%] m-auto  md:text-[20px] text-[17px] text-white mt-4">
              Easily share on desktop, mobile and VR
            </div>
            <div className=" md:w-[85%] w-[95%] m-auto  md:text-[17px] text-[14px]  text-[#d7d7d7]   text-center mt-4">
              Simply send a link or embed the walkthrough in a website - clients
              can explore the design on any device. Create a 3D Meeting to have
              a video conversation within your walkthrough.
            </div>
          </div>
          <div className="md:w-1/3 w-full p-2 text-center md:mt-0 mt-8 ">
            <div className="bg-[#E6F2FD] w-[100px] m-auto p-6 rounded-full">
              <SlEnergy className="text-[#4614B9] text-[50px]" />
            </div>
            <div className="text-center   md:w-[85%] w-[95%] m-auto md:text-[20px] text-[17px] text-white mt-4">
              Stand out with interactive presentations
            </div>
            <div className=" md:w-[85%] w-[95%] m-auto  md:text-[17px] text-[14px]  text-[#d7d7d7]   text-center mt-4">
              Simply send a link or embed the walkthrough in a website - clients
              can explore the design on any device. Create a 3D Meeting to have
              a video conversation within your walkthrough.
            </div>
          </div>
          <div className="md:w-1/3 w-full p-2 text-center md:mt-0 mt-8 ">
            <div className="bg-[#E6F2FD] w-[100px] m-auto p-6 rounded-full">
              <BsDropbox className="text-[#4614B9] text-[50px]" />
            </div>
            <div className="text-center  md:w-[85%] w-[95%] m-auto  md:text-[20px] text-[17px] text-white mt-4">
              Use the 3D modelling tools you know
            </div>
            <div className=" md:w-[85%] w-[95%] m-auto  md:text-[17px] text-[14px]  text-[#d7d7d7]   text-center mt-4">
              Simply send a link or embed the walkthrough in a website - clients
              can explore the design on any device. Create a 3D Meeting to have
              a video conversation within your walkthrough.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketing;
