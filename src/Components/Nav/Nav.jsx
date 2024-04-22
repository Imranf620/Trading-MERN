import React, { useEffect, useState } from "react";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faAngleDown, faEarthAmerica } from "@fortawesome/free-solid-svg-icons";
import CountdownTimer from "../CountdownTimer/CountdownTimer";

const Nav = () => {
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
        className=" h-[120vh] relative top-0 overflow-y-scroll w-[100vw] "
        id="home"
      >
        <div className="image w-[100vw] h-[120vh] absolute"></div>

        {/* <div className=" blackbg w-[100vw] h-[100vh] absolute "> </div> */}
        <div
          className={`w-[100vw] flex justify-between items-center py-4 px-8 fixed transition-all duration-300 ${
            scrolled ? "bg-white shadow" : "bg-transparent"
          } ${isOpen === true ? "navopen" : ""}`}
        >
          <a href="#home">
            <div
              className={`text-white hidden md:block  ${
                scrolled ? "text-black" : "bg-transparent"
              } ${isOpen === true ? "portopen" : ""}`}
            >
              Portfolio
            </div>
          </a>
          <div
            className={` hidden  text-black  lg:flex gap-12 lg:text-sm font-semibold  ${
              scrolled ? "text-black" : "bg-transparent"
            } ${isOpen === true ? "verticalnav" : ""}`}
          >
            <a href="#home" className={`home `}>
              {" "}
              STAKING{" "}
            </a>
            <a href="#about">ABOUT</a>
            <a href="#skills"> ROADMAP</a>
            <a href="#portfolio">HOW TO BUY</a>
            <a href="#contact">FAQ</a>
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
                className=" border-[1px] rounded-full text-black border-black p-2 w-4 h-4"
                icon={faTwitter}
              />
              <FontAwesomeIcon
                className=" border-[1px] rounded-full text-black border-black p-2 w-4 h-4"
                icon={faTelegram}
              />
              <button
                className={`text-sm bg-transparent  px-4 py-3 font-semibold md:px-7 text-black border-black border-[1px] rounded ${
                  isOpen === true ? "btnopen" : ""
                }  `}
              >
                LOGIN
              </button>

              <div
                className={`flex text-black items-center gap-2 ${
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
            {!scrolled && (
              <div className={`hamburger-menu  `} onClick={toggleMenu}>
                <div
                  className={
                    isOpen
                      ? "hamburger-menu__bar open "
                      : "hamburger-menu__bar "
                  }
                ></div>
                <div
                  className={
                    isOpen
                      ? "hamburger-menu__bar open "
                      : "hamburger-menu__bar "
                  }
                ></div>
                <div
                  className={
                    isOpen
                      ? "hamburger-menu__bar open "
                      : "hamburger-menu__bar "
                  }
                ></div>
              </div>
            )}

            {scrolled && (
              <div className={`hamburger-menu  `} onClick={toggleMenu}>
                <div
                  className={
                    isOpen
                      ? "hamburger-menu__bar open black-ham  "
                      : "hamburger-menu__bar black-ham  "
                  }
                ></div>
                <div
                  className={
                    isOpen
                      ? "hamburger-menu__bar open black-ham  "
                      : "hamburger-menu__bar black-ham  "
                  }
                ></div>
                <div
                  className={
                    isOpen
                      ? "hamburger-menu__bar open black-ham  "
                      : "hamburger-menu__bar black-ham  "
                  }
                ></div>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-between   mt-16">
          <div className="w-[100vw]">
            <CountdownTimer
              startTimeInSeconds={
                oneDayThreeHoursTwentyFiveMinutesFortyTwoSeconds
              }
            />
          </div>

          <div>
            <div
              style={{
                color: "white",
                textShadow: `
                -1px -1px 0 black,
                1px -1px 0 black,
                -1px 1px 0 black,
                1px 1px 0 black
    `,
              }}
            >
              DOGEVERSE
            </div>
            <p></p>
            <div>The World’s First Chain Traveling Doge</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
