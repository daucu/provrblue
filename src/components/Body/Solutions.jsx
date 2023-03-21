import React from "react";
import dot2 from "../Assets/Images/dot2.webp";
import Users from "../Assets/Images/Users.webp";
import VRIcon from "../Assets/Images/VRIcon.webp";
import userIcon from "../Assets/Images/userIcon.webp";
import bag from "../Assets/Images/bag.webp";
import vr6 from "../Assets/Images/vr6.jpg";
// import VRIcon from "../Assets/Images/VRIcon.webp";
function Solutions() {
  return (
    <div>
      <div
        // className="flex items-center"
        className="flex items-center md:h-[90vh] h-auto bg-contain  bg-no-repeat bg-right"
        style={{ backgroundImage: `url(${dot2})` }}
      >
        <div className="md:flex mt-36 items-center md:w-[80%] w-[95%] m-auto">
          <div className="md:w-1/2 w-[95%] m-auto md:pb-0 pb-12  ">
            <div className="w-[90%] m-auto">
              <div className="text-[30px] font-semibold text-white">
                Why choose us?
              </div>

              <div className="mt-2 text-white text-[18px]">
                Our products can enable your sales staff to increase customer
                engagement by up to 500% and improves the likelihood of selling
                construction space directly.
              </div>
              <div>
                <div className="md:mt-8 mt-6">
                  <img src={vr6} alt=""  className="rounded-lg"/>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-[95%] m-auto ">
            <div className="md:flex justify-around ">
              <div className="p-4 rounded-sm md:w-[280px] w-full ">
                <div className="w-[80px] h-[80px]">
                  <img src={bag} alt="" />
                </div>
                <div className="text-white text-[20px] font-semibold mt-2">
                  High Quality
                </div>
                <div>
                  <div className="text-white text-[15px] font-extralight mt-4">
                    Quality, Speed, Affordability - Choose All Three with Us!
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-sm md:w-[280px] w-full ">
                <div className="w-[80px] h-[80px]">
                  <img src={VRIcon} alt="" />
                </div>
                <div className="text-white text-[20px] font-semibold mt-2">
                  Universal compatibility
                </div>
                <div>
                  <div className="text-white text-[15px] font-extralight mt-4">
                    Experience Our Products on Any Device, Anywhere, Anytime
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex justify-around">
              <div className="p-4 rounded-sm md:w-[280px] w-full ">
                <div className="w-[80px] h-[80px]">
                  <img src={Users} alt="" />
                </div>
                <div className="text-white text-[20px] font-semibold mt-2">
                  Highly Engaging
                </div>
                <div>
                  <div className="text-white text-[15px] font-extralight mt-4">
                    Design options brought to life - see your project in a
                    realistic 3D
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-sm md:w-[280px] w-full ">
                <div className="w-[80px] h-[80px]">
                  <img src={userIcon} alt="" />
                </div>
                <div className="text-white text-[20px] font-semibold mt-2">
                  Boost Client Decisions
                </div>
                <div>
                  <div className="text-white text-[15px] font-extralight mt-4">
                    Empower your clients with immersive experiences and informed
                    decisions through Interactive 3D Solutions.
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

export default Solutions;
