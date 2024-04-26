import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Home from "./Pages/Home/Home";
import Phases from "./Components/Phases/Phases";
import Faqs from "./Components/Faqs/Faqs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet, faXmark } from "@fortawesome/free-solid-svg-icons";
import ShowContext from "./context/ShowContext";

const App = () => {

  const {show, handleShow} =  useContext(ShowContext)
  return (
    <div>
      
      <Router>
        <Routes>
          <Route path="/presail" element={<Main />} />
          <Route path="/" element={<Home />} />
          <Route path="/roadmap" element={<Phases />} />
          <Route path="/faq" element={<Faqs />} />
        </Routes>
      </Router>

      <div className={` ${show===false?"hidden":"block"} duration-500 absolute text-white bg-[#FF3998]  top-1/4 right-1/3 rounded-xl  h-[70vh] w-[30vw]`}>
        <div className="flex flex-col px-10 py-10 gap-10 relative">
          <FontAwesomeIcon onClick={handleShow} className="absolute top-0 -right-0 text-black bg-white rounded-full z-10 w-10 h-10" icon={faXmark}/>
          <h1 className="text-2xl font-bold text-center">Connect Wallet</h1>
          <div className="flex  items-center gap-4 hover:bg-red-600 py-2 px-4 rounded-lg">
            <FontAwesomeIcon className="text-3xl" icon={faWallet} />{" "}
            <h1 className="text-xl font-bold">Leap</h1>
          </div>
          <div className="flex  items-center gap-4 hover:bg-red-600 py-2 px-4 rounded-lg">
            <FontAwesomeIcon className="text-3xl" icon={faWallet} />{" "}
            <h1 className="text-xl font-bold">Leap</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
