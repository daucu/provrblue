import React, { useState } from "react";
import dot2 from "../Assets/Images/dot2.webp";
import tick from "../Assets/Images/tick.webp";

function Pricing() {
  const [basicPlan, setBasicPlan] = useState(false);
  const [premiumPlan, setPremiumPlan] = useState(false);

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
      <div
        // style={{ backgroundImage: `url(${dot2})` }}
        className="bg-contain    mt-16  bg-[#000000]  flex flex-wrap items-center  justify-center"
      >
        <div className="md:flex items-center ">
          <div className="p-4 w-[400px]   m-4 border-2 hover:border-[#4614B9] hover:border-2 bg-zinc-100 rounded-md">
            <div className="text-[#4614B9] text-center text-[25px] font-bold">
              Essential
            </div>
            <div className="mt-8 flex justify-center">
              <button className="btn w-full">Book a Demo</button>
            </div>
            

            <div className="relative    w-[96%] m-auto  py-8 flex-auto">
              <div className="flex  justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  3D Modeling
                </div>
                <div className="w-[30%]">
                  <img src={tick} alt="" className="w-[20px] m-auto" />
                </div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  Real-Time Rendering
                </div>
                <div className="w-[30%]">
                  <img src={tick} alt="" className="w-[20px] m-auto" />
                </div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  Augmented Reality(AR) View (AR floorplans and Project
                  Visualization)
                </div>
                <div className="w-[30%]">
                  <img src={tick} alt="" className="w-[20px] m-auto" />
                </div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  360-Degree Views
                </div>
                <div className="w-[30%]">
                  <img src={tick} alt="" className="w-[20px] m-auto" />
                </div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  Isometric Floor Plan View (See Your Dream Place from Above)
                </div>
                <div className="w-[30%]">
                  <img src={tick} alt="" className="w-[20px] m-auto" />
                </div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  360 Virtual Tour Of Interiors (Take a Virtual Stroll Through
                  Our Interiors with 360 Virtual Tour)
                </div>
                <div className="w-[30%]">
                  <img src={tick} alt="" className="w-[20px] m-auto  " />
                  <div className="text-[#222]">(2 elements plans)</div>
                </div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  360 Virtual Tour Of Interiors (Take a Virtual Stroll Through
                  Our Interiors with 360 Virtual Tour)
                </div>
                <div className="w-[30%]">
                  <img src={tick} alt="" className="w-[20px] m-auto  " />
                  <div className="text-[#222]">(2 elements plans)</div>
                </div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  Amenities 3D Renders And 360 Renders (Discover the Amenities
                  in Stunning Detail with 3D Renders and 360 Views)
                </div>
                <div className="w-[30%]">
                  <img src={tick} alt="" className="w-[20px] m-auto  " />
                  <div className="text-[#222]">(1 element plan)</div>
                </div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  Touchscreen Support (Tablet, Smart Screens, Mobile, Desktops,
                  and Laptops)
                </div>
                <div className="w-[30%]">
                  <img src={tick} alt="" className="w-[20px] m-auto  " />
                </div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  Advertisement(OPTIONAL) (Digital Marketing)
                </div>
                <div className="w-[30%]">
                  <img src={tick} alt="" className="w-[20px] m-auto  " />
                </div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  Balcony Views From Different Floors (Step onto the Balcony
                  with a Click)
                </div>
                <div className="w-[30%]">
                  <img src={tick} alt="" className="w-[20px] m-auto  " />
                  <div className="text-[#222] text-center">(Any 1 Floor)</div>
                </div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  Project Walkthrough Video (A guided video tour of the space)
                </div>
                <div className="w-[30%]">
                  <img src={tick} alt="" className="w-[20px] m-auto  " />
                  <div className="text-[#222] text-center">
                    (Only the Exterior + Any 1 Amenity Included)
                  </div>
                </div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  Exterior And Interior Images (High-resolution Images for
                  promotional materials)
                </div>
                <div className="w-[30%]">
                  <img src={tick} alt="" className="w-[20px] m-auto  " />
                  <div className="text-[#222] text-center">
                    (Only the Exterior + No Amenity Included in it)
                  </div>
                </div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  Scene Modifications/ Edits
                </div>
                <div className="w-[30%] text-center text-black">3 - Free</div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  Custom Website (OPTIONAL) (Unleash Your Creativity with a
                  Custom Website Designed)
                </div>
                <div className="w-[30%] text-center font-bold text-black">
                  ( - )
                </div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  Branding (Custom Logo/Information Add-ons)
                </div>
                <div className="w-[30%] text-center font-bold text-black">
                  ( - )
                </div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  Complete Project 3D (See Every Detail of Our Project Come to
                  Life in 3D)
                </div>
                <div className="w-[30%] text-center font-bold text-black">
                  ( - )
                </div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  Virtual Reality Viewing (Headset/Oculus support)
                </div>
                <div className="w-[30%] text-center font-bold text-black">
                  ( - )
                </div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  Complete Amenities 3D (Immersive 3D Amenities View)
                </div>
                <div className="w-[30%] text-center font-bold text-black">
                  ( - )
                </div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  Customizable Furniture and Finishes
                </div>
                <div className="w-[30%] text-center font-bold text-black">
                  ( - )
                </div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  Customizable Lighting
                </div>
                <div className="w-[30%] text-center font-bold text-black">
                  ( - )
                </div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  Interactive Furniture Placement
                </div>
                <div className="w-[30%] text-center font-bold text-black">
                  ( - )
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-center">
              <button
                className="btn bg-[#4614B9] cursor-pointer hover:bg-[#4614B9] text-white border-none w-full"
                // onClick={() => handleBasicPlanOpen()}
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="p-4 w-[400px]    m-4 border-2 hover:border-[#4614B9] hover:border-2 bg-zinc-100 rounded-md">
            <div className="text-[#4614B9] text-center text-[25px] font-bold">
              Premium Plan
            </div>
            <div className="mt-8 flex justify-center">
              <button className="btn w-full">Book a Demo</button>
            </div>
            

            <div className="relative    w-[96%] m-auto  py-8 flex-auto">
              <div className="flex  justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  3D Modeling
                </div>
                <div className="w-[30%]">
                  <img src={tick} alt="" className="w-[20px] m-auto" />
                </div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  Real-Time Rendering
                </div>
                <div className="w-[30%]">
                  <img src={tick} alt="" className="w-[20px] m-auto" />
                </div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  Augmented Reality(AR) View (AR floorplans and Project
                  Visualization)
                </div>
                <div className="w-[30%]">
                  <img src={tick} alt="" className="w-[20px] m-auto" />
                </div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  360-Degree Views
                </div>
                <div className="w-[30%]">
                  <img src={tick} alt="" className="w-[20px] m-auto" />
                </div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  Isometric Floor Plan View (See Your Dream Place from Above)
                </div>
                <div className="w-[30%]">
                  <img src={tick} alt="" className="w-[20px] m-auto" />
                </div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  360 Virtual Tour Of Interiors (Take a Virtual Stroll Through
                  Our Interiors with 360 Virtual Tour)
                </div>
                <div className="w-[30%]">
                  <img src={tick} alt="" className="w-[20px] m-auto  " />
                  <div className="text-[#222]">All Elements</div>
                </div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  360 Virtual Tour Of Interiors (Take a Virtual Stroll Through
                  Our Interiors with 360 Virtual Tour)
                </div>
                <div className="w-[30%]">
                  <img src={tick} alt="" className="w-[20px] m-auto  " />
                  <div className="text-[#222]">All Elements</div>
                </div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  Amenities 3D Renders And 360 Renders (Discover the Amenities
                  in Stunning Detail with 3D Renders and 360 Views)
                </div>
                <div className="w-[30%]">
                  <img src={tick} alt="" className="w-[20px] m-auto  " />
                  <div className="text-[#222] text-center">All Element</div>
                </div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  Touchscreen Support (Tablet, Smart Screens, Mobile, Desktops,
                  and Laptops)
                </div>
                <div className="w-[30%]">
                  <img src={tick} alt="" className="w-[20px] m-auto  " />
                </div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  Advertisement(OPTIONAL) (Digital Marketing)
                </div>
                <div className="w-[30%]">
                  <img src={tick} alt="" className="w-[20px] m-auto  " />
                </div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  Balcony Views From Different Floors (Step onto the Balcony
                  with a Click)
                </div>
                <div className="w-[30%]">
                  <img src={tick} alt="" className="w-[20px] m-auto  " />
                  <div className="text-[#222] text-center">(All Floors)</div>
                </div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  Project Walkthrough Video (A guided video tour of the space)
                </div>
                <div className="w-[30%]">
                  <img src={tick} alt="" className="w-[20px] m-auto  " />
                  <div className="text-[#222] text-center">
                    (All Exterior + All the Amenity Included)
                  </div>
                </div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  Exterior And Interior Images (High-resolution Images for
                  promotional materials)
                </div>
                <div className="w-[30%]">
                  <img src={tick} alt="" className="w-[20px] m-auto  " />
                  <div className="text-[#222] text-center">
                    (All Exterior + All the Amenity Included)
                  </div>
                </div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  Scene Modifications/ Edits
                </div>
                <div className="w-[30%] text-center text-black">6 - Free</div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  Custom Website (OPTIONAL) (Unleash Your Creativity with a
                  Custom Website Designed)
                </div>
                <div className="w-[30%] text-center font-bold text-black">
                  <img src={tick} alt="" className="w-[20px] m-auto  " />
                </div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  Branding (Custom Logo/Information Add-ons)
                </div>
                <div className="w-[30%] text-center font-bold text-black">
                  <img src={tick} alt="" className="w-[20px] m-auto  " />
                </div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  Complete Project 3D (See Every Detail of Our Project Come to
                  Life in 3D)
                </div>
                <div className="w-[30%] text-center font-bold text-black">
                  <img src={tick} alt="" className="w-[20px] m-auto  " />
                </div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  Virtual Reality Viewing (Headset/Oculus support)
                </div>
                <div className="w-[30%] text-center font-bold text-black">
                  <img src={tick} alt="" className="w-[20px] m-auto  " />
                </div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  Complete Amenities 3D (Immersive 3D Amenities View)
                </div>
                <div className="w-[30%] text-center font-bold text-black">
                  <img src={tick} alt="" className="w-[20px] m-auto  " />
                </div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  Customizable Furniture and Finishes
                </div>
                <div className="w-[30%] text-center font-bold text-black">
                  <img src={tick} alt="" className="w-[20px] m-auto  " />
                </div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  Customizable Lighting
                </div>
                <div className="w-[30%] text-center font-bold text-black">
                  <img src={tick} alt="" className="w-[20px] m-auto  " />
                </div>
              </div>
              <div className="flex mt-4 justify-between  ">
                <div className="w-[67%] text-black font-semibold text-[15px]">
                  Interactive Furniture Placement
                </div>
                <div className="w-[30%] text-center font-bold text-black">
                  <img src={tick} alt="" className="w-[20px] m-auto  " />
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-center">
              <button
                className="btn bg-[#4614B9] cursor-pointer hover:bg-[#4614B9] text-white border-none w-full"
                // onClick={() => handleBasicPlanOpen()}
              >
                Get Started
              </button>
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
                    <div className="w-[67%] text-black font-semibold text-[15px]">
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
                      <div className="text-[#222]">(2 elements plans)</div>
                    </div>
                  </div>
                  <div className="flex mt-4 justify-between  ">
                    <div className="w-[67%] text-black font-semibold">
                      360 Virtual Tour Of Interiors (Take a Virtual Stroll
                      Through Our Interiors with 360 Virtual Tour)
                    </div>
                    <div className="w-[30%]">
                      <img src={tick} alt="" className="w-[30px] m-auto  " />
                      <div className="text-[#222]">(2 elements plans)</div>
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
                      <div className="text-[#222]">(1 element plan)</div>
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
                      <div className="text-[#222] text-center">
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
                      <div className="text-[#222] text-center">
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
                      <div className="text-[#222] text-center">
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
                      <div className="text-[#222] text-center ">
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
                      <div className="text-[#222] text-center ">
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
                      <div className="text-[#222] text-center ">
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
                      <div className="text-[#222] text-center">
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
                      <div className="text-[#222] text-center">
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
                      <div className="text-[#222] text-center">
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
