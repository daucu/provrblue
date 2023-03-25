import React from "react";
import Header from "../Header/Header";
import im from "../Assets/Images/p2aa2.png";
import p2a3 from "../Assets/Images/p2a3.jpg";
import p2a4 from "../Assets/Images/p2a4.jpg";
import p2a5 from "../Assets/Images/p2a5.jpg";
import Messages from "../Body/Messages";
import Footer from "../Footer/Footer";
function Parasmanii() {
  return (
    <div>
      <div className="md:pb-32 pb-24">
        <Header />
      </div>
      <div className=" m-auto p-4">
        <div className="md:w-[80%] w-[90%] m-auto">
          <div className="font-bold md:text-[35px] text-[25px] text-center text-white">
            VR Tour (<i> Parasmani 2</i>)
          </div>
          <div className="md:mt-12 mt-8 ">
            <img src={im} alt="" className="w-[80%] m-auto rounded-md" />
          </div>
        </div>
      </div>
      <div className="flex my-16 md:w-[80%] w-[90%] m-auto  flex-wrap justify-around items-center  ">
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
      <div>
        <Messages />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Parasmanii;
