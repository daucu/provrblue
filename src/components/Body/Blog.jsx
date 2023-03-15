import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ig from "../Assets/Images/gifs.gif";
import er from "../Assets/Images/er.gif";
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
      <div className="w-full md:w-[95%] m-auto md:p-0 p-4">
        <div className="text-white md:text-[35px] text-[22px] text-center">
          Here Are Our Blogs
        </div>
      </div>
      <div className="w-[95%] md:flex  m-auto pt-16  p-4">
        <div className="md:w-1/2 w-full ">
          <img
            src={ig}
            alt=""
            className="md:w-[90%] w-full rounded-lg m-auto"
          />
        </div>
        <div className="md:w-1/2 md:mt-0 mt-8 w-full ">
          <div className=" font-semibold md:text-[25px] underline decoration-[#4614B9]  text-[white] text-[20px] ">
            Our Achievement
          </div>
          <div className=" font-extralight text-justify text-white mt-4 md:text-[23px] text-[18px] ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad vel
            illo quia voluptatibus recusandae distinctio provident ipsum maxime,
            corporis fuga, quibusdam deleniti libero laboriosam nam sapiente.
            Iure provident maiores sit. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Saepe ducimus harum minus quae quod voluptatum, et
            vero eveniet fugit incidunt explicabo nemo odio nulla aspernatur
            aliquam natus dolore dolorum quidem.
          </div>
          <div className=" font-semibold   text-[20px] mt-6 ">
            By : John Doe
          </div>
        </div>
      </div>
      <div className="w-full md:w-[95%] m-auto md:mt-24 mt-8 md:p-0 p-4">
        <div className="text-white md:text-[35px] text-[22px] text-center">
       Our Tasks
        </div>
      </div>
      <div className="w-[95%] md:flex   m-auto pt-24  p-4">
        <div className="md:w-1/2 md:mt-0 mt-8 w-full ">
          <div className=" font-semibold md:text-[25px] underline decoration-[#4614B9]  text-[white] text-[20px] ">
            Our Achievement
          </div>
          <div className=" font-extralight text-justify text-white mt-4 md:text-[23px] text-[18px] ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad vel
            illo quia voluptatibus recusandae distinctio provident ipsum maxime,
            corporis fuga, quibusdam deleniti libero laboriosam nam sapiente.
            Iure provident maiores sit. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Saepe ducimus harum minus quae quod voluptatum, et
            vero eveniet fugit incidunt explicabo nemo odio nulla aspernatur
            aliquam natus dolore dolorum quidem.
          </div>
          <div className=" font-semibold   text-[20px] mt-6 ">
            By : John Doe
          </div>
        </div>
        <div className="md:w-1/2 w-full ">
          <img
            src={er}
            alt=""
            className="md:w-[90%] w-full rounded-lg m-auto"
          />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Blog;
