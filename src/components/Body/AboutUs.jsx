import React, { useEffect } from "react";
import soon from "../Assets/Images/soon.jpg";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
function AboutUs() {
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
    <>
      <div>
        <Header />
      </div>
      <div className="flex justify-center items-center h-[100vh]">
        <img src={soon} alt="soon" />
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
}

export default AboutUs;
