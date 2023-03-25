import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import walk3 from "../Assets/video/walk3.mp4";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { TfiReload } from "react-icons/tfi";
import { MdPhotoSizeSelectLarge } from "react-icons/md";
import Messages from "./Messages";
import p21 from "../Assets/Images/p2a1.png";
import p2aa1 from "../Assets/Images/p2aa1.jpg";
import p2a2 from "../Assets/Images/p2a2.jpg";
import p2a3 from "../Assets/Images/p2a3.jpg";
import p2a4 from "../Assets/Images/p2a4.jpg";
import p2a5 from "../Assets/Images/p2a5.jpg";
import p2aa2 from "../Assets/Images/p2aa2.png";
import { Link } from "react-router-dom";
function SuccessStories() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const data = `<div id="preloadContainer" style="background-color:rgba(0,0,0,1)"><div style="z-index: 4; position: absolute; left: 0%; top: 50%; width: 100.00%; height: 10.00%"><div style="text-align:left; color:#000; "><DIV STYLE="text-align:center;"><SPAN STYLE="letter-spacing:0vmin;color:#777777;font-size:1.23vmin;font-family:Arial, Helvetica, sans-serif;">Loading virtual tour. Please wait...</SPAN></DIV><p STYLE="margin:0; line-height:1.01vmin;"><BR STYLE="letter-spacing:0vmin;color:#000000;font-size:1.01vmin;font-family:Arial, Helvetica, sans-serif;"/></p></div></div></div>
    <div id="viewer"></div>`;

  useEffect(() => {
    // scrollToTop();
    window.oncallload();
  }, []);
  const data2 = ``;
  return (
    <div className="flex flex-col justify-between">
      <Header />
      <div>
        <div
          className="relative h-[100vh]  w-full  "
          dangerouslySetInnerHTML={{ __html: data }}
        ></div>
      </div>
      <div className="  md:mt-24  mt-[40vh] ">
        <div className="md:w-[80%] w-[95%] p-4 m-auto">
          <div className="font-bold text-[25px] md:text-[35px] text-white text-center">
            Case Studies
          </div>
          <div className="flex my-12 flex-wrap justify-around items-center  ">
            <Link to="/parasmani">
              <div className="max-h-[300px] w-[300px] m-4 cursor-pointer  ">
                <div
                  className="flex items-end justify-center"
                  style={{
                    backgroundImage: `url(${p21})`,
                    backgroundSize: "cover",
                    padding: "30px",
                    height: "300px",
                    width: "300px",
                    borderRadius: "10px",
                  }}
                >
                  <div className="font-bold text-white text-[25px] ">
                    Parasmani 2
                  </div>
                </div>
              </div>
            </Link>

            <div className="max-h-[300px] w-[300px] m-4 cursor-pointer  ">
              <div
                className="flex items-end justify-center"
                style={{
                  backgroundImage: `url(${p2aa1})`,
                  backgroundSize: "cover",
                  padding: "30px",
                  height: "300px",
                  width: "300px",
                  borderRadius: "10px",
                }}
              >
                <div className="font-bold text-white text-[25px] ">
                  Showroom
                </div>
              </div>
            </div>
            <div className="max-h-[300px] w-[300px] m-4 cursor-pointer  ">
              <div
                className="flex items-end justify-center"
                style={{
                  backgroundImage: `url(${p2a2})`,
                  backgroundSize: "cover",
                  padding: "30px",
                  height: "300px",
                  width: "300px",
                  borderRadius: "10px",
                }}
              >
                <div className="font-bold text-white text-[25px] ">Saloon</div>
              </div>
            </div>
          </div>
          <div className="flex my-12 flex-wrap justify-around items-center  ">
            <div className="max-h-[300px] w-[300px] m-4 cursor-pointer  ">
              <div
                className="flex items-end justify-center"
                style={{
                  backgroundImage: `url(${p2a3})`,
                  backgroundSize: "cover",
                  padding: "30px",
                  height: "300px",
                  width: "300px",
                  borderRadius: "10px",
                }}
              >
                <div className="font-bold text-white text-[25px] ">Shoe's</div>
              </div>
            </div>
            <div className="max-h-[300px] w-[300px] m-4 cursor-pointer  ">
              <div
                className="flex items-end justify-center"
                style={{
                  backgroundImage: `url(${p2a4})`,
                  backgroundSize: "cover",
                  padding: "30px",
                  height: "300px",
                  width: "300px",
                  borderRadius: "10px",
                }}
              >
                <div className="font-bold text-white text-[25px] ">Bedroom</div>
              </div>
            </div>
            <div className="max-h-[300px] w-[300px] m-4 cursor-pointer  ">
              <div
                className="flex items-end justify-center"
                style={{
                  backgroundImage: `url(${p2a5})`,
                  backgroundSize: "cover",
                  padding: "30px",
                  height: "300px",
                  width: "300px",
                  borderRadius: "10px",
                }}
              >
                <div className="font-bold text-white text-[25px] ">Terrace</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Messages />
      </div>
      <Footer />
    </div>
  );
}

export default SuccessStories;
