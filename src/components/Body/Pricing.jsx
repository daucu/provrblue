import React, { useEffect, useState } from "react";
import dot2 from "../Assets/Images/dot2.webp";
import tick from "../Assets/Images/tick.webp";

function Pricing() {
  const [basicPlan, setBasicPlan] = useState(false);
  const [premiumPlan, setPremiumPlan] = useState(false);
  const [containerOne, setContainerOne] = useState("");
  const [containerTwo, setContainerTwo] = useState("");
  const handleBasicPlanOpen = () => {
    setBasicPlan(true);
  };
  const handleBasicPlanClose = () => {
    setBasicPlan(false);
  };

  const handlePremiumPlanOpen = () => {
    setPremiumPlan(true);
  };
  const handlePremiumPlanClose = () => {
    setPremiumPlan(false);
  };

  return (
    <div>
      {/* component */}
      <div className="md:w-[80%] w-[90%] m-auto  pt-28 flex justify-center">
        <div className=" m-auto">
          <div className="text-[35px] text-center font-semibold text-white">
            Product Plans
          </div>
          <div className="md:mt-4 mt-6   m-auto text-white text-[19px] text-left ">
            Essential and Advanced, choose the suitable plan of your choice
          </div>
        </div>
      </div>
      <div className="bg-black md:mt-16 mt-8 min-h-[100vh] px-6">
        <div className="max-w-[1200px] m-auto hidden lg:flex w-full">
          <div className="grow-2 shrink-2 flex flex-col justify-end w-1/2 py-16">
            <div className="h-[64px] text-white flex flex-col justify-center text-left">
              <p className="text-[14px] leading-[20px]">3D Modeling</p>
            </div>
            <div className="h-[64px] text-white flex flex-col justify-center text-left">
              <p className="text-[14px] leading-[20px]">Real-Time Rendering</p>
            </div>
            <div className="h-[64px] text-white flex flex-col justify-center text-left">
              <p className="text-[14px] leading-[20px]">
                Augmented Reality(AR) View (AR floorplans and Project
                Visualization)
              </p>
            </div>
            <div className="h-[64px] text-white flex flex-col justify-center text-left">
              <p className="text-[14px] leading-[20px]">360-Degree Views</p>
            </div>
            <div className="h-[64px] text-white flex flex-col justify-center text-left">
              <p className="text-[14px] leading-[20px]">
                Isometric Floor Plan View (See Your Dream Place from Above)
              </p>
            </div>
            <div className="h-[64px] text-white flex flex-col justify-center text-left">
              <p className="text-[14px] leading-[20px]">
                360 Virtual Tour Of Interiors (Take a Virtual Stroll Through Our
                Interiors with 360 Virtual Tour)
              </p>
            </div>
            <div className="h-[64px] text-white flex flex-col justify-center text-left">
              <p className="text-[14px] leading-[20px]">
                Amenities 3D Renders And 360 Renders (Discover the Amenities in
                Stunning Detail with 3D Renders and 360 Views)
              </p>
            </div>
            <div className="h-[64px] text-white flex flex-col justify-center text-left">
              <p className="text-[14px] leading-[20px]">
                Touchscreen Support (Tablet, Smart Screens, Mobile, Desktops,
                and Laptops)
              </p>
            </div>
            <div className="h-[64px] text-white flex flex-col justify-center text-left">
              <p className="text-[14px] leading-[20px]">
                Advertisement(OPTIONAL) (Digital Marketing)
              </p>
            </div>
            <div className="h-[64px] text-white flex flex-col justify-center text-left">
              <p className="text-[14px] leading-[20px]">
                Balcony Views From Different Floors (Step onto the Balcony with
                a Click)
              </p>
            </div>
            <div className="h-[64px] text-white flex flex-col justify-center text-left">
              <p className="text-[14px] leading-[20px]">
                Project Walkthrough Video (A guided video tour of the space)
              </p>
            </div>
            <div className="h-[64px] text-white flex flex-col justify-center text-left">
              <p className="text-[14px] leading-[20px]">
                Exterior And Interior Images (High-resolution Images for
                promotional materials)
              </p>
            </div>
            <div className="h-[64px] text-white flex flex-col justify-center text-left">
              <p className="text-[14px] leading-[20px]">
                Exterior And Interior Images (High-resolution Images for
                promotional materials)
              </p>
            </div>
            <div className="h-[64px] text-white flex flex-col justify-center text-left">
              <p className="text-[14px] leading-[20px]">
                Custom Website (OPTIONAL) (Unleash Your Creativity with a Custom
                Website Designed)
              </p>
            </div>
            <div className="h-[64px] text-white flex flex-col justify-center text-left">
              <p className="text-[14px] leading-[20px]">
                Branding (Custom Logo/Information Add-ons)
              </p>
            </div>
            <div className="h-[64px] text-white flex flex-col justify-center text-left">
              <p className="text-[14px] leading-[20px]">
                Complete Project 3D (See Every Detail of Our Project Come to
                Life in 3D)
              </p>
            </div>
            <div className="h-[64px] text-white flex flex-col justify-center text-left">
              <p className="text-[14px] leading-[20px]">
                Virtual Reality Viewing (Headset/Oculus support)
              </p>
            </div>
            <div className="h-[64px] text-white flex flex-col justify-center text-left">
              <p className="text-[14px] leading-[20px]">
                Complete Amenities 3D (Immersive 3D Amenities View)
              </p>
            </div>
            <div className="h-[64px] text-white flex flex-col justify-center text-left">
              <p className="text-[14px] leading-[20px]">
                Customizable Lighting
              </p>
            </div>
            <div className="h-[64px] text-white flex flex-col justify-center text-left">
              <p className="text-[14px] leading-[20px]">
                Interactive Furniture Placement
              </p>
            </div>
          </div>
          <div className="grow shrink w-[250px] flex flex-col  bg-[#0C0C0C] rounded-xl py-16">
            <div className="flex items-center justify-center">
              <td
                className="px-4  rounded-t-Midrounded relative py-0 text-center text-white table_bg pb-12"
                data-v-123669ee=""
              >
                <h6
                  className="uppercase tracking-widest font-extralight"
                  data-v-123669ee=""
                >
                  Essential
                </h6>
                <div
                  className="flex flex-col m-auto w-fit mt-8"
                  data-v-123669ee=""
                >
                  <a
                    href="/#ContactUs"
                    className="bg-[#4600B9] hover:bg-propvrBlue hover:opacity-75 my-2 inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-propvrBlue"
                    data-v-123669ee=""
                  >
                    Book A Demo
                  </a>
                  <button
                    type="button"
                    className="hover:opacity-75 my-2 inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#191919] hover:bg-propvrBlack focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-propvrBlack"
                    data-v-123669ee=""
                  >
                    View Essential Demo
                  </button>
                </div>
              </td>
            </div>
            <div className="h-[64px] w-full flex items-center justify-center">
              <div className="h-[28px] w-[28px]">
                <img src={tick} alt="" className="rounded-full h-full w-full" />
              </div>
            </div>
            <div className="h-[64px] w-full flex items-center justify-center">
              <div className="h-[28px] w-[28px]">
                <img src={tick} alt="" className="rounded-full h-full w-full" />
              </div>
            </div>
            <div className="h-[64px] w-full flex items-center justify-center">
              <div className="h-[28px] w-[28px]">
                <img src={tick} alt="" className="rounded-full h-full w-full" />
              </div>
            </div>
            <div className="h-[64px] w-full flex items-center justify-center">
              <div className="h-[28px] w-[28px]">
                <img src={tick} alt="" className="rounded-full h-full w-full" />
              </div>
            </div>
            <div className="h-[64px] w-full flex flex-col items-center justify-center">
              <div className="h-[28px] w-[28px]">
                <img src={tick} alt="" className="rounded-full h-full w-full" />
              </div>
              <div className="text-[13px] ">(2 Elements)</div>
            </div>
            <div className="h-[64px] w-full flex flex-col items-center justify-center">
              <div className="h-[28px] w-[28px]">
                <img src={tick} alt="" className="rounded-full h-full w-full" />
              </div>
              <div className="text-[13px] ">(2 elements plans)</div>
            </div>
            <div className="h-[64px] w-full flex flex-col items-center justify-center">
              <div className="h-[28px] w-[28px]">
                <img src={tick} alt="" className="rounded-full h-full w-full" />
              </div>
              <div className="text-[13px] ">(1 elements plans)</div>
            </div>
            <div className="h-[64px] w-full flex items-center justify-center">
              <div className="h-[28px] w-[28px]">
                <img src={tick} alt="" className="rounded-full h-full w-full" />
              </div>
            </div>
            <div className="h-[64px] w-full flex items-center justify-center">
              <div className="h-[28px] w-[28px]">
                <img src={tick} alt="" className="rounded-full h-full w-full" />
              </div>
            </div>
            <div className="h-[64px] w-full flex flex-col items-center justify-center">
              <div className="h-[28px] w-[28px]">
                <img src={tick} alt="" className="rounded-full h-full w-full" />
              </div>
              <div className="text-[13px] ">(Any 1 Floor)</div>
            </div>
            <div className="h-[64px] w-full flex flex-col items-center justify-center">
              <div className="h-[28px] w-[28px]">
                <img src={tick} alt="" className="rounded-full h-full w-full" />
              </div>
              <div className="text-[13px] w-[70%] text-center m-auto ">
                (Only Exterior + Any 1 Amenity Included)
              </div>
            </div>
            <div className="h-[64px] w-full flex flex-col items-center justify-center">
              <div className="h-[28px] w-[28px]">
                <img src={tick} alt="" className="rounded-full h-full w-full" />
              </div>
              <div className="text-[13px] w-[70%]  text-center m-auto ">
                (Only Exterior + No Amenity Included)
              </div>
            </div>
            <div className="h-[64px] w-full flex flex-col items-center justify-center">
              <div className="h-[28px] w-[28px]">
                <img src={tick} alt="" className="rounded-full h-full w-full" />
              </div>
              <div className="text-[13px] w-[70%]  text-center m-auto ">
                3 - Free
              </div>
            </div>
            <div className="h-[64px] w-full flex flex-col items-center justify-center">
              <div className="text-[18px] w-[70%]  text-center m-auto ">
                ( - )
              </div>
            </div>
            <div className="h-[64px] w-full flex flex-col items-center justify-center">
              <div className="text-[18px] w-[70%]  text-center m-auto ">
                ( - )
              </div>
            </div>
            <div className="h-[64px] w-full flex flex-col items-center justify-center">
              <div className="text-[18px] w-[70%]  text-center m-auto ">
                ( - )
              </div>
            </div>
            <div className="h-[64px] w-full flex flex-col items-center justify-center">
              <div className="text-[18px] w-[70%]  text-center m-auto ">
                ( - )
              </div>
            </div>
            <div className="h-[64px] w-full flex flex-col items-center justify-center">
              <div className="text-[18px] w-[70%]  text-center m-auto ">
                ( - )
              </div>
            </div>
            <div className="h-[64px] w-full flex flex-col items-center justify-center">
              <div className="text-[18px] w-[70%]  text-center m-auto ">
                ( - )
              </div>
            </div>
            <div className="h-[64px] w-full flex flex-col items-center justify-center">
              <div className="text-[18px] w-[70%]  text-center m-auto ">
                ( - )
              </div>
            </div>
          </div>
          <div className="grow shrink w-[250px] flex flex-col py-16">
            <div className="flex items-center justify-center">
              <td
                className="px-4  rounded-t-Midrounded relative py-0 text-center text-white table_bg pb-12"
                data-v-123669ee=""
              >
                <h6
                  className="uppercase tracking-widest font-extralight"
                  data-v-123669ee=""
                >
                  Essential
                </h6>
                <div
                  className="flex flex-col m-auto w-fit mt-8"
                  data-v-123669ee=""
                >
                  <a
                    href="/#ContactUs"
                    className="bg-[#4600B9] hover:bg-propvrBlue hover:opacity-75 my-2 inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-propvrBlue"
                    data-v-123669ee=""
                  >
                    Book A Demo
                  </a>
                  <button
                    type="button"
                    className="hover:opacity-75 my-2 inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#191919] hover:bg-propvrBlack focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-propvrBlack"
                    data-v-123669ee=""
                  >
                    View Essential Demo
                  </button>
                </div>
              </td>
            </div>
            <div className="h-[64px] w-full flex items-center justify-center">
              <div className="h-[28px] w-[28px]">
                <img src={tick} alt="" className="rounded-full h-full w-full" />
              </div>
            </div>
            <div className="h-[64px] w-full flex items-center justify-center">
              <div className="h-[28px] w-[28px]">
                <img src={tick} alt="" className="rounded-full h-full w-full" />
              </div>
            </div>
            <div className="h-[64px] w-full flex items-center justify-center">
              <div className="h-[28px] w-[28px]">
                <img src={tick} alt="" className="rounded-full h-full w-full" />
              </div>
            </div>
            <div className="h-[64px] w-full flex items-center justify-center">
              <div className="h-[28px] w-[28px]">
                <img src={tick} alt="" className="rounded-full h-full w-full" />
              </div>
            </div>
            <div className="h-[64px] w-full flex flex-col 	 items-center justify-center">
              <div className="h-[28px] w-[28px]">
                <img src={tick} alt="" className="rounded-full h-full w-full" />
              </div>
              <div className="text-[13px] ">(All Elements)</div>
            </div>
            <div className="h-[64px] w-full flex flex-col items-center justify-center">
              <div className="h-[28px] w-[28px]">
                <img src={tick} alt="" className="rounded-full h-full w-full" />
              </div>
              <div className="text-[13px] ">(All Elements)</div>
            </div>
            <div className="h-[64px] w-full flex flex-col items-center justify-center">
              <div className="h-[28px] w-[28px]">
                <img src={tick} alt="" className="rounded-full h-full w-full" />
              </div>
              <div className="text-[13px] ">(All Elements)</div>
            </div>
            <div className="h-[64px] w-full flex items-center justify-center">
              <div className="h-[28px] w-[28px]">
                <img src={tick} alt="" className="rounded-full h-full w-full" />
              </div>
            </div>
            <div className="h-[64px] w-full flex items-center justify-center">
              <div className="h-[28px] w-[28px]">
                <img src={tick} alt="" className="rounded-full h-full w-full" />
              </div>
            </div>
            <div className="h-[64px] w-full flex flex-col items-center justify-center">
              <div className="h-[28px] w-[28px]">
                <img src={tick} alt="" className="rounded-full h-full w-full" />
              </div>
              <div className="text-[13px] ">(All Floors)</div>
            </div>
            <div className="h-[64px] w-full flex flex-col items-center justify-center">
              <div className="h-[28px] w-[28px]">
                <img src={tick} alt="" className="rounded-full h-full w-full" />
              </div>
              <div className="text-[13px]  w-[90%]   text-center ">
                (All Exterior and Interiors + All Amenities Included)
              </div>
            </div>
            <div className="h-[64px] w-full flex flex-col items-center justify-center">
              <div className="h-[28px] w-[28px]">
                <img src={tick} alt="" className="rounded-full h-full w-full" />
              </div>
              <div className="text-[13px]  w-[90%]  text-center ">
                (All Exterior and Interiors + All Amenities Included)
              </div>
            </div>
            <div className="h-[64px] w-full flex flex-col items-center justify-center">
              <div className="h-[28px] w-[28px]">
                <img src={tick} alt="" className="rounded-full h-full w-full" />
              </div>
              <div className="text-[13px]  w-[90%]  text-center ">6 - Free</div>
            </div>
            <div className="h-[64px] w-full flex items-center justify-center">
              <div className="h-[28px] w-[28px]">
                <img src={tick} alt="" className="rounded-full h-full w-full" />
              </div>
            </div>
            <div className="h-[64px] w-full flex items-center justify-center">
              <div className="h-[28px] w-[28px]">
                <img src={tick} alt="" className="rounded-full h-full w-full" />
              </div>
            </div>
            <div className="h-[64px] w-full flex items-center justify-center">
              <div className="h-[28px] w-[28px]">
                <img src={tick} alt="" className="rounded-full h-full w-full" />
              </div>
            </div>
            <div className="h-[64px] w-full flex items-center justify-center">
              <div className="h-[28px] w-[28px]">
                <img src={tick} alt="" className="rounded-full h-full w-full" />
              </div>
            </div>
            <div className="h-[64px] w-full flex items-center justify-center">
              <div className="h-[28px] w-[28px]">
                <img src={tick} alt="" className="rounded-full h-full w-full" />
              </div>
            </div>
            <div className="h-[64px] w-full flex items-center justify-center">
              <div className="h-[28px] w-[28px]">
                <img src={tick} alt="" className="rounded-full h-full w-full" />
              </div>
            </div>
            <div className="h-[64px] w-full flex items-center justify-center">
              <div className="h-[28px] w-[28px]">
                <img src={tick} alt="" className="rounded-full h-full w-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:hidden overflow-x-scroll propvr">
          <div className="flex">
            <div
              className="border-2 border-gray-600 rounded-2xl shadow-sm h-full flex-auto mb-3 mr-3"
              data-v-123669ee=""
            >
              <div className="p-11 text-center" data-v-123669ee="">
                <h6
                  className="text-white text-lg uppercase tracking-widest font-normal"
                  data-v-123669ee=""
                >
                  Essential
                </h6>
                <div
                  className="flex flex-col m-auto w-fit my-10"
                  data-v-123669ee=""
                >
                  <a
                    href="/#ContactUs"
                    className="bg-[#4600B9] hover:bg-propvrBlue hover:opacity-75 whitespace-nowrap my-2 inline-flex justify-center items-center px-6 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-propvrBlue"
                    data-v-123669ee=""
                  >
                    Book A Demo
                  </a>
                  <button
                    type="button"
                    className="hover:opacity-75 whitespace-nowrap my-2 inline-flex justify-center items-center px-6 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#191919] hover:bg-propvrBlack focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-propvrBlack"
                    data-v-123669ee=""
                  >
                    View Essential Demo
                  </button>
                </div>
                <div
                  className="hover:opacity-75 text-white underline text-lg font-normal cursor-pointer "
                  data-v-123669ee=""
                  onClick={() => setContainerOne(true)}
                >
                  View Details
                </div>
              </div>
            </div>
            <div
              className="border-2 border-gray-600 rounded-2xl shadow-sm h-full flex-auto mb-3 ml-3"
              data-v-123669ee=""
            >
              <div className="p-11 text-center" data-v-123669ee="">
                <h6
                  className="text-white text-lg uppercase tracking-widest font-normal"
                  data-v-123669ee=""
                >
                  Essential
                </h6>
                <div
                  className="flex flex-col m-auto w-fit my-10"
                  data-v-123669ee=""
                >
                  <a
                    href="/#ContactUs"
                    className="bg-[#4600B9] hover:bg-propvrBlue hover:opacity-75 whitespace-nowrap my-2 inline-flex justify-center items-center px-6 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-propvrBlue"
                    data-v-123669ee=""
                  >
                    Book A Demo
                  </a>
                  <button
                    type="button"
                    className="hover:opacity-75 whitespace-nowrap my-2 inline-flex justify-center items-center px-6 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#191919] hover:bg-propvrBlack focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-propvrBlack"
                    data-v-123669ee=""
                  >
                    View Essential Demo
                  </button>
                </div>
                <div
                  className="hover:opacity-75 text-white underline text-lg font-normal cursor-pointer"
                  data-v-123669ee=""
                  onClick={() => setContainerTwo(true)}
                >
                  View Details
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            (containerOne || containerTwo) &&
            !(containerOne === "" && containerTwo === "")
              ? "fixed bottom-0 right-0 w-full flex justify-end rounded-xl"
              : "hidden"
          }
        >
          <div
            className={
              containerOne === ""
                ? "hidden"
                : containerOne
                ? "w-[90%] sm:w-[450px] bg-[#191919] animate-slide_up relative h-[400px] rounded-2xl"
                : "hidden"
            }
          >
            <div className="h-[76px] px-6 bg-[#4600B9] rounded-t-2xl min-w-full text-white flex items-center justify-between">
              <p className="text-[18px] leading-[28px]">ESSENTIAL</p>
              <div
                className="ml-3 flex h-7 items-center"
                data-v-123669ee=""
                onClick={() => setContainerOne(false)}
              >
                <button
                  type="button"
                  className="rounded-md bg-propvrBlue text-propvrBlue hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                  tabindex="0"
                >
                  <span className="sr-only" data-v-123669ee="">
                    Close panel
                  </span>
                  <svg
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6 text-white focus:outline-none focus:ring-0"
                    data-v-123669ee=""
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                      data-v-123669ee=""
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="px-6 py-6 ">
              <div className="overflow-y-scroll h-[324px]">
                <div className="flex mt-4 ">
                  <div className="h-[52px] text-white flex flex-col justify-center text-left w-1/2">
                    <p className="text-[14px] leading-[20px]">
                      Virtual Sales Tool
                    </p>
                  </div>
                  <div className="h-[52px] flex items-center justify-center w-1/2">
                    <div className="h-[28px] w-[28px]">
                      <img
                        src={tick}
                        alt=""
                        className="rounded-full h-full w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex mt-4 ">
                  <div className="h-[52px] text-white flex flex-col justify-center text-left w-1/2">
                    <p className="text-[14px] leading-[20px]">3D Modeling</p>
                  </div>
                  <div className="h-[52px] flex items-center justify-center w-1/2">
                    <div className="h-[28px] w-[28px]">
                      <img
                        src={tick}
                        alt=""
                        className="rounded-full h-full w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex mt-4 ">
                  <div className="h-[52px] text-white flex flex-col justify-center text-left w-1/2">
                    <p className="text-[14px] leading-[20px]">
                      Real-Time Rendering
                    </p>
                  </div>
                  <div className="h-[52px] flex items-center justify-center w-1/2">
                    <div className="h-[28px] w-[28px]">
                      <img
                        src={tick}
                        alt=""
                        className="rounded-full h-full w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex mt-4 ">
                  <div className="h-[52px] text-white flex flex-col justify-center text-left w-1/2">
                    <p className="text-[14px] leading-[20px]">
                      Augmented Reality(AR) View (AR floorplans and Project
                      Visualization)
                    </p>
                  </div>
                  <div className="h-[52px] flex items-center justify-center w-1/2">
                    <div className="h-[28px] w-[28px]">
                      <img
                        src={tick}
                        alt=""
                        className="rounded-full h-full w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex mt-4 ">
                  <div className="h-[52px] text-white flex flex-col justify-center text-left w-1/2">
                    <p className="text-[14px] leading-[20px]">
                      360-Degree Views
                    </p>
                  </div>
                  <div className="h-[52px] flex items-center justify-center w-1/2">
                    <div className="h-[28px] w-[28px]">
                      <img
                        src={tick}
                        alt=""
                        className="rounded-full h-full w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex mt-12 ">
                  <div className="h-[52px] text-white flex flex-col justify-center text-left w-1/2">
                    <p className="text-[14px] leading-[20px]">
                      Isometric Floor Plan View (See Your Dream Place from
                      Above)
                    </p>
                  </div>
                  <div className="h-[52px] flex items-center justify-center w-1/2">
                    <div className="h-[28px] w-[28px]">
                      <img
                        src={tick}
                        alt=""
                        className="rounded-full h-full w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex mt-24 ">
                  <div className="h-[52px] text-white flex flex-col justify-center text-left w-1/2">
                    <p className="text-[14px] leading-[20px]">
                      360 Virtual Tour Of Interiors (Take a Virtual Stroll
                      Through Our Interiors with 360 Virtual Tour)
                    </p>
                  </div>
                  <div className="h-[52px] flex items-center justify-center w-1/2">
                    <div className="h-[28px] w-[28px]">
                      <img
                        src={tick}
                        alt=""
                        className="rounded-full h-full w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex mt-24 ">
                  <div className="h-[52px] text-white flex flex-col justify-center text-left w-1/2">
                    <p className="text-[14px] leading-[20px]">
                      Amenities 3D Renders And 360 Renders (Discover the
                      Amenities in Stunning Detail with 3D Renders and 360
                      Views)
                    </p>
                  </div>
                  <div className="h-[52px] flex items-center justify-center w-1/2">
                    <div className="h-[28px] w-[28px]">
                      <img
                        src={tick}
                        alt=""
                        className="rounded-full h-full w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex mt-24 ">
                  <div className="h-[52px] text-white flex flex-col justify-center text-left w-1/2">
                    <p className="text-[14px] leading-[20px]">
                      Touchscreen Support (Tablet, Smart Screens, Mobile,
                      Desktops, and Laptops)
                    </p>
                  </div>
                  <div className="h-[52px] flex items-center justify-center w-1/2">
                    <div className="h-[28px] w-[28px]">
                      <img
                        src={tick}
                        alt=""
                        className="rounded-full h-full w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex mt-12 ">
                  <div className="h-[52px] text-white flex flex-col justify-center text-left w-1/2">
                    <p className="text-[14px] leading-[20px]">
                      Advertisement(OPTIONAL) (Digital Marketing)
                    </p>
                  </div>
                  <div className="h-[52px] flex items-center justify-center w-1/2">
                    <div className="h-[28px] w-[28px]">
                      <img
                        src={tick}
                        alt=""
                        className="rounded-full h-full w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex mt-12 ">
                  <div className="h-[52px] text-white flex flex-col justify-center text-left w-1/2">
                    <p className="text-[14px] leading-[20px]">
                      Balcony Views From Different Floors (Step onto the Balcony
                      with a Click)
                    </p>
                  </div>
                  <div className="h-[52px] flex items-center justify-center w-1/2">
                    <div className="h-[28px] w-[28px]">
                      <img
                        src={tick}
                        alt=""
                        className="rounded-full h-full w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex mt-12 ">
                  <div className="h-[52px] text-white flex flex-col justify-center text-left w-1/2">
                    <p className="text-[14px] leading-[20px]">
                      Project Walkthrough Video (A guided video tour of the
                      space)
                    </p>
                  </div>
                  <div className="h-[52px] flex items-center justify-center w-1/2">
                    <div className="h-[28px] w-[28px]">
                      <img
                        src={tick}
                        alt=""
                        className="rounded-full h-full w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex mt-12 ">
                  <div className="h-[52px] text-white flex flex-col justify-center text-left w-1/2">
                    <p className="text-[14px] leading-[20px]">
                      Exterior And Interior Images (High-resolution Images for
                      promotional materials)
                    </p>
                  </div>
                  <div className="h-[52px] flex items-center justify-center w-1/2">
                    <div className="h-[28px] w-[28px]">
                      <img
                        src={tick}
                        alt=""
                        className="rounded-full h-full w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex mt-12 ">
                  <div className="h-[52px] text-white flex flex-col justify-center text-left w-1/2">
                    <p className="text-[14px] leading-[20px]">
                      Scene Modifications/ Edits
                    </p>
                  </div>
                  <div className="h-[52px] flex items-center justify-center w-1/2">
                    <div className="h-[28px] w-[28px]">
                      <img
                        src={tick}
                        alt=""
                        className="rounded-full h-full w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex mt-12 ">
                  <div className="h-[52px] text-white flex flex-col justify-center text-left w-1/2">
                    <p className="text-[14px] leading-[20px]">
                      Custom Website (OPTIONAL) (Unleash Your Creativity with a
                      Custom Website Designed)
                    </p>
                  </div>
                  <div className="h-[52px] flex items-center justify-center w-1/2">
                    <div className="h-[28px] w-[38px] text-white text-[20px]">
                      ( - )
                    </div>
                  </div>
                </div>
                <div className="flex mt-12 ">
                  <div className="h-[52px] text-white flex flex-col justify-center text-left w-1/2">
                    <p className="text-[14px] leading-[20px]">
                      Branding (Custom Logo/Information Add-ons)
                    </p>
                  </div>
                  <div className="h-[52px] flex items-center justify-center w-1/2">
                    <div className="h-[28px] w-[38px] text-white text-[20px]">
                      ( - )
                    </div>
                  </div>
                </div>
                <div className="flex mt-12 ">
                  <div className="h-[52px] text-white flex flex-col justify-center text-left w-1/2">
                    <p className="text-[14px] leading-[20px]">
                      Complete Project 3D (See Every Detail of Our Project Come
                      to Life in 3D)
                    </p>
                  </div>
                  <div className="h-[52px] flex items-center justify-center w-1/2">
                    <div className="h-[28px] w-[38px] text-white text-[20px]">
                      ( - )
                    </div>
                  </div>
                </div>
                <div className="flex mt-12 ">
                  <div className="h-[52px] text-white flex flex-col justify-center text-left w-1/2">
                    <p className="text-[14px] leading-[20px]">
                      Virtual Reality Viewing (Headset/Oculus support)
                    </p>
                  </div>
                  <div className="h-[52px] flex items-center justify-center w-1/2">
                    <div className="h-[28px] w-[38px] text-white text-[20px]">
                      ( - )
                    </div>
                  </div>
                </div>
                <div className="flex mt-12 ">
                  <div className="h-[52px] text-white flex flex-col justify-center text-left w-1/2">
                    <p className="text-[14px] leading-[20px]">
                      Complete Amenities 3D (Immersive 3D Amenities View)
                    </p>
                  </div>
                  <div className="h-[52px] flex items-center justify-center w-1/2">
                    <div className="h-[28px] w-[38px] text-white text-[20px]">
                      ( - )
                    </div>
                  </div>
                </div>
                <div className="flex mt-12 ">
                  <div className="h-[52px] text-white flex flex-col justify-center text-left w-1/2">
                    <p className="text-[14px] leading-[20px]">
                      Customizable Furniture and Finishes
                    </p>
                  </div>
                  <div className="h-[52px] flex items-center justify-center w-1/2">
                    <div className="h-[28px] w-[38px] text-white text-[20px]">
                      ( - )
                    </div>
                  </div>
                </div>
                <div className="flex mt-12 ">
                  <div className="h-[52px] text-white flex flex-col justify-center text-left w-1/2">
                    <p className="text-[14px] leading-[20px]">
                      Customizable Lighting
                    </p>
                  </div>
                  <div className="h-[52px] flex items-center justify-center w-1/2">
                    <div className="h-[28px] w-[38px] text-white text-[20px]">
                      ( - )
                    </div>
                  </div>
                </div>
                <div className="flex mt-12 ">
                  <div className="h-[52px] text-white flex flex-col justify-center text-left w-1/2">
                    <p className="text-[14px] leading-[20px]">
                      Interactive Furniture Placement
                    </p>
                  </div>
                  <div className="h-[52px] flex items-center justify-center w-1/2">
                    <div className="h-[28px] w-[38px] text-white text-[20px]">
                      ( - )
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              containerTwo === ""
                ? "hidden"
                : containerTwo
                ? "w-full sm:w-[450px] bg-[#191919] animate-slide_up relative h-[400px] rounded-2xl"
                : "hidden"
            }
          >
            <div className="h-[76px] px-6 bg-[#4600B9] rounded-t-2xl min-w-full text-white flex items-center justify-between">
              <p className="text-[18px] leading-[28px]">ESSENTIAL</p>
              <div
                className="ml-3 flex h-7 items-center"
                data-v-123669ee=""
                onClick={() => setContainerTwo(false)}
              >
                <button
                  type="button"
                  className="rounded-md bg-propvrBlue text-propvrBlue hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                  tabindex="0"
                >
                  <span className="sr-only" data-v-123669ee="">
                    Close panel
                  </span>
                  <svg
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6 text-white focus:outline-none focus:ring-0"
                    data-v-123669ee=""
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                      data-v-123669ee=""
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="px-6 py-6 ">
              <div className="overflow-y-scroll h-[324px]">
                <div className="flex">
                  <div className="h-[52px] text-white flex flex-col justify-center text-left w-1/2">
                    <p className="text-[14px] leading-[20px]">
                      Virtual Sales Tool
                    </p>
                  </div>
                  <div className="h-[52px] flex items-center justify-center w-1/2">
                    <p className="text-[14px] leading-[20px] text-white">
                      Upto 30 users
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="h-[52px] text-white flex flex-col justify-center text-left w-1/2">
                    <p className="text-[14px] leading-[20px]">
                      Virtual Sales Tool
                    </p>
                  </div>
                  <div className="h-[52px] flex items-center justify-center w-1/2">
                    <div className="h-[28px] w-[28px]">
                      <img
                        src={tick}
                        alt=""
                        className="rounded-full h-full w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="h-[52px] text-white flex flex-col justify-center text-left w-1/2">
                    <p className="text-[14px] leading-[20px]">
                      Virtual Sales Tool
                    </p>
                  </div>
                  <div className="h-[52px] flex items-center justify-center w-1/2">
                    <div className="h-[28px] w-[28px]">
                      <img
                        src={tick}
                        alt=""
                        className="rounded-full h-full w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="h-[52px] text-white flex flex-col justify-center text-left w-1/2">
                    <p className="text-[14px] leading-[20px]">
                      Virtual Sales Tool
                    </p>
                  </div>
                  <div className="h-[52px] flex items-center justify-center w-1/2">
                    <div className="h-[28px] w-[28px]">
                      <img
                        src={tick}
                        alt=""
                        className="rounded-full h-full w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="h-[52px] text-white flex flex-col justify-center text-left w-1/2">
                    <p className="text-[14px] leading-[20px]">
                      Virtual Sales Tool
                    </p>
                  </div>
                  <div className="h-[52px] flex items-center justify-center w-1/2">
                    <div className="h-[28px] w-[28px]">
                      <img
                        src={tick}
                        alt=""
                        className="rounded-full h-full w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="h-[52px] text-white flex flex-col justify-center text-left w-1/2">
                    <p className="text-[14px] leading-[20px]">
                      Virtual Sales Tool
                    </p>
                  </div>
                  <div className="h-[52px] flex items-center justify-center w-1/2">
                    <div className="h-[28px] w-[28px]">
                      <img
                        src={tick}
                        alt=""
                        className="rounded-full h-full w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="h-[52px] text-white flex flex-col justify-center text-left w-1/2">
                    <p className="text-[14px] leading-[20px]">
                      Virtual Sales Tool
                    </p>
                  </div>
                  <div className="h-[52px] flex items-center justify-center w-1/2">
                    <div className="h-[28px] w-[28px]">
                      <img
                        src={tick}
                        alt=""
                        className="rounded-full h-full w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="h-[52px] text-white flex flex-col justify-center text-left w-1/2">
                    <p className="text-[14px] leading-[20px]">
                      Virtual Sales Tool
                    </p>
                  </div>
                  <div className="h-[52px] flex items-center justify-center w-1/2">
                    <div className="h-[28px] w-[28px]">
                      <img
                        src={tick}
                        alt=""
                        className="rounded-full h-full w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="h-[52px] text-white flex flex-col justify-center text-left w-1/2">
                    <p className="text-[14px] leading-[20px]">
                      Virtual Sales Tool
                    </p>
                  </div>
                  <div className="h-[52px] flex items-center justify-center w-1/2">
                    <div className="h-[28px] w-[28px]">
                      <img
                        src={tick}
                        alt=""
                        className="rounded-full h-full w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {basicPlan === true ? (
        <>
          <div className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto md:my-6 my-24 md:mt-0 mt-[350px] md:p-0 p-4 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 mt-[150px] rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-semibold text-[#4614B9]">
                    Essential
                  </h3>

                  <button
                    className="btn btn-circle btn-sm btn-outline  hover:bg-[#4614B9] p-1 ml-auto     text-black  hover:text-white float-right text-2xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => handleBasicPlanClose()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                {/*body*/}
                {/* create a dov with verical scroll  */}
                {/* <div className="relative overflow-y-scroll h-[70vh] md:w-[500px] w-[90%]  p-6 flex-auto">
                  <div className="flex  justify-between  ">
                    <div className="w-[67%] text-black font-semibold text-[13px]">
                      3D Modeling
                    </div>
                    <div className="w-[30%]">
                      <img src={tick} alt="" className="w-[20px] m-auto" />
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      Real-Time Rendering
                    </div>
                    <div className="w-[30%]">
                      <img src={tick} alt="" className="w-[20px] m-auto" />
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      Augmented Reality(AR) View (AR floorplans and Project
                      Visualization)
                    </div>
                    <div className="w-[30%]">
                      <img src={tick} alt="" className="w-[20px] m-auto" />
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      360-Degree Views
                    </div>
                    <div className="w-[30%]">
                      <img src={tick} alt="" className="w-[30px] m-auto" />
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      Isometric Floor Plan View (See Your Dream Place from
                      Above)
                    </div>
                    <div className="w-[30%]">
                      <img src={tick} alt="" className="w-[30px] m-auto" />
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      360 Virtual Tour Of Interiors (Take a Virtual Stroll
                      Through Our Interiors with 360 Virtual Tour)
                    </div>
                    <div className="w-[30%]">
                      <img src={tick} alt="" className="w-[30px] m-auto  " />
                      <div className="text-[#222] text-[13px]">(2 elements plans)</div>
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      360 Virtual Tour Of Interiors (Take a Virtual Stroll
                      Through Our Interiors with 360 Virtual Tour)
                    </div>
                    <div className="w-[30%]">
                      <img src={tick} alt="" className="w-[30px] m-auto  " />
                      <div className="text-[#222] text-[13px]">(2 elements plans)</div>
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      Amenities 3D Renders And 360 Renders (Discover the
                      Amenities in Stunning Detail with 3D Renders and 360
                      Views)
                    </div>
                    <div className="w-[30%]">
                      <img src={tick} alt="" className="w-[30px] m-auto  " />
                      <div className="text-[#222] text-[13px]">(1 element plan)</div>
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      Touchscreen Support (Tablet, Smart Screens, Mobile,
                      Desktops, and Laptops)
                    </div>
                    <div className="w-[30%]">
                      <img src={tick} alt="" className="w-[30px] m-auto  " />
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      Advertisement(OPTIONAL) (Digital Marketing)
                    </div>
                    <div className="w-[30%]">
                      <img src={tick} alt="" className="w-[30px] m-auto  " />
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      Balcony Views From Different Floors (Step onto the Balcony
                      with a Click)
                    </div>
                    <div className="w-[30%]">
                      <img src={tick} alt="" className="w-[30px] m-auto  " />
                      <div className="text-[#222] text-[13px] text-center">
                        (Any 1 Floor)
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      Project Walkthrough Video (A guided video tour of the
                      space)
                    </div>
                    <div className="w-[30%]">
                      <img src={tick} alt="" className="w-[30px] m-auto  " />
                      <div className="text-[#222] text-[13px] text-center">
                        (Only Exterior + Any 1 Amenity Included)
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      Exterior And Interior Images (High-resolution Images for
                      promotional materials)
                    </div>
                    <div className="w-[30%]">
                      <img src={tick} alt="" className="w-[30px] m-auto  " />
                      <div className="text-[#222] text-[13px] text-center">
                        (Only Exterior + No Amenity Included)
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      Scene Modifications/ Edits
                    </div>
                    <div className="w-[30%] text-center text-black">
                       3 - Free
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      Custom Website (OPTIONAL) (Unleash Your Creativity with a
                      Custom Website Designed)
                    </div>
                    <div className="w-[30%] text-center font-bold text-black">
                      ( - )
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      Branding (Custom Logo/Information Add-ons)
                    </div>
                    <div className="w-[30%] text-center font-bold text-black">
                      ( - )
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      Complete Project 3D (See Every Detail of Our Project Come
                      to Life in 3D)
                    </div>
                    <div className="w-[30%] text-center font-bold text-black">
                      ( - )
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      Virtual Reality Viewing (Headset/Oculus support)
                    </div>
                    <div className="w-[30%] text-center font-bold text-black">
                      ( - )
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      Complete Amenities 3D (Immersive 3D Amenities View)
                    </div>
                    <div className="w-[30%] text-center font-bold text-black">
                      ( - )
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      Customizable Furniture and Finishes
                    </div>
                    <div className="w-[30%] text-center font-bold text-black">
                      ( - )
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      Customizable Lighting
                    </div>
                    <div className="w-[30%] text-center font-bold text-black">
                      ( - )
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      Interactive Furniture Placement
                    </div>
                    <div className="w-[30%] text-center font-bold text-black">
                      ( - )
                    </div>
                  </div>
                </div> */}
                {/*footer*/}
                <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-600  border hover:border hover:border-rose-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleBasicPlanClose()}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      {premiumPlan === true ? (
        <>
          <div className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto md:my-6 my-24 md:mt-0 mt-[350px] md:p-0 p-4 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 mt-[150px] rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-semibold text-[#4614B9]">
                    Premium Plan
                  </h3>

                  <button
                    className="btn btn-circle btn-sm btn-outline  hover:bg-[#4614B9] p-1 ml-auto     text-black  hover:text-white float-right text-2xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => handlePremiumPlanClose()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                {/*body*/}
                {/* create a dov with verical scroll  */}
                {/* <div className="relative overflow-y-scroll h-[70vh] md:w-[500px] w-[90%]  p-6 flex-auto">
                  <div className="flex  justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      3D Modeling
                    </div>
                    <div className="w-[30%]">
                      <img src={tick} alt="" className="w-[30px] m-auto" />
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      Real-Time Rendering
                    </div>
                    <div className="w-[30%]">
                      <img src={tick} alt="" className="w-[30px] m-auto" />
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      Augmented Reality(AR) View (AR floorplans and Project
                      Visualization)
                    </div>
                    <div className="w-[30%]">
                      <img src={tick} alt="" className="w-[30px] m-auto" />
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      360-Degree Views
                    </div>
                    <div className="w-[30%]">
                      <img src={tick} alt="" className="w-[30px] m-auto" />
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      Isometric Floor Plan View (See Your Dream Place from
                      Above)
                    </div>
                    <div className="w-[30%]">
                      <img src={tick} alt="" className="w-[30px] m-auto" />
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      360 Virtual Tour Of Interiors (Take a Virtual Stroll
                      Through Our Interiors with 360 Virtual Tour)
                    </div>
                    <div className="w-[30%]">
                      <img src={tick} alt="" className="w-[30px] m-auto  " />
                      <div className="text-[#222] text-[13px] text-center ">
                        All elements
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      360 Virtual Tour Of Interiors (Take a Virtual Stroll
                      Through Our Interiors with 360 Virtual Tour)
                    </div>
                    <div className="w-[30%]">
                      <img src={tick} alt="" className="w-[30px] m-auto  " />
                      <div className="text-[#222] text-[13px] text-center ">
                        All elements
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      Amenities 3D Renders And 360 Renders (Discover the
                      Amenities in Stunning Detail with 3D Renders and 360
                      Views)
                    </div>
                    <div className="w-[30%]">
                      <img src={tick} alt="" className="w-[30px] m-auto  " />
                      <div className="text-[#222] text-[13px] text-center ">
                        All elements
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      Touchscreen Support (Tablet, Smart Screens, Mobile,
                      Desktops, and Laptops)
                    </div>
                    <div className="w-[30%]">
                      <img src={tick} alt="" className="w-[30px] m-auto  " />
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      Advertisement(OPTIONAL) (Digital Marketing)
                    </div>
                    <div className="w-[30%]">
                      <img src={tick} alt="" className="w-[30px] m-auto  " />
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      Balcony Views From Different Floors (Step onto the Balcony
                      with a Click)
                    </div>
                    <div className="w-[30%]">
                      <img src={tick} alt="" className="w-[30px] m-auto  " />
                      <div className="text-[#222] text-[13px] text-center">
                        (All Floors)
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      Project Walkthrough Video (A guided video tour of the
                      space)
                    </div>
                    <div className="w-[30%]">
                      <img src={tick} alt="" className="w-[30px] m-auto  " />
                      <div className="text-[#222] text-[13px] text-center">
                        (All Exterior and Interiors + All Amenities Included)
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                    (All Exterior and Interiors
+ All Amenities Included)
                    </div>
                    <div className="w-[30%]">
                      <img src={tick} alt="" className="w-[30px] m-auto  " />
                      <div className="text-[#222] text-[13px] text-center">
                        (Only Exterior + No Amenity Included)
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      Scene Modifications/ Edits
                    </div>
                    <div className="w-[30%] text-center text-black">
                      6 - Free
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      Custom Website (OPTIONAL) (Unleash Your Creativity with a
                      Custom Website Designed)
                    </div>
                    <div className="w-[30%] text-center font-bold text-black">
                      <img src={tick} alt="" className="w-[30px] m-auto" />
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      Branding (Custom Logo/Information Add-ons)
                    </div>
                    <div className="w-[30%] text-center font-bold text-black">
                      <img src={tick} alt="" className="w-[30px] m-auto" />
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      Complete Project 3D (See Every Detail of Our Project Come
                      to Life in 3D)
                    </div>
                    <div className="w-[30%] text-center font-bold text-black">
                      <img src={tick} alt="" className="w-[30px] m-auto" />
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      Virtual Reality Viewing (Headset/Oculus support)
                    </div>
                    <div className="w-[30%] text-center font-bold text-black">
                      <img src={tick} alt="" className="w-[30px] m-auto" />
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      Complete Amenities 3D (Immersive 3D Amenities View)
                    </div>
                    <div className="w-[30%] text-center font-bold text-black">
                      <img src={tick} alt="" className="w-[30px] m-auto" />
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      Customizable Furniture and Finishes
                    </div>
                    <div className="w-[30%] text-center font-bold text-black">
                      <img src={tick} alt="" className="w-[30px] m-auto" />
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      Customizable Lighting
                    </div>
                    <div className="w-[30%] text-center font-bold text-black">
                      <img src={tick} alt="" className="w-[30px] m-auto" />
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      Interactive Furniture Placement
                    </div>
                    <div className="w-[30%] text-center font-bold text-black">
                      <img src={tick} alt="" className="w-[30px] m-auto" />
                    </div>
                  </div>
                </div> */}
                {/*footer*/}
                <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-600  border hover:border hover:border-rose-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handlePremiumPlanClose()}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Pricing;
