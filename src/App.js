import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Body/Home";
import Metaverse from "./components/Body/Metaverse";
import SuccessStories from "./components/Body/SuccessStories";

function App() {
  return (
    <div className="bg-[#000000]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<SuccessStories />} />
        <Route path="/metaverse" element={<Metaverse />} />
      </Routes>
    </div>
  );
}

export default App;
