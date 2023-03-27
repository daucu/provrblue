import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import dot2 from "../Assets/Images/dot2.webp";
import { API } from "../Constant/API";

function Messages() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

  const handleSubmit = (e) => {
    if (
      name === "" ||
      email === "" ||
      date === "" ||
      time === "" ||
      phonenumber === "" ||
      message === ""
    ) {
      toast.error("Please fill all the fields");
    } else {
      axios
        .post(`${API}/contactus`, {
          name,
          email,
          date,
          time,
          phonenumber,
          message,
        })
        .then((res) => {
          console.log(res);
          toast.success("Message sent successfully");
          setName("");
          setEmail("");
          setDate("");
          setTime("");
          setPhonenumber("");
          setMessage("");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Something went wrong");
        });
    }
  };

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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-[50%] ml-8  ">
                    <div className="text-white font-semibold mb-1">Email</div>
                    <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="input input-bordered w-full rounded-none   bg-[#191919] "
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={phonenumber}
                        onChange={(e) => setPhonenumber(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex md:w-[90%] w-full  m-auto pt-8 justify-start">
                  <div className="w-full   ">
                    <div className="text-white font-semibold mb-1">Time</div>
                    <div>
                      <input
                        type="date"
                        name=""
                        id=""
                        className="input input-bordered w-full rounded-none  bg-[#191919] "
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex md:w-[90%] w-full  m-auto pt-8 justify-start">
                  <div className="w-full   ">
                    <div className="text-white font-semibold mb-1">Time</div>
                    <div>
                      <input
                        type="time"
                        name=""
                        id=""
                        className="input input-bordered w-full rounded-none  bg-[#191919] "
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
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
                        className=" p-2 font-semibold text-[20px] input-bordered w-full  bg-[#191919] "
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex w-[90%]  md:m-auto  justify-start">
                  <button
                    onClick={handleSubmit}
                    className="btn btn-primary mt-8 font-semibold text-[17px]"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:mt-32 mt-12 bg-[#0F0F0F] shadow-lg rounded-2xl px-6 py-14">
          <div className="md:flex items-center justify-between">
            <div className="md:w-[30%]">
              <div className="font-normal text-white text-[18px]">
                Let's turn your project into a masterpiece!
              </div>
              <div className="font-normal mt-8 text-white text-[17px]">
                <button className="btn bg-[#661CE6] hover:bg-[#EA2B42] text-[20px] text-white font-semibold">
                  Talk to Us
                </button>
              </div>
            </div>
            <div className="md:w-[65%] ">
              <div className="md:flex md:mt-0 mt-6">
                <div className="md:w-[33%]  mt:mt-0 mt-4  w-full flex items-center  ">
                  <div className="w-[50px] h-[50px]  bg-[#191919] rounded-xl  mr-4"></div>
                  <div className="text-[white] font-extralight text-[20px] ">
                    3D Walkthroughs
                  </div>
                </div>
                <div className="md:w-[33%]  mt:mt-0 mt-4  w-full flex items-center  ">
                  <div className="w-[50px] h-[50px]  bg-[#191919] rounded-xl  mr-4"></div>
                  <div className="text-[white] font-extralight text-[20px] ">
                    Virtual Reality
                  </div>
                </div>
                <div className="md:w-[33%]  mt:mt-0 mt-4  w-full flex items-center  ">
                  <div className="w-[50px] h-[50px]  bg-[#191919] rounded-xl  mr-4"></div>
                  <div className="text-[white] font-extralight text-[20px] ">
                    Virtual Reality
                  </div>
                </div>
              </div>
              <div className="md:flex">
                <div className="md:w-[33%]   mt-4 w-full flex items-center  ">
                  <div className="w-[50px] h-[50px]  bg-[#191919] rounded-xl  mr-4"></div>
                  <div className="text-[white] font-extralight text-[20px] ">
                    Metaverse
                  </div>
                </div>
                <div className="md:w-[33%]  mt:mt-0 mt-4  w-full flex items-center  ">
                  <div className="w-[50px] h-[50px]  bg-[#191919] rounded-xl  mr-4"></div>
                  <div className="text-[white] font-extralight text-[20px] ">
                    Spaces
                  </div>
                </div>
                <div className="md:w-[33%]  mt:mt-0 mt-4  w-full flex items-center  ">
                  <div className="w-[50px] h-[50px]  bg-[#191919] rounded-xl  mr-4"></div>
                  <div className="text-[white] font-extralight text-[20px] ">
                    Marketing
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

export default Messages;
