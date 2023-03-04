import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Body/Home";

function App() {
  return (
    <div className="bg-[#000000]">
      <Routes>
      
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
