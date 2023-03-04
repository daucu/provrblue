import React from "react";
import dot2 from "../Assets/Images/dot2.webp";

function Messages() {
  return (
    <div className="mt-52">
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
        <div className="w-[85%] m-auto">
          <div className="flex items-center   ">
            <div className="w-[45%]">
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
            <div className="w-[55%] ml-12">
              <div className="  w-[95%]  m-auto  ">
                <div className="flex w-[90%]   m-auto  ">
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
                      Phone Number
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
                <div className="flex w-[90%]  m-auto pt-8 justify-start">
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
                <div className="flex w-[90%]  m-auto pt-8 justify-start">
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
                <div  className="flex w-[90%]  m-auto  justify-start">
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
