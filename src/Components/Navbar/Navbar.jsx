import {
  faCartArrowDown,
  faMoon,
  faBars,
  faTimes,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import ShowContext from "../../context/ShowContext";

const Navbar = () => {
  const { handleShow,black, handleBlack } = useContext(ShowContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className={`relative duration-300 ${black===true?'text-white':"text-black"}  ${isMenuOpen ===true?'h-[80vh]':""}`}>
      <div className="   py-12 flex justify-between items-center ">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faCartArrowDown} className="text-2xl" />
          <span className="ml-4 text-xl font-bold h-max overflow-y-hidden">
            Brand
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 text-xl font-semibold">
          <Link
            to="/"
            className="hover:text-gray-400 transition h-max overflow-y-hidden"
          >
            Home
          </Link>
          <Link
            to="roadmap"
            className="hover:text-gray-400 transition h-max overflow-y-hidden"
          >
            Roadmap
          </Link>
          <Link
            to="/presail"
            className="hover:text-gray-400 transition h-max overflow-y-hidden"
          >
            Presale
          </Link>
          <Link
            to="/"
            className="hover:text-gray-400 transition h-max overflow-y-hidden"
          >
            Games
          </Link>
          <Link
            to="/"
            className="hover:text-gray-400 transition h-max overflow-y-hidden"
          >
            Buy NFT
          </Link>
          <FontAwesomeIcon
            icon={black===true?faMoon:faSun}
            onClick={()=>handleBlack()}
            className="hover:text-gray-400 transition cursor-pointer"
          />
          <Link
            className="hover:text-gray-400 transition h-max overflow-y-hidden"
            onClick={() => handleShow()}
          >
            Connect Wallet
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="lg:hidden text-2xl">
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>

        {/* Mobile Menu */}
        <Transition
          show={isMenuOpen}
          enter="transition-opacity duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full h-max bg-black z-10 flex flex-col items-center p-6 lg:hidden">
              <button onClick={toggleMenu} className="self-end text-2xl">
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <Link
                to="/"
                className="py-2 text-xl font-semibold hover:text-gray-400 transition"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/roadmap"
                className="py-2 text-xl font-semibold hover:text-gray-400 transition"
               
              >
                Roadmap
              </Link>
              <Link
                to="/presail"
                className="py-2 text-xl font-semibold hover:text-gray-400 transition"
                onClick={toggleMenu}
              >
                Presale
              </Link>
              <Link
                to="/"
                className="py-2 text-xl font-semibold hover:text-gray-400 transition"
                onClick={toggleMenu}
              >
                Games
              </Link>
              <Link
                to="/"
                className="py-2 text-xl font-semibold hover=text-gray-400 transition"
                onClick={toggleMenu}
              >
                Buy NFT
              </Link>
              <FontAwesomeIcon
              onClick={()=>handleBlack()}
                icon={faMoon}
                className="py-2 text-xl hover:text-gray-400 transition"
                
              />
              <button
                className="py-2 text-xl font-semibold hover=text-gray-400 transition"
                onClick={() => handleShow()}
              >
                Connect Wallet
              </button>
            </div>
          )}
        </Transition>
      </div>
    </div>
  );
};

export default Navbar;
