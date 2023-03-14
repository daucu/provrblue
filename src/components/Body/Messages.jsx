import React from "react";
import dot2 from "../Assets/Images/dot2.webp";

function Messages() {
  return (
    <div className="md:mt-52 mt-12">
      <div
        className="bg-cover  bg-no-repeat bg-left w"
        style={{
          backgroundImage: `url(${dot2})`,
          backgroundSize: "30%",
          backgroundPosition: "left",
          height: "100vh",
          padding: "10% 5%",
        }}
      >
        <div className="md:w-[85%]  w-[95%] m-auto">
          <div className="md:flex items-center   ">
            <div className="md:w-[45%] w-full">
              <div className="text-white font-bold text-[35px] ">
                Send Us a Message
              </div>
              <div className="leading-8 text-white font-normal text-justify mt-6 text-[20px]">
                If you are interested in our product and want a demo or have any
                queries, please fill in the form, we will get in touch with you
                soon.
              </div>
              <div className="leading-10 text-white font-normal mt-6 text-[22px]">
                Contact us: +91 9962669121
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
                        className="input input-bordered w-full  bg-[#191919] "
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
                        className="input input-bordered w-full   bg-[#191919] "
                      />
                    </div>
                  </div>
                </div>
                <div className="flex md:w-[90%] w-full  m-auto pt-8 justify-start">
                  <div className="w-full   ">
                    <div className="text-white font-semibold mb-1">Phone Number</div>
                    <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="input input-bordered w-full  bg-[#191919] "
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
                        className="input input-bordered w-full  bg-[#191919] "
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
                <div  className="flex w-[90%]  md:m-auto  justify-start">
                  <button className="btn btn-primary mt-8 font-semibold text-[17px]">Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
