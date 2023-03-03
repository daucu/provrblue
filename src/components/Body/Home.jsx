import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Builders from "./Builders";
import OurProducts from "./OurProducts";
import Solutions from "./Solutions";
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
        <OurProducts />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
