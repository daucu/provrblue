import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Builders from "./Builders";
import Marketing from "./Marketing";
import Messages from "./Messages";
import OurProducts from "./OurProducts";
import Pricing from "./Pricing";
import Solutions from "./Solutions";
import Sparks from "./Sparks";
import Video from "./Video";

function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Video />
      </div>
      <div>
        <Builders />
      </div>
      <div>
        <Solutions />
      </div>
      <div>
        <Marketing />
      </div>
      <div>
        <OurProducts />
      </div>
      <div>
        <Sparks />
      </div>
      <div>
        <Pricing />
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

export default Home;
