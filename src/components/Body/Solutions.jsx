import React from "react";
import dot2 from "../Assets/Images/dot2.webp";
import Users from "../Assets/Images/Users.webp";
import VRIcon from "../Assets/Images/VRIcon.webp";
import userIcon from "../Assets/Images/userIcon.webp";
import bag from "../Assets/Images/bag.webp";
// import VRIcon from "../Assets/Images/VRIcon.webp";
function Solutions() {
  return (
    <div>
      <div
        // className="flex items-center"
        className="flex items-center h-[90vh] bg-contain  bg-no-repeat bg-right"
        style={{ backgroundImage: `url(${dot2})` }}
      >
        <div className="flex mt-36 items-center w-[80%] m-auto">
          <div className="w-1/2">
            <div className="w-[90%] m-auto">
              <div className="text-[35px] font-semibold text-white">
                Why choose PropVR Interactive 3D Solutions?
              </div>

              <div className="mt-2 text-white text-[18px]">
                Our Products can empower your sales team to improve engagement
                with your client by upto 400% and improve lead conversion by
                upto 30%.
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex justify-evenly ">
              <div className="p-4 rounded-sm w-[250px] ">
                <div className="w-[80px] h-[80px]">
                  <img src={bag} alt="" />
                </div>
                <div className="text-white text-[22px] font-semibold mt-2">
                  Highest Quality
                </div>
                <div>
                  <div className="text-white text-[17px] font-extralight mt-4">
                    High quality execution at the fastest time and for the best
                    price available in the market
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-sm w-[250px] ">
                <div className="w-[80px] h-[80px]">
                  <img src={VRIcon} alt="" />
                </div>
                <div className="text-white text-[22px] font-semibold mt-2">
                  Cross-Platform  
                </div>
                <div>
                  <div className="text-white text-[17px] font-extralight mt-4">
                    Our products support wide range of devices from mobile,
                    tablets to VR, AR headsets.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-evenly">
              <div className="p-4 rounded-sm w-[250px] ">
                <div className="w-[80px] h-[80px]">
                  <img src={Users} alt="" />
                </div>
                <div className="text-white text-[22px] font-semibold mt-2">
                  Solid Experience
                </div>
                <div>
                  <div className="text-white text-[17px] font-extralight mt-4">
                    Our arsenal consists of highly talented large team for 3D
                    and Tech Development.
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-sm w-[250px] ">
                <div className="w-[80px] h-[80px]">
                  <img src={userIcon} alt="" />
                </div>
                <div className="text-white text-[22px] font-semibold mt-2">
                  Dedicated Support
                </div>
                <div>
                  <div className="text-white text-[17px] font-extralight mt-4">
                    24x7 - Dedicated support to solve any queries. We are in
                    this journey together.
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
