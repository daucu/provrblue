import React, { useEffect } from "react";
import Header from "../Header/Header";
import smart1 from "../Assets/Images/samrt1.webp";
import sm2 from "../Assets/Images/sm2.webp";
import sm3 from "../Assets/Images/sm3.webp";
import tc1 from "../Assets/Images/tc1.webp";
import tc2 from "../Assets/Images/tc2.webp";
import tc3 from "../Assets/Images/tc3.webp";
import vr1 from "../Assets/Images/vr1.webp";
import vr2 from "../Assets/Images/vr2.webp";
import vr3 from "../Assets/Images/vr3.webp";
import dotted from "../Assets/Images/dotted.webp";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../Footer/Footer";
import { Autoplay, Pagination } from "swiper";
import Messages from "./Messages";
function Spaces() {
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
    <div className="bg-black ">
      <div className="md:pb-40  pb-36">
        <Header />
      </div>
       
      <div className="md:w-[75%] w-[85%] m-auto text-center">
        <div className="text-whtie  text-center  text-white font-semibold md:text-[30px] text-[20px]">
          Get Ahead of the Game Leveraging the Latest Tech Innovations
        </div>
        <div className="md:mt-24 mt-6">
          <div className="w-full md:flex items-center  ">
            <div className="md:w-1/2 md:mt-0 mt-8 w-full">
              <div className="font-semibold text-white text-left md:text-[30px] md:mt-0 mt-16 text-[22px]">
                Smart Displays
              </div>
              <div className="w-full mt-4  flex items-center">
                <div className="w-[30px] font-bold text-white  ">-</div>
                <div className="md:text-[22px] text-[19px] text-[#d7d7d7]">
                  From Sketch to Screen
                </div>
              </div>
              <div className="w-full  mt-2 flex items-center">
                <div className="w-[30px] font-bold text-white  ">-</div>
                <div className="md:text-[22px] text-[19px] text-[#d7d7d7]">
                  The Power of Visualization
                </div>
              </div>
              <div className="w-full mt-2  flex items-center">
                <div className="w-[30px] font-bold text-white  ">-</div>
                <div className="md:text-[22px] text-[19px] text-[#d7d7d7]">
                  A Larger Window into the Future
                </div>
              </div>
            </div>
            <div className="md:w-1/2   md:mt-0 mt-8 w-full">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                // code to add autoplay
                modules={[Autoplay, Pagination]}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
              >
                <SwiperSlide>
                  <img src={smart1} alt="" className="rounded-md" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={sm2} alt="" className="rounded-md" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={sm3} alt="" className="rounded-md" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-[75%] md:pt-16 pt-8  w-[85%] m-auto text-center">
        <div className="md:mt-24 mt-6">
          <div className="w-full md:flex items-center  ">
            <div className="md:w-1/2 md:mt-0 mt-8 w-full">
              <div className="font-semibold text-white text-left md:text-[30px] md:mt-0 mt-16 text-[22px]">
                Touchscreen
              </div>
              <div className="w-full mt-4  flex items-center">
                <div className="w-[30px] font-bold text-white  ">-</div>
                <div className="md:text-[22px] text-[19px] text-[#d7d7d7]">
                  Interactive Design
                </div>
              </div>
              <div className="w-full  mt-2 flex items-center">
                <div className="w-[30px] font-bold text-white  ">-</div>
                <div className="md:text-[22px] text-[19px] text-[#d7d7d7]">
                  Touch, Swipe, Pinch
                </div>
              </div>
              <div className="w-full mt-2  flex items-center">
                <div className="w-[30px] font-bold text-white  ">-</div>
                <div className="md:text-[22px] text-[19px] text-[#d7d7d7]">
                  4K quality content
                </div>
              </div>
            </div>
            <div className="md:w-1/2   md:mt-0 mt-8 w-full">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                // code to add autoplay
                modules={[Autoplay, Pagination]}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
              >
                <SwiperSlide>
                  <img src={tc1} alt="" className="rounded-md" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={tc2} alt="" className="rounded-md" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={tc3} alt="" className="rounded-md" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-[75%] md:pt-16 pt-8  w-[85%] m-auto text-center">
        <div className="md:mt-24 mt-6">
          <div className="w-full md:flex items-center  ">
            <div className="md:w-1/2 md:mt-0 mt-8 w-full">
              <div className="font-semibold text-white text-left md:text-[30px] md:mt-0 mt-16 text-[22px]">
                Virtual Reality
              </div>
              <div className="w-full mt-4  flex items-center">
                <div className="w-[30px] font-bold text-white  ">-</div>
                <div className="md:text-[22px] text-[19px] text-[#d7d7d7]">
                  Tablet plus Oculus experience
                </div>
              </div>
              <div className="w-full  mt-2 flex items-center">
                <div className="w-[30px] font-bold text-white  ">-</div>
                <div className="md:text-[22px] text-[19px] text-[#d7d7d7]">
                  Design in Another Dimension
                </div>
              </div>
              <div className="w-full mt-2  flex items-center">
                <div className="w-[30px] font-bold text-white  ">-</div>
                <div className="md:text-[22px] text-[19px] text-[#d7d7d7]">
                  Step Inside Your Projects
                </div>
              </div>
            </div>
            <div className="md:w-1/2   md:mt-0 mt-8 w-full">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                // code to add autoplay
                modules={[Autoplay, Pagination]}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
              >
                <SwiperSlide>
                  <img src={vr1} alt="" className="rounded-md" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={vr2} alt="" className="rounded-md" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={vr3} alt="" className="rounded-md" />
                </SwiperSlide>
              </Swiper>
            </div>
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

export default Spaces;
