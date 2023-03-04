import React from "react";
import dotted from "../Assets/Images/dotted.webp";
import ab from "../Assets/Images/ab.webp";
import ats from "../Assets/Images/ats.webp";
import bhutani from "../Assets/Images/bhutani.webp";
import brigade from "../Assets/Images/brigade.webp";
import casagrande from "../Assets/Images/casagrande.webp";
import dra from "../Assets/Images/dra.webp";
import godrej from "../Assets/Images/godrej.webp";
import kohinoor from "../Assets/Images/kohinoor.webp";
import mahindra from "../Assets/Images/mahindra.webp";
import propvrwhite1 from "../Assets/Images/propvrwhite1.webp";
import raunakgroup from "../Assets/Images/raunakgroup.webp";
import rustomjee from "../Assets/Images/rustomjee.webp";
import sattva from "../Assets/Images/sattva.webp";

function Builders() {
  return (
    // set dotted into the background of the div on the left side
    <div className="bg-[#000000]">
      <div className="relative">
        <div className="absolute  w-[100%] h-[100%] top-0 left-0">
          <img
            src={dotted}
            alt=""
            className="w-[300px] h-[300px] object-cover "
          />
        </div>
        <div className="  md:p-8 p-4 items-center">
          <div className="md:w-[80%] w-[95%] m-auto md:pb-16 pb-8">
            <h1 className="text-[#fff] text-[35px] mt-6 text-center font-bold">
              Trusted by over 120+ builders
            </h1>
          </div>
          {/* create a flex wrap div  */}
          <div className="relative   flex md:w-[80%] w-[100%] m-auto md:justify-center  justify-between  flex-wrap justify-self-start mt-2">
            {/* create a div for each logo  */}
            <div className="w-[150px] h-[80px]  m-2">
              <img src={ab} alt="" className="w-[100%] h-[100%] object-cover" />
            </div>
            <div className="w-[150px] h-[80px]  m-2">
              <img
                src={ats}
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="w-[150px] h-[80px]  m-2">
              <img
                src={godrej}
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="w-[150px] h-[80px]  m-2">
              <img
                src={dra}
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="w-[150px] h-[80px]  m-2">
              <img
                src={casagrande}
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="w-[150px] h-[80px]  m-2">
              <img
                src={brigade}
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="w-[150px] h-[80px]  m-2">
              <img
                src={sattva}
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="w-[150px] h-[80px]  m-2">
              <img
                src={mahindra}
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="w-[150px] h-[80px]  m-2">
              <img
                src={sattva}
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="w-[150px] h-[80px]  m-2">
              <img
                src={rustomjee}
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="w-[150px] h-[80px]  m-2">
              <img
                src={raunakgroup}
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="w-[150px] h-[80px]  m-2">
              <img
                src={rustomjee}
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="w-[150px] h-[80px]  m-2">
              <img
                src={raunakgroup}
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="w-[150px] h-[80px]  m-2">
              <img
                src={rustomjee}
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="w-[150px] h-[80px]  m-2">
              <img
                src={raunakgroup}
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="w-[150px] h-[80px]  m-2">
              <img
                src={rustomjee}
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Builders;
