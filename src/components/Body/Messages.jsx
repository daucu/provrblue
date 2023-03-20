import React from "react";
import dot2 from "../Assets/Images/dot2.webp";

function Messages() {
  return (
    <div className="">
      <div
        className="bg-cover  bg-no-repeat bg-left w"
        style={{
          backgroundImage: `url(${dot2})`,
          backgroundSize: "30%",
          backgroundPosition: "left",

          padding: "5%",
        }}
      >
        <div className="md:w-[85%]  w-[95%] m-auto">
          <div className="md:flex items-center   ">
            <div className="md:w-[45%] w-full">
              <div className="text-white font-bold text-[35px] ">
                Get in touch
              </div>
              <div className="leading-8 text-white font-normal text-justify mt-6 text-[20px]">
                If you're curious about our product and would like a demo or
                have any questions, please fill out the form and we'll reach out
                to you shortly.
              </div>
              <div className="leading-10 text-white font-normal mt-6 text-[22px]">
                Ring-a-ding-ding: +91 9054772765
              </div>
              <div className="text-white font-bold mt-6 text-[27px] ">
                Let's turn your project into a masterpiece!
              </div>
              <div className="  text-white font-normal text-justify  text-[20px]">
                Talk to Us
              </div>
              <div className="  text-white font-normal text-justify  text-[16px]  ">
                1. Virtual Tours
              </div>
              <div className="  text-white font-normal text-justify  text-[16px]  ">
                2. 3D Walkthroughs
              </div>
              <div className="  text-white font-normal text-justify  text-[16px]  ">
                3. Virtual Reality/ Augmented Reality
              </div>
              <div className="  text-white font-normal text-justify  text-[16px]  ">
                4. Metaverse
              </div>
              <div className="  text-white font-normal text-justify  text-[16px]  ">
                5. Spaces
              </div>
              <div className="  text-white font-normal text-justify  text-[16px]  ">
                6. Marketing
              </div>
            </div>
            <div className="md:w-[55%] md:mt-0 mt-16 w-full md:ml-12">
              <div className="md:w-[95%] w-full  m-auto  ">
                <div className="flex md:w-[90%] w-full   m-auto  ">
                  <div className="w-[50%]">
                    <div className="text-white font-semibold mb-1">
                      First Name
                    </div>
                    <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="input input-bordered w-full rounded-none  bg-[#191919] "
                      />
                    </div>
                  </div>
                  <div className="w-[50%] ml-8  ">
                    <div className="text-white font-semibold mb-1">
                      Last name
                    </div>
                    <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="input input-bordered w-full rounded-none   bg-[#191919] "
                      />
                    </div>
                  </div>
                </div>
                <div className="flex md:w-[90%] w-full  m-auto pt-8 justify-start">
                  <div className="w-full   ">
                    <div className="text-white font-semibold mb-1">
                      Phone Number
                    </div>
                    <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="input input-bordered w-full rounded-none  bg-[#191919] "
                      />
                    </div>
                  </div>
                </div>
                <div className="flex md:w-[90%] w-full  m-auto pt-8 justify-start">
                  <div className="w-full   ">
                    <div className="text-white font-semibold mb-1">Email</div>
                    <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="input input-bordered w-full rounded-none  bg-[#191919] "
                      />
                    </div>
                  </div>
                </div>
                <div className="flex md:w-[90%] w-full  m-auto pt-8 justify-start">
                  <div className="w-full   ">
                    <div className="text-white font-semibold mb-1">Message</div>
                    <div>
                      <textarea
                        type="text"
                        name=""
                        rows={5}
                        id=""
                        className="rounded-md input-bordered w-full  bg-[#191919] "
                      />
                    </div>
                  </div>
                </div>
                <div className="flex w-[90%]  md:m-auto  justify-start">
                  <button className="btn btn-primary mt-8 font-semibold text-[17px]">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:mt-32 mt-12 bg-[#0F0F0F] shadow-lg rounded-2xl p-8">
            <div className="flex items-center">
              <div className="md:w-[40%]">
                <div className="font-normal text-white text-[18px]">
                  Let's turn your project into a masterpiece!
                </div>
                <div className="font-normal mt-8 text-white text-[17px]">
                   <button className="btn bg-[#661CE6] hover:bg-[#EA2B42] text-[20px] text-white font-semibold">Talk to Us</button>
                </div>
              </div>
              <div className="md:w-[60%]">s</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
