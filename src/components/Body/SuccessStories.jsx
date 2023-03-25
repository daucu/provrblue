import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import walk3 from "../Assets/video/walk3.mp4";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { TfiReload } from "react-icons/tfi";
import { MdPhotoSizeSelectLarge } from "react-icons/md";
import Messages from "./Messages";

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
    <div >
      <Header />
      <div>
        <div dangerouslySetInnerHTML={{ __html: data }}>

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
