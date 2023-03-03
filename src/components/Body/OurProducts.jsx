import React from "react";
import dot2 from "../Assets/Images/dot2.webp";
import build from "../Assets/Images/build.webp";
import location from "../Assets/Images/location.webp";
import AmenitiesIcon from "../Assets/Images/AmenitiesIcon.webp";
import Floorplan from "../Assets/Images/Floorplan.webp";
import salestool from "../Assets/Images/salestool.webp";
import Brochure from "../Assets/Images/Brochure.webp";
import walkthrough from "../Assets/Images/walkthrough.webp";
import map from "../Assets/Images/map.webp";
function OurProducts() {
  return (
    <div className="mt-28">
      <div
        className="bg-contain  bg-no-repeat bg-left"
        style={{ backgroundImage: `url(${dot2})` }}
      >
        <div>
          <div className="w-[80%]  m-auto flex justify-center">
            <div className=" m-auto">
              <div className="text-[35px] text-center font-semibold text-white">
                Our Products
              </div>
              <div className="mt-2  m-auto text-white text-[19px]">
                Product that gives you best experience for your prokect launches
              </div>
            </div>
          </div>
          <div className="mt-8 w-[80%] pt-24  m-auto flex justify-between">
            <div className="w-[40%] flex ">
              <div className="w-[85%]  text-center p-4 flex flex-col items-center">
                <div className="flex btn p-0  w-[290px] h-[55px]   items-center justify-start  ">
                  <div className="h-[50px] w-[80px] flex items-center justify-center">
                    <img
                      src={build}
                      alt=""
                      className="w-[30px] h-[30px] m-auto"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-left text-white">
                      3D View Project view
                    </p>
                  </div>
                </div>
                <div className="flex btn w-[290px] h-[55px] mt-4  items-center justify-start p-0 ">
                  <div className="h-[50px] w-[80px] flex items-center justify-center">
                    <img
                      src={location}
                      alt=""
                      className="w-[30px] h-[30px] m-auto"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-left text-white">
                      Location & Landmark
                    </p>
                  </div>
                </div>
                <div className="flex btn w-[290px] h-[55px] mt-4  items-center justify-start p-0 ">
                  <div className="h-[50px] w-[80px] flex items-center justify-center">
                    <img
                      src={AmenitiesIcon}
                      alt=""
                      className="w-[30px] h-[30px] m-auto"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-left text-white">
                      Amenities View
                    </p>
                  </div>
                </div>
                <div className="flex btn w-[290px] h-[55px] mt-4  items-center justify-start p-0 ">
                  <div className="h-[50px] w-[80px] flex items-center justify-center">
                    <img
                      src={Floorplan}
                      alt=""
                      className="w-[30px] h-[30px] m-auto"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-left text-white">
                      Floor Plan Viewer
                    </p>
                  </div>
                </div>
                <div className="flex btn w-[290px] h-[55px] mt-4  items-center justify-start p-0 ">
                  <div className="h-[50px] w-[80px] flex items-center justify-center">
                    <img
                      src={salestool}
                      alt=""
                      className="w-[30px] h-[30px] m-auto"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-left text-white">
                      Virtual Sales
                    </p>
                  </div>
                </div>
                <div className="flex btn w-[290px] h-[55px] mt-4  items-center justify-start p-0 ">
                  <div className="h-[50px] w-[80px] flex items-center justify-center">
                    <img
                      src={Brochure}
                      alt=""
                      className="w-[30px] h-[30px] m-auto"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-left text-white">
                      Showcase Collaterals
                    </p>
                  </div>
                </div>
                <div className="flex btn w-[290px] h-[55px] mt-4  items-center justify-start p-0 ">
                  <div className="h-[50px] w-[80px] flex items-center justify-center">
                    <img
                      src={walkthrough}
                      alt=""
                      className="w-[30px] h-[30px] m-auto"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-left text-white">
                      WalkThorug Video
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[2px] h-[70vh] bg-[#4614B9] border-[#4614B9]"></div>
            </div>
            <div className="w-[50%]">
              <div className="flex flex-col items-center">
                <img src={map} alt="" className="w-[100%] h-[100%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProducts;
