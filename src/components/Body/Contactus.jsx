import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ct from "../Assets/Images/ctc.png";
import Messages from "./Messages";
import { toast } from "react-toastify";
import axios from "axios";
import { API } from "../Constant/API";
function Contactus() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToTop();
  }, []);

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
    <div className="bg-black  ">
      <div className="md:pb-48 pb-36">
        <Header />
      </div>
      <>
        <div className="text-center md:text-[35px] text-[22px] md:p-0 p-4 text-white font-semibold w-full ">
          Contact with us for more information
        </div>
        <div
          className="md:max-w-[1200px] w-[90%]  mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto
         bg-[#060606] text-white rounded-none shadow-lg"
        >
          <div className="flex flex-col  justify-evenly">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Lets talk about everything!
              </h2>
              <div className="text-[#d7d7d7] mt-8">
                Hate forms? Send us an <span className="underline">email</span>{" "}
                instead.
              </div>
            </div>

            <div className="flex justify-center items-center mt-8">
              <img src={ct} alt="" />
            </div>
          </div>
          <div className="">
            <div>
              <span className="uppercase text-sm text-white font-bold">
                Full Name
              </span>
              <input
                className="w-full bg-gray-400 text-black  font-bold mt-2 p-3 rounded-none focus:outline-none focus:shadow-outline"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-white font-bold">
                Email
              </span>
              <input
                className=" w-full bg-gray-400 text-black  font-bold mt-2 p-3 rounded-none focus:outline-none focus:shadow-outline"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-white font-bold">
                Phone Number
              </span>
              <input
                className=" w-full bg-gray-400 text-black  font-bold mt-2 p-3 rounded-none focus:outline-none focus:shadow-outline"
                type="text"
                value={phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
              />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-white font-bold">
                Date
              </span>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-gray-400 text-black  font-bold mt-2 p-3 rounded-none focus:outline-none focus:shadow-outline"
              />
            </div>
            {/* input type for date & time picker  */}
            <div className="mt-8">
              <span className="uppercase text-sm text-white font-bold">
                Time
              </span>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full bg-gray-400 text-black  font-bold mt-2 p-3 rounded-none focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mt-8">
              <span className="uppercase text-sm text-white font-bold">
                Message
              </span>
              <textarea
                className="w-full h-32 bg-gray-400 text-black  font-bold mt-2 p-3 rounded-none focus:outline-none focus:shadow-outline"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="mt-8">
              <button
                onClick={handleSubmit}
                className="btn border-none uppercase text-sm font-bold tracking-wide bg-[#4614B9] text-gray-100 p-3 rounded-none w-full focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </>

      <div>
        <Footer className="mt-0" />
      </div>
    </div>
  );
}

export default Contactus;
