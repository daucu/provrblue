import axios from "axios";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Auth/Login";
import Protected from "./components/Auth/Protected";
import Signup from "./components/Auth/Signup";
import MetaverseBlog from "./components/Blog/MetaverseBlog";
import Vr from "./components/Blog/Vr";
import AboutUs from "./components/Body/AboutUs";
import Blog from "./components/Body/Blog";
import Contactus from "./components/Body/Contactus";
import Home from "./components/Body/Home";
import Metaverse from "./components/Body/Metaverse";
import ProfilePage from "./components/Body/ProfilePage";
import Spaces from "./components/Body/Spaces";
import SuccessStories from "./components/Body/SuccessStories";
import Branding from "./components/Header/Branding";
import Journey from "./components/Header/Journey";

axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="bg-[#000000]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<SuccessStories />} />
        <Route path="/metaverse" element={<Metaverse />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/spaces" element={<Spaces />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/protected" element={<Protected />} />
        <Route path="/vr" element={<Vr />} />
        <Route path="/metaverseblog" element={<MetaverseBlog />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/branding" element={<Branding />} />
      </Routes>
    </div>
  );
}

export default App;
