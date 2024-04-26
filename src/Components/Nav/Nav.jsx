import React, { useContext, useEffect, useState } from "react";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faAngleDown, faEarthAmerica } from "@fortawesome/free-solid-svg-icons";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import { Link } from "react-router-dom";
import ShowContext from "../../context/ShowContext";

const Nav = () => {
  const {handleShow} = useContext(ShowContext)

  const oneDayThreeHoursTwentyFiveMinutesFortyTwoSeconds =
    1 * 3600 * 24 + 3 * 3600 + 25 * 60 + 42;

  useEffect(() => {
    const handleClick = (e) => {
      e.preventDefault();

      const targetId = e.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleClick);
    });

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleClick);
      });
    };
  }, []); // Empty dependency array to ensure this effect runs only once

  const [isOpen, setIsOpen] = useState(false);



  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className=" h-max  relative top-0 overflow-y-hidden w-[100vw] "
        id="home"
      >
        <div className="image w-[100vw] h-[170vh] md:h-[120vh] absolute"></div>

        {/* <div className=" blackbg w-[100vw] h-[100vh] absolute "> </div> */}
        <div
          className={`w-[100vw] flex justify-between z-50 items-center py-4 px-8 fixed transition-all duration-300 ${
            scrolled ? "bg-black shadow" : "bg-transparent"
          } ${isOpen === true ? "navopen" : ""}`}
        >
        
          <div
            className={` hidden  text-white  lg:flex gap-12 lg:text-sm font-semibold  ${
              scrolled ? "text-black" : "bg-transparent"
            } ${isOpen === true ? "verticalnav" : ""}`}
          >
            <Link to="/" className={`home h-max overflow-y-hidden  text-3xl font-bold`}>
              {" "}
              Home{" "}
            </Link>
          
          </div>
          <div
            className={`flex  items-center gap-4  ${
              isOpen === true ? "rightopen" : ""
            }`}
          >
            <div
              className={`flex items-center gap-4 ${
                isOpen === true ? "btnopen" : ""
              } `}
            >
              <FontAwesomeIcon
                className=" border-[1px] rounded-full text-white border-white p-2 w-4 h-4"
                icon={faTwitter}
              />
              <FontAwesomeIcon
                className=" border-[1px] rounded-full text-white border-white p-2 w-4 h-4"
                icon={faTelegram}
              />
              <button
                className={`text-sm bg-transparent  px-4 py-3 font-semibold md:px-7 text-white border-white border-[1px] rounded ${
                  isOpen === true ? "btnopen" : ""
                }  `}
              >
                 <Link
            className="hover:text-gray-400 transition h-max overflow-y-hidden"
            onClick={() => handleShow()}
          >
            Connect Wallet
          </Link>
              </button>
            

              <div
                className={`flex text-white items-center gap-2 ${
                  isOpen === true ? "btnopen" : ""
                } `}
              >
                <FontAwesomeIcon icon={faEarthAmerica} />
                <div className="flex items-center gap-3">
                  <h1 className="">EN </h1>
                  <FontAwesomeIcon icon={faAngleDown} />
                </div>
              </div>
            </div>
        

          </div>
        </div>
        <div className="flex   justify-center items-center mt-28   ">
          <div className="w-[100%] md:w-[50%]  px-4">
            <CountdownTimer
              startTimeInSeconds={
                oneDayThreeHoursTwentyFiveMinutesFortyTwoSeconds
              }
            />
          </div>

          {/* <div className="mb-32 md:ml-0">
            <div>

            <h1
              className="text-2xl font-bold"
              style={{
                color: "white",
                textShadow: `
              -1px -1px 0 blue,
              1px -1px 0 blue,
              -1px 1px 0 blue,
              1px 1px 0 blue
  `,
              }}
              >
              DOGEVERSE
            </h1>
            <h1
              className="text-4xl h-28 font-bold"
              style={{
                color: "white",
                textShadow: `
                -1px -1px 0 blue,
                1px -1px 0 blue,
                -1px 1px 0 blue,
                1px 1px 0 blue
                `,
              }}
              >
              The World’s First Chain Traveling Doge
            </h1>
              </div>
              <div className="flex gap-5">
                <button className="border-black  duration-300 text-white  border-2 px-4 py-2 rounded-3xl bg-gradient-to-tr from-blue-400 via-purple-500 w-40  to-pink-600 text-xl font-bold ">White Paper</button>
                <button className="border-black  duration-300 text-white  border-2 px-4 py-2 rounded-3xl w-40 text-xl font-bold ">Audit</button>
              </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Nav;
