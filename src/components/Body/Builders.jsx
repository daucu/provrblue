import React from "react";
import dotted from "../Assets/Images/dotted.webp";
import dmlogo from "../Assets/Images/dm1.png";
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
            <h1 className="relative text-[#fff] text-[35px] mt-6 text-center font-bold">
              Our Trusted Builders
            </h1>
          </div>
          <div className="relative md:w-[80%] w-[100%] m-auto md:justify-center  justify-between  mt-2">
            <div className="bg-[#251E42] p-6 md:w-[440px] w-[350px] m-auto rounded-[30px]">
              <div>
                <img src={dmlogo} alt="" className="w-[100px]  rounded-md" />
              </div>
              <div className="md-2 text-[20px] text-[#d7d7d7] md:mt-6 mt-4 ">
                " Manish Patadia helped us to launch webAr shopping experiences
                on our Shopify e-commerce "
              </div>
              <div className="flex md:mt-6 mt-4 items-center ">
                <div className="w-[60px] h-[60px]  rounded-full  bg-black   ">
                  <img src="https://www.citypng.com/public/uploads/small/11640168385jtmh7kpmvna5ddyynoxsjy5leb1nmpvqooaavkrjmt9zs7vtvuqi4lcwofkzsaejalxn7ggpim4hkg0wbwtzsrp1ldijzbdbsj5z.png"></img>
                </div>
                <div className="w-[75%] m-auto">
                  <div className="font-bold text-white text-[19px]">
                    Manish Patadia
                  </div>
                  <div className="font-normal text-white text-[17px]">
                    (Founder)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Builders;
