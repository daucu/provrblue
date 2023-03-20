import React, { useEffect } from "react";
import Neon from "../Assets/Images/Neon.jpg";
import Neon2 from "../Assets/Images/Neon2.jpg";
import Manish1 from "../Assets/Images/Manish1.png";
import Dhruvil1 from "../Assets/Images/Dhruvil1.png";
import Drashty1 from "../Assets/Images/Drashty1.png";
import vrr from "../Assets/Images/vrr.jpg";
import Office from "../Assets/Images/Office.jpg";
import Manoj1 from "../Assets/Images/Manoj1.png";
import dsd from "../Assets/Images/dsd.png";
import { Autoplay, Pagination } from "swiper";

import Footer from "../Footer/Footer";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "../Header/Header";
function AboutUs() {
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };
  // useEffect(() => {
  //   scrollToTop();
  // }, []);
  return (
    <>
      <div className="pb-36">
        <Header />
      </div>
      {/* <div className="flex justify-center items-center h-[100vh]">
        <img src={soon} alt="soon" />
      </div>  */}
      <div>
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
          <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
            <div className="w-full lg:w-6/12">
              <h2 className="w-full font-bold lg:text-4xl text-3xl text-white lg:leading-10 leading-9">
                The pioneer of Augmented Reality
              </h2>
              <p className="font-normal  leading-6 text-[#d7d7d7]  text-[18px]  mt-6">
                Neuractory is a company dedicated to providing to build the most
                immersive augmented reality platform for various industries.
              </p>
              <p className="font-normal  leading-6 text-[#d7d7d7] text-[18px]   mt-2">
                Step into a world of limitless possibilities with our
                WebAR-powered product!
              </p>
              <p className="font-normal  leading-6 text-[#d7d7d7] text-[18px]   mt-2">
                Immerse your audience in a world of your brand's creation with
                our WebAR technology and experience the future of interactive
                marketing with our cutting-edge technology.
              </p>
            </div>
            <div className="w-full lg:w-6/12">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                // code to add autoplay
                // modules={[Autoplay, Pagination]}
                // autoplay={{
                //   delay: 1500,
                //   disableOnInteraction: false,
                // }}
                pagination={{ clickable: true }}
              >
                <SwiperSlide>
                  <div className="w-full">
                    <img
                      src={Neon}
                      alt=""
                      srcset=""
                      className="md:w-1/2 w-full m-auto"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full">
                    <img
                      src={Neon2}
                      alt=""
                      srcset=""
                      className="md:w-1/2 w-full m-auto"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="md:mt-32 mt-8">
            <div className="text-white font-semibold text-center md:text-[30px] text-[20px]">
              Our Team
            </div>
            <div className="md:mt-16 mt-8">
              <Swiper
                // breakpoints for responsive design
                breakpoints={{
                  640: {
                    width: 640,
                    slidesPerView: 1,
                  },
                  768: {
                    width: 768,
                    slidesPerView: 2,
                  },
                  1024: {
                    width: 1024,
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1280: {
                    width: 1280,
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                }}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div>
                    <div className="h-[400px]">
                      <img
                        src={Manish1}
                        alt=""
                        srcset=""
                        className="h-[100%] w-[100%]"
                      />
                    </div>

                    <div className="p-4 bg-[#8026B1]">
                      <div className="text-[20px]  font-semibold text-white">
                        Dhruvil Patadia
                      </div>
                      <div className="text-[#d7d7d7] font-normal text-[17px]">
                        Co-Founder
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="h-[400px]">
                      <img
                        src={Dhruvil1}
                        alt=""
                        className="h-[100%] w-[100%]"
                        srcset=""
                      />
                    </div>

                    <div className="p-4 bg-[#8026B1]">
                      <div className="text-[20px]  font-semibold text-white">
                        Dhruvil Patadia
                      </div>
                      <div className="text-[#d7d7d7] font-normal text-[17px]">
                        Co-Founder
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="h-[400px]">
                      <img
                        src={Drashty1}
                        alt=""
                        className="h-[100%] w-[100%]"
                        srcset=""
                      />
                    </div>

                    <div className="p-4 bg-[#8026B1]">
                      <div className="text-[20px]  font-semibold text-white">
                        Drashty Ranpara
                      </div>
                      <div className="text-[#d7d7d7] font-normal text-[17px]">
                        CEO and Founder
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="h-[400px]">
                      <img
                        src={Manoj1}
                        alt=""
                        className="h-[100%] w-[100%]"
                        srcset=""
                      />
                    </div>

                    <div className="p-4 bg-[#8026B1]">
                      <div className="text-[20px]  font-semibold text-white">
                        Milan Ranpara
                      </div>
                      <div className="text-[#d7d7d7] font-normal text-[17px]">
                        CPO and Co-Founder
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="h-[400px]">
                      <img
                        src={dsd}
                        alt=""
                        className="h-[100%] w-[100%]"
                        srcset=""
                      />
                    </div>

                    <div className="p-4 bg-[#8026B1]">
                      <div className="text-[20px]  font-semibold text-white">
                        Manoj Ranpara
                      </div>
                      <div className="text-[#d7d7d7] font-normal text-[17px]">
                        Co-Founder
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="md:mt-36 mt-8">
            <div className="md:flex justify-between items-center ">
              <div className="md:w-[30%] w-full">
                <img src={Office} alt="" srcset="" className="w-full" />
              </div>
              <div className="md:w-[60%] w-full font-normal text-white md:text-[20px] text-[18px]">
                Neuractory - where innovation meets AI! Our cutting-edge tech
                lab is paving the way for next-gen camera and web technology.
                With expertise in augmented reality, machine learning, and
                computer vision, we're redefining what's possible.
              </div>
            </div>
            <div className="md:flex md:mt-24 justify-between items-center ">
              <div className="md:w-[30%] w-full">
                <img src={vrr} alt="" srcset="" className="w-full" />
              </div>
              <div className="md:w-[60%] w-full font-normal text-white md:text-[20px] text-[18px]">
                We wrapped our technology into a solid AR development platform
                and packaged it to make it accessible to all – brands and
                end-users – so it reveals a seamless experience across millions
                of devices. Today, our technology transforms the camera into a
                companion for daily life, serving as a catalyst for creativity,
                eliminating communication obstacles, and providing a medium for
                people to express themselves in the digital realm.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
