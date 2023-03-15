import React, { useState } from "react";
import dot2 from "../Assets/Images/dot2.webp";

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
          <div className="md:mt-2 mt-6   m-auto text-white text-[19px] text-left ">
            Essential and Advanced, choose the suitable plan of your choice
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${dot2})` }}
        className="bg-contain    mt-16  bg-[#000000]  flex flex-wrap items-center  justify-center"
      >
        <div className="md:flex items-center ">
          <div className="p-4 w-[270px] m-4 border-2 hover:border-[#4614B9] hover:border-2 bg-zinc-100 rounded-md">
            <div className="text-[#4614B9] text-center text-[25px] font-bold">
              Essential
            </div>
            <div className="mt-8 flex justify-center">
              <button className="btn w-full">Book a Demo</button>
            </div>
            <div className="mt-4 flex justify-center">
              <button className="btn bg-[#4614B9] hover:bg-[#4614B9] text-white border-none w-full">
                View Essential demo
              </button>
            </div>
            <div className="mt-4 flex  w-[90%] m-auto text-justify text-black font-bold text-[18px]  justify-center">
              You can check all the specifications of the plans by clicking on
              the button below
            </div>
            <div className="mt-4 flex justify-center">
              <button
                className="btn bg-[#4614B9] cursor-pointer hover:bg-[#4614B9] text-white border-none w-full"
                onClick={() => handleBasicPlanOpen()}
              >
                View Details
              </button>
            </div>
          </div>
          <div className="p-4 w-[270px]  m-4 border-2 hover:border-[#4614B9] hover:border-2 bg-zinc-100 rounded-md">
            <div className="text-[#4614B9] text-center text-[25px] font-bold">
              Premium Plan
            </div>
            <div className="mt-8 flex justify-center">
              <button className="btn w-full">Book a Demo</button>
            </div>
            <div className="mt-4 flex justify-center">
              <button className="btn bg-[#4614B9] hover:bg-[#4614B9] text-white border-none w-full">
                View Essential demo
              </button>
            </div>
            <div className="mt-4 flex  w-[90%] m-auto text-justify text-black font-bold text-[18px]  justify-center">
              You can check all the specifications of the plans by clicking on
              the button below
            </div>
            <div className="mt-4 flex justify-center">
              <button
                className="btn bg-[#4614B9] cursor-pointer  hover:bg-[#4614B9] text-white border-none w-full"
                onClick={() => handlePremiumPlanOpen()}
              >
                View Details
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
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Update Password</h3>

                  <button className="btn btn-circle btn-sm btn-outline  hover:bg-[#05232A] p-1 ml-auto     text-black  float-right text-2xl leading-none font-semibold outline-none focus:outline-none">
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
                <div className="relative overflow-y-scroll h-[70vh] md:w-[500px] w-[90%]  p-6 flex-auto">  
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
              aslkdjasdjasldaslda
                   </div> 
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-600  border hover:border hover:border-rose-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      {premiumPlan === true ? <>Hlo</> : null}
    </div>
  );
}

export default Pricing;
