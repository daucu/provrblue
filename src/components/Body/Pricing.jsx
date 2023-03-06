import React from "react";
import dot2 from "../Assets/Images/dot2.webp";

function Pricing() {
  return (
    <div>
      {/* component */}
      <div className="md:w-[80%] w-[90%] m-auto  pt-28 flex justify-center">
        <div className=" m-auto">
          <div className="text-[35px] text-center font-semibold text-white">
            Product Plans
          </div>
          <div className="md:mt-2 mt-6   m-auto text-white text-[19px] text-left ">
            Essential and Advanced, choose the suitable plan of your choice
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${dot2})` }}
        className="bg-contain    mt-16  bg-[#000000]  flex flex-wrap items-center  justify-center"
      >
        <div className="flex flex-col  sm:flex-col lg:flex-row xl:flex-row md:flex-row justify-center items center   w-[90%]   ">
          <div className="py-12 sm:py-12 cursor-pointer hover:border-2 hover:border-[#4614B9] mr-6 border-2  md:py-6 lg:py-6 xl:py-20 px-16 w-full md:max-w-min sm:w-full bg-[#fbf3e8] rounded-md ">
            <h1 className="text-gray-500 font-semibold text-xl ">Basic</h1>
            <div className="text-center py-4 px-7">
              <h1 className="text-gray-700 text-4xl font-black">$199.00</h1>
              <p className="text-gray-500  mt-2">Monthely</p>
            </div>
            <div className="h-px bg-[#000000]" />
            <div className="text-center mt-3">
              <p className="text-sm text-gray-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <button className="btn w-full mt-6 mb-3 py-2 text-white font-semibold bg-gray-700 hover:shadow-xl duration-200 hover:bg-gray-800">
              Buy Now
            </button>
          </div>
          <div className="py-12 sm:py-12 md:mt-0 mt-4 cursor-pointer hover:border-2 hover:border-[#4614B9] border-2  md:py-6 lg:py-6 xl:py-20 px-16 w-full md:max-w-min sm:w-full bg-purple-500 transform scale-1 sm:scale-1 md:scale-105 lg:scale-105 xl:scale-105  shadow-none sm:shadow-none md:shadow-xl rounded-md lg:shadow-xl xl:shadow-xl">
            <h1 className="text-purple-200 font-semibold text-xl ">Pro</h1>
            <div className="text-center py-4 px-7">
              <h1 className="text-white text-4xl font-black">$399.00</h1>
              <p className="text-white text-opacity-50 mt-2">Monthely</p>
            </div>
            <div className="h-px bg-purple-400" />
            <div className="text-center mt-3">
              <p className="text-sm text-white text-opacity-80">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <button className="btn border-none w-full mt-6 mb-3 py-2 text-white font-semibold bg-purple-400 hover:shadow-xl duration-200 hover:bg-purple-800">
              Buy Now
            </button>
          </div>
          <div className="py-12 sm:py-12 md:mt-0 mt-4 cursor-pointer hover:border-2 hover:border-[#4614B9] md:ml-6 border-2  md:py-6 lg:py-6 xl:py-20 px-16 w-full md:max-w-min sm:w-full bg-[#fbf3e8] rounded-md ">
            <h1 className="text-gray-500 font-semibold text-xl ">Enterprise</h1>
            <div className="text-center py-4 px-7">
              <h1 className="text-gray-700 text-4xl font-black">$899.00</h1>
              <p className="text-gray-500  mt-2">Monthely</p>
            </div>
            <div className="h-px bg-gray-200" />
            <div className="text-center mt-3">
              <p className="text-sm text-gray-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <button className="btn w-full mt-6 mb-3 py-2 text-white font-semibold bg-gray-700 hover:shadow-xl duration-200 hover:bg-gray-800">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
