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
import map2 from "../Assets/Images/map2.webp";
import d3dwebp from "../Assets/Images/d3dwebp.webp";
import Drone from "../Assets/Images/Drone.webp";
import Eye from "../Assets/Images/Eye.webp";
import Viewwebp from "../Assets/Images/Viewwebp.webp";
import fac from "../Assets/Images/fac.webp";
import iconic from "../Assets/Images/iconic.webp";
import multi from "../Assets/Images/multi.webp";
import Plan from "../Assets/Images/Plan.webp";
import Sales from "../Assets/Images/Sales.webp";
import Collaterals from "../Assets/Images/Collaterals.webp";
import walk2 from "../Assets/video/walk2.mp4";
import interior from "../Assets/Images/interior.webp";
import lively from "../Assets/Images/lively.webp";
function OurProducts() {
  const [active, setActive] = React.useState("1");

  return (
    <div className="md:mt-28 mt-24">
      <div
        className="bg-contain  bg-no-repeat bg-left w"
        style={{ backgroundImage: `url(${dot2})`, backgroundSize: "34%" }}
      >
        <div>
          <div className="md:w-[80%] w-[95%] md:mt-0 mt-18 m-auto flex justify-center">
            <div className=" m-auto">
              <div className="text-[35px] text-center font-semibold text-white">
                Our Products
              </div>
              <div className="mt-2 md:w-auto w-[85%] m-auto text-white text-[19px]">
                Product that gives you best experience for your prokect launches
              </div>
            </div>
          </div>
          <div className="mt-8 lg:w-[80%] w-[95%] md:pt-24 pt-12  m-auto lg:flex justify-between">
            <div className="lg:w-[38%] flex w-full overflow-x-scroll">
              <div className="w-[95%] lg:w-[85%]  text-center p-4 flex lg:flex-col flex-row items-center">
                <div
                  className={
                    active === "1"
                      ? "flex btn p-0  w-[290px] h-[65px] m-2   items-center justify-start border-[2px] border-[#4614B9] hover:border-[#4614B9]"
                      : "flex btn p-0  w-[290px] h-[65px] m-2   items-center justify-start border-[2px]  hover:border-[#4614B9]   "
                  }
                  onClick={() => setActive("1")}
                >
                  <div className="h-[50px] w-[80px] flex items-center justify-center ">
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
                <div
                  className={
                    active === "2"
                      ? "flex btn p-0  w-[290px] h-[65px] m-2   items-center justify-start border-[2px] border-[#4614B9] hover:border-[#4614B9]"
                      : "flex btn p-0  w-[290px] h-[65px] m-2   items-center justify-start border-[2px]  hover:border-[#4614B9]   "
                  }
                  onClick={() => setActive("2")}
                >
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
                <div
                  className={
                    active === "3"
                      ? "flex btn p-0  w-[290px] h-[65px] m-2   items-center justify-start border-[2px] border-[#4614B9] hover:border-[#4614B9]"
                      : "flex btn p-0  w-[290px] h-[65px] m-2   items-center justify-start border-[2px]  hover:border-[#4614B9]   "
                  }
                  onClick={() => setActive("3")}
                >
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
                <div
                  className={
                    active === "4"
                      ? "flex btn p-0  w-[290px] h-[65px] m-2   items-center justify-start border-[2px] border-[#4614B9] hover:border-[#4614B9]"
                      : "flex btn p-0  w-[290px] h-[65px] m-2   items-center justify-start border-[2px]  hover:border-[#4614B9]   "
                  }
                  onClick={() => setActive("4")}
                >
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
                <div
                  className={
                    active === "5"
                      ? "flex btn p-0  w-[290px] h-[65px] m-2   items-center justify-start border-[2px] border-[#4614B9] hover:border-[#4614B9]"
                      : "flex btn p-0  w-[290px] h-[65px] m-2   items-center justify-start border-[2px]  hover:border-[#4614B9]   "
                  }
                  onClick={() => setActive("5")}
                >
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
                <div
                  className={
                    active === "6"
                      ? "flex btn p-0  w-[290px] h-[65px] m-2   items-center justify-start border-[2px] border-[#4614B9] hover:border-[#4614B9]"
                      : "flex btn p-0  w-[290px] h-[65px] m-2   items-center justify-start border-[2px]  hover:border-[#4614B9]   "
                  }
                  onClick={() => setActive("6")}
                >
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
                <div
                  className={
                    active === "7"
                      ? "flex btn p-0  w-[290px] h-[65px] m-2   items-center justify-start border-[2px] border-[#4614B9] hover:border-[#4614B9]"
                      : "flex btn p-0  w-[290px] h-[65px] m-2   items-center justify-start border-[2px]  hover:border-[#4614B9]   "
                  }
                  onClick={() => setActive("7")}
                >
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
              <div className="w-[2px]  h-[70vh] bg-[#4614B9] border-[#4614B9] hidden lg:block"></div>
            </div>
            <div className="lg:w-[62%] w-[90%] m-auto">
              {/*      ----------------1 slide ----------------------- */}
              <div className={active === "1" ? "block" : "hidden"}>
                <div className="flex flex-col items-center">
                  <div className="text-white font-semibold md:mt-0 mt-12 text-[20px] pb-2">
                    3D elevation of the complete project embedded seamlessly on
                    360 drone image.
                  </div>
                  <img src={d3dwebp} alt="" className="w-[100%] md:mt-0 mt-4 h-[100%]" />
                  <div className="lg:lg:flex items-center mt-4 w-full ">
                    <div className="flex items-center lg:w-[33%] md:mt-0 mt-4 w-full">
                      <div className="w-[80px] rounded-[15px]  border-2 border-[#191919] ">
                        <img src={Drone} alt="" className="w-[100%] h-[100%]" />
                      </div>
                      <div className="text-[#fff] ml-2 text-[15px]">
                        360 Drone shoot on the project site
                      </div>
                    </div>
                    <div className="flex items-center lg:w-[33%] md:mt-0 mt-4 w-full">
                      <div className="w-[80px] rounded-[15px]  border-2 border-[#191919] ">
                        <img src={Eye} alt="" className="w-[100%] h-[100%]" />
                      </div>
                      <div className="text-[#fff] ml-2 text-[15px]">
                        View & interact with the project from all sides
                      </div>
                    </div>
                    <div className="flex items-center lg:w-[33%] md:mt-0 mt-4 w-full">
                      <div className="w-[80px] rounded-[15px]  border-2 border-[#191919] ">
                        <img
                          src={Viewwebp}
                          alt=""
                          className="w-[100%] h-[100%]"
                        />
                      </div>
                      <div className="text-[#fff] ml-2 text-[15px]">
                        Showcase a detailed master view of the project
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*      ----------------2 slide ----------------------- */}
              <div className={active === "2" ? "block" : "hidden"}>
                <div className="flex flex-col items-center">
                  <div className="text-white font-semibold md:mt-0 mt-12 text-[20px] pb-2">
                    Show your customers the location advantage of your project
                  </div>
                  <img src={map} alt="" className="w-[100%] h-[100%]" />
                  <div className="lg:flex items-center mt-4 w-full ">
                    <div className="flex items-center lg:w-[33%] md:mt-0 mt-4 w-full ">
                      <div className="w-[90px] rounded-[15px]  border-2 border-[#191919] ">
                        <img src={map2} alt="" className="w-[100%] h-[100%]" />
                      </div>
                      <div className="text-[#fff] ml-2 text-[15px]">
                        Interactive maps to show location advantages
                      </div>
                    </div>
                    <div className="flex items-center lg:w-[33%] md:mt-0 mt-4 w-full ">
                      <div className="w-[90px] rounded-[15px]  border-2 border-[#191919] ">
                        <img
                          src={iconic}
                          alt=""
                          className="w-[100%] h-[100%]"
                        />
                      </div>
                      <div className="text-[#fff] ml-2 text-[15px]">
                        Highlight iconic landmakrs near the project
                      </div>
                    </div>
                    <div className="flex items-center lg:w-[33%] md:mt-0 mt-4 w-full ">
                      <div className="w-[90px] rounded-[15px]  border-2 border-[#191919] ">
                        <img src={multi} alt="" className="w-[100%] h-[100%]" />
                      </div>
                      <div className="text-[#fff] ml-2 text-[15px]">
                        Interactive maps to show location advantages
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*      ----------------3 slide ----------------------- */}
              <div className={active === "3" ? "block" : "hidden"}>
                <div className="flex flex-col items-center">
                  <div className="text-white font-semibold md:mt-0 mt-12 text-[20px] pb-2">
                    Show your customers the location advantage of your project
                  </div>
                  <img src={fac} alt="" className="w-[100%] h-[100%]" />
                  <div className="lg:flex items-center mt-4 w-full ">
                    <div className="flex items-center lg:w-[33%] md:mt-0 mt-4 w-full">
                      <div className="w-[90px] rounded-[15px]  border-2 border-[#191919] ">
                        <img src={map2} alt="" className="w-[100%] h-[100%]" />
                      </div>
                      <div className="text-[#fff] ml-2 text-[16px]">
                        Interactive maps to show location advantages
                      </div>
                    </div>
                    <div className="flex items-center lg:w-[33%] md:mt-0 mt-4 w-full">
                      <div className="w-[90px] rounded-[15px]  border-2 border-[#191919] ">
                        <img src={map2} alt="" className="w-[100%] h-[100%]" />
                      </div>
                      <div className="text-[#fff] ml-2 text-[16px]">
                        Interactive maps to show location advantages
                      </div>
                    </div>
                    <div className="flex items-center lg:w-[33%] md:mt-0 mt-4 w-full">
                      <div className="w-[90px] rounded-[15px]  border-2 border-[#191919] ">
                        <img src={map2} alt="" className="w-[100%] h-[100%]" />
                      </div>
                      <div className="text-[#fff] ml-2 text-[16px]">
                        Interactive maps to show location advantages
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*      ----------------4 slide ----------------------- */}
              <div className={active === "4" ? "block" : "hidden"}>
                <div className="flex flex-col items-center">
                  <div className="text-white font-semibold md:mt-0 mt-12 text-[20px] pb-2">
                    Show your customers the location advantage of your project
                  </div>
                  <img src={Plan} alt="" className="w-[100%] h-[100%]" />
                  <div className="lg:flex items-center mt-4 w-full ">
                    <div className="flex items-center lg:w-[33%] md:mt-0 mt-4 w-full">
                      <div className="w-[90px] rounded-[15px]  border-2 border-[#191919] ">
                        <img src={map2} alt="" className="w-[100%] h-[100%]" />
                      </div>
                      <div className="text-[#fff] ml-2 text-[16px]">
                        Interactive maps to show location advantages
                      </div>
                    </div>
                    <div className="flex items-center lg:w-[33%] md:mt-0 mt-4 w-full">
                      <div className="w-[90px] rounded-[15px]  border-2 border-[#191919] ">
                        <img src={map2} alt="" className="w-[100%] h-[100%]" />
                      </div>
                      <div className="text-[#fff] ml-2 text-[16px]">
                        Interactive maps to show location advantages
                      </div>
                    </div>
                    <div className="flex items-center lg:w-[33%] md:mt-0 mt-4 w-full">
                      <div className="w-[90px] rounded-[15px]  border-2 border-[#191919] ">
                        <img src={map2} alt="" className="w-[100%] h-[100%]" />
                      </div>
                      <div className="text-[#fff] ml-2 text-[16px]">
                        Interactive maps to show location advantages
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*      ----------------5 slide ----------------------- */}
              <div className={active === "5" ? "block" : "hidden"}>
                <div className="flex flex-col items-center">
                  <div className="text-white font-semibold md:mt-0 mt-12 text-[20px] pb-2">
                    Show your customers the location advantage of your project
                  </div>
                  <img src={Sales} alt="" className="w-[100%] h-[100%]" />
                  <div className="lg:flex items-center mt-4 w-full ">
                    <div className="flex items-center lg:w-[33%] md:mt-0 mt-4 w-full">
                      <div className="w-[90px] rounded-[15px]  border-2 border-[#191919] ">
                        <img src={map2} alt="" className="w-[100%] h-[100%]" />
                      </div>
                      <div className="text-[#fff] ml-2 text-[16px]">
                        Interactive maps to show location advantages
                      </div>
                    </div>
                    <div className="flex items-center lg:w-[33%] md:mt-0 mt-4 w-full">
                      <div className="w-[90px] rounded-[15px]  border-2 border-[#191919] ">
                        <img src={map2} alt="" className="w-[100%] h-[100%]" />
                      </div>
                      <div className="text-[#fff] ml-2 text-[16px]">
                        Interactive maps to show location advantages
                      </div>
                    </div>
                    <div className="flex items-center lg:w-[33%] md:mt-0 mt-4 w-full">
                      <div className="w-[90px] rounded-[15px]  border-2 border-[#191919] ">
                        <img src={map2} alt="" className="w-[100%] h-[100%]" />
                      </div>
                      <div className="text-[#fff] ml-2 text-[16px]">
                        Interactive maps to show location advantages
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*      ----------------6 slide ----------------------- */}
              <div className={active === "6" ? "block" : "hidden"}>
                <div className="flex flex-col items-center">
                  <div className="text-white font-semibold md:mt-0 mt-12 text-[20px] pb-2">
                    Show your customers the location advantage of your project
                  </div>
                  <img src={Collaterals} alt="" className="w-[100%] h-[100%]" />
                  <div className="lg:flex items-center mt-4 w-full ">
                    <div className="flex items-center lg:w-[33%] md:mt-0 mt-4 w-full">
                      <div className="w-[90px] rounded-[15px]  border-2 border-[#191919] ">
                        <img src={map2} alt="" className="w-[100%] h-[100%]" />
                      </div>
                      <div className="text-[#fff] ml-2 text-[16px]">
                        Interactive maps to show location advantages
                      </div>
                    </div>
                    <div className="flex items-center lg:w-[33%] md:mt-0 mt-4 w-full">
                      <div className="w-[90px] rounded-[15px]  border-2 border-[#191919] ">
                        <img src={map2} alt="" className="w-[100%] h-[100%]" />
                      </div>
                      <div className="text-[#fff] ml-2 text-[16px]">
                        Interactive maps to show location advantages
                      </div>
                    </div>
                    <div className="flex items-center lg:w-[33%] md:mt-0 mt-4 w-full">
                      <div className="w-[90px] rounded-[15px]  border-2 border-[#191919] ">
                        <img src={map2} alt="" className="w-[100%] h-[100%]" />
                      </div>
                      <div className="text-[#fff] ml-2 text-[16px]">
                        Interactive maps to show location advantages
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*      ----------------7 slide ----------------------- */}
              <div className={active === "7" ? "block" : "hidden"}>
                <div className="flex flex-col items-center">
                  <div className="text-white font-semibold md:mt-0 mt-12 text-[20px] pb-2">
                    Show your customers the location advantage of your project
                  </div>
                  {/* add video  */}
                  <div className="w-[100%] h-[100%]">
                    <video
                      className="w-[100%] h-[100%]"
                      controls
                      autoPlay
                      loop
                      muted
                    >
                      <source src={walk2} type="video/mp4" />
                    </video>
                  </div>

                  {/* <img src={fac} alt="" className="w-[100%] h-[100%]" /> */}
                  <div className="lg:flex items-center mt-4 w-full ">
                    <div className="flex items-center lg:w-[33%] md:mt-0 mt-4 w-full">
                      <div className="w-[90px] rounded-[15px]  border-2 border-[#191919] ">
                        <img src={map2} alt="" className="w-[100%] h-[100%]" />
                      </div>
                      <div className="text-[#fff] ml-2 text-[16px]">
                        Interactive maps to show location advantages
                      </div>
                    </div>
                    <div className="flex items-center lg:w-[33%] md:mt-0 mt-4 w-full">
                      <div className="w-[90px] rounded-[15px]  border-2 border-[#191919] ">
                        <img src={map2} alt="" className="w-[100%] h-[100%]" />
                      </div>
                      <div className="text-[#fff] ml-2 text-[16px]">
                        Interactive maps to show location advantages
                      </div>
                    </div>
                    <div className="flex items-center lg:w-[33%] md:mt-0 mt-4 w-full">
                      <div className="w-[90px] rounded-[15px]  border-2 border-[#191919] ">
                        <img src={map2} alt="" className="w-[100%] h-[100%]" />
                      </div>
                      <div className="text-[#fff] ml-2 text-[16px]">
                        Interactive maps to show location advantages
                      </div>
                    </div>
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

export default OurProducts;
