import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import wal from "../Assets/video/wal4.mp4";
import Messages from "./Messages";
function Metaverse() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div className="bg-[#000000]">
      <div>
        <Header />
      </div>
      <div className="md:flex items-center md:w-[80%] w-[90%] m-auto pt-44 pb-12">
        <div className="md:w-[50%] w-[90%] md:m-0 m-auto">
          <div className="font-extralight text-white text-[55px]">
            We create Immersive Metaverse Experiences
          </div>
          <div className="md:mt-8 mt-4">
            <button className="btn rounded-md bg-[#4614B9] hover:bg-[#4614B9] text-white">
              Learn More
            </button>
          </div>
          <div className="md:flex md:mt-8 mt-4 items-center ">
            <div className=" md:w-1/3 w-full">
              <div className="font-bold text-white text-[25px]">500+</div>
              <div className="font-semibold text-[#d7d7d7] ">
                Projects Delivered
              </div>
            </div>
            <div className=" md:w-1/3 w-full">
              <div className="font-bold text-white text-[25px]"> 50+</div>
              <div className="font-semibold text-[#d7d7d7] ">
                Ongoing Projects
              </div>
            </div>
            <div className=" md:w-1/3 w-full">
              <div className="font-bold text-white text-[25px]"> 10+</div>
              <div className="font-semibold text-[#d7d7d7] ">Countries</div>
            </div>
          </div>
        </div>
        <div className="md:w-[50%] md:pt-0 pt-12 w-[90%] md:m-0 m-auto">
          <img
            src="https://miro.medium.com/max/1400/1*BUnGEQT03iTgw_hVgIlOcw.gif"
            className="rounded-lg"
            alt="metaverse"
          />
        </div>
      </div>
      <div className=" md:w-[80%] w-[90%] m-auto pt-18 pb-12">
        <div className="md:p-8 p-2 text-center">
          <div className="font-extralight text-white md:text-[55px] text-[30px]">
            The Real Estate Metaverse
          </div>
          <div>
            <p className="mt-4 text-[#d7d7d7] ">
              Building the future of real estate search and discovery platform
              for Dubai
            </p>
          </div>
          <div className="p-6 mt-8">
            <video className="mt-4" controls>
              <source src={wal} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div>
        <Messages />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Metaverse;
