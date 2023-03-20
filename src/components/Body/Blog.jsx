import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ig from "../Assets/Images/gifs.gif";
import er from "../Assets/Images/er.gif";
import Messages from "./Messages";
function Blog() {
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
    <div className="bg-black">
      <div className="md:pb-40 pb-28">
        <Header />
      </div>
      <div className="w-full md:w-[90%] m-auto md:p-0 p-4">
        <div className="text-white md:text-[35px] text-[22px] text-center">
          Here Are Our Blogs
        </div>
      </div>
      <div className="w-[90%] md:flex items-center  m-auto pt-16  p-4">
        <div className="md:w-1/2 w-full ">
          <img
            src={ig}
            alt=""
            className="md:w-[90%] w-full rounded-lg m-auto"
          />
        </div>
        <div className="md:w-1/2 md:mt-0 mt-8 w-full ">
          <div className=" font-semibold md:text-[25px] underline decoration-[#4614B9]  text-[white] text-[20px] ">
            Design Your Own Reality
          </div>
          <div className=" font-extralight text-justify text-white mt-4 md:text-[23px] text-[18px] ">
            Step into an immersive alternate reality with the Metaverse BE THE
            FIRST TO Elevate Your Project Experience with a Transformation!
            Metaverse is more than just buzz, it's a digital revolution!
            Companies worldwide are investing millions to transform, so why not
            join the trend? Let us help with your Metaverse transformation!
          </div>
        </div>
      </div>
      <div className="w-full md:w-[95%] m-auto md:mt-24 mt-8 md:p-0 p-4">
        <div className="text-white md:text-[35px] text-[22px] text-center">
          Testimonials
        </div>
      </div>
      <div className="w-[90%] md:flex  items-center  m-auto pt-24  p-4">
        <div className="md:w-1/2 w-full ">
          <img
            src={er}
            alt=""
            className="md:w-[90%] w-full rounded-lg m-auto"
          />
        </div>
        <div className="md:w-1/2 md:mt-0 mt-8 w-full ">
          <div className=" font-semibold md:text-[25px] underline decoration-[#4614B9]  text-[white] text-[20px] ">
            Get the Inside Scoop
          </div>
          <div className=" font-extralight text-justify text-white mt-4 md:text-[23px] text-[18px] ">
            Neuractory exceeded our expectations with their AR/VR development
            for our commercial project. The complete exterior and interior views
            were absolutely stunning and helped us to better visualize our
            vision for the space. Their team was professional, responsive, and
            delivered the project on time. We highly recommend Neuractory for
            any AR/VR needs!
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

export default Blog;
