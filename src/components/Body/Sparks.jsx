import React from "react";
import sp1 from "../Assets/Images/sp1.png";
import sp2 from "../Assets/Images/sp2.png";
import sp3 from "../Assets/Images/sp3.png";
import sp4 from "../Assets/Images/sp4.png";
function Sparks() {
  return (
    <div className="md:mt-36 mt-12 items-center md:w-[80%] w-[85%] m-auto">
      <div className="md:flex justify-between items-center ">
        <div className="md:w-[45%] w-full">
          <img src={sp1} alt="" className="rounded-md" />
        </div>
        <div className="md:w-[45%] md:mt-0 mt-6 w-full">
          <div className="md:text-[27px] text-[21px] underline decoration-[#4614B9] text-white">
            Full movement freedom
          </div>
          <div className="md:text-[18px] text-[16px] md:mt-8 mt-4 text-[#d7d7d7]">
            Allow clients to enter a space and freely walk around to examine
            every corner and detail. Make them feel as if they were there.
            Unlike 360 panoramas, the presentation is not limited to a few
            selected viewpoints and there is no distortion in the corners of the
            screen.
          </div>
        </div>
      </div>
      <div className="md:flex justify-between md:mt-28 mt-12 items-center ">
        <div className="md:w-[45%] w-full order-2 ">
          <img src={sp2} alt="" className="rounded-md" />
        </div>
        <div className="md:w-[45%] md:mt-0 mt-6 w-full order-1">
          <div className="md:text-[27px] text-[21px] underline decoration-[#4614B9] text-white">
            Present anywhere
          </div>
          <div className="md:text-[18px] text-[16px] md:mt-8 mt-4 text-[#d7d7d7]">
            Walkthroughs created with Shapespark leverage HTML5 & WebGL
            standards and can be opened directly from a web browser - there is
            no need to install anything. The walkthroughs are lightweight and
            work even on a phone.
            <div className="mt-2">
              Finally you don't need to resort to screencast videos for content
              that is inherently interactive.
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex justify-between md:mt-28 mt-12 items-center ">
        <div className="md:w-[45%] w-full">
          <img src={sp3} alt="" className="rounded-md" />
        </div>
        <div className="md:w-[45%] md:mt-0 mt-6 w-full">
          <div className="md:text-[27px] text-[21px] underline decoration-[#4614B9] text-white">
            Realistic global illumination
          </div>
          <div className="md:text-[18px] text-[16px] md:mt-8 mt-4 text-[#d7d7d7]">
            Walkthroughs created with Shapespark leverage HTML5 & WebGL
            standards and can be opened directly from a web browser - there is
            no need to install anything. The walkthroughs are lightweight and
            work even on a phone.
            <div className="mt-2">
              Finally you don't need to resort to screencast videos for content
              that is inherently interactive.
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex justify-between md:mt-28 mt-12 items-center ">
      <div className="md:w-[45%] w-full order-2">
          <img src={sp4} alt="" className="rounded-md" />
        </div>
        <div className="md:w-[45%] md:mt-0 mt-6 w-full order-1">
          <div className="md:text-[27px] text-[21px] underline decoration-[#4614B9] text-white">
          Video calls in 3D
          </div>
          <div className="md:text-[18px] text-[16px] md:mt-8 mt-4 text-[#d7d7d7]">
          Start a video call inside an interactive online walkthrough to offer great customer experience. Whatever you create, be it an apartment, a showroom or an exhibition hall, can become a 3D meeting place. 
            <div className="mt-2">
              Finally you don't need to resort to screencast videos for content
              that is inherently interactive.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sparks;
