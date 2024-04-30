import React, { useContext, useEffect, useState } from "react";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faAngleDown, faEarthAmerica } from "@fortawesome/free-solid-svg-icons";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import { Link } from "react-router-dom";
import ShowContext from "../../context/ShowContext";
import Navbar from "../Navbar/Navbar";

const Nav = () => {

  const oneDayThreeHoursTwentyFiveMinutesFortyTwoSeconds =
    1 * 3600 * 24 + 3 * 3600 + 25 * 60 + 42;

 

  return (
    <div >
     <Navbar/>
     <div className="flex   justify-center items-center   ">
          <div className="w-[100%] md:w-[60%]  px-4">
            <CountdownTimer
              startTimeInSeconds={
                oneDayThreeHoursTwentyFiveMinutesFortyTwoSeconds
              }
            />
          </div>

        </div>
    </div>
  );
};

export default Nav;
