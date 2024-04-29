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
  const { show, handleShow } = useContext(ShowContext);
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

      <div
        className={`${
          show ? "block" : "hidden"
        } duration-500 absolute text-white bg-gradient-to-r from-pink-500 to-fuchsia-500 
      top-1/4 right-1/3 rounded-2xl shadow-xl h-[70vh] w-[30vw]`}
      >
        <div className="flex flex-col px-10 py-10 gap-10 relative">
          {/* Close Button */}
          <FontAwesomeIcon
            onClick={handleShow}
            className="absolute top-4 right-4 text-black bg-white hover:bg-gray-200 
          rounded-full z-10 w-10 h-10 transition"
            icon={faXmark}
          />

          {/* Modal Title */}
          <h1 className="text-3xl font-extrabold text-center h-max overflow-y-hidden">
            Connect Wallet
          </h1>

          {/* Wallet Options */}
          <div className="flex flex-col gap-6">
            <div
              className="flex items-center gap-4 hover:bg-red-600 hover:text-white py-3 px-6 
            rounded-lg transition duration-300 ease-in-out cursor-pointer"
            >
              <FontAwesomeIcon className="text-3xl " icon={faWallet} />
              <h1 className="text-xl font-bold">Leap</h1>
            </div>
            <div
              className="flex items-center gap-4 hover:bg-red-600 hover:text-white py-3 px-6 
            rounded-lg transition duration-300 ease-in-out cursor-pointer"
            >
              <FontAwesomeIcon className="text-3xl " icon={faWallet} />
              <h1 className="text-xl font-bold">Keplr</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
