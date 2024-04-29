import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { faInfo, faUsd, faDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import ShowContext from "../../context/ShowContext";

const CountdownTimer = ({ startTimeInSeconds }) => {


  
  const { black } = useContext(ShowContext);
  const [inputVal, setInputVal] = useState("");
  const [inputVal2, setInputVal2] = useState("");

  let duration = 10;

  const [fillPercentage, setFillPercentage] = useState(0);

  useEffect(() => {
    // Set interval to increase the fill percentage over time
    const interval = setInterval(() => {
      setFillPercentage((prev) => {
        const newPercentage = prev + 100 / duration;
        return newPercentage > 100 ? 100 : newPercentage;
      });
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [duration]);

  const [time, setTime] = useState(startTimeInSeconds);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timerInterval); // Cleanup on unmount
  }, []);

  const formatTime = (totalSeconds) => {
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const formattedTime = formatTime(time);

  return (
    <div className={`flex flex-col border-2 border-black h-full bg-transparent    gap-8 items-center pt-10  w-full lg:w-2/3  rounded-2xl ${black === true ? "text-white" : "text-black"}  `}>
      <div className="flex items-center gap-12 bg-gray-800  text-white  p-6 rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold h-max overflow-y-hidden">
            {formattedTime.days}
          </span>
          <span className="text-sm h-max overflow-y-hidden">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold h-max overflow-y-hidden">
            {formattedTime.hours}
          </span>
          <span className="text-sm h-max overflow-y-hidden">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold h-max overflow-y-hidden">
            {formattedTime.minutes}
          </span>
          <span className="text-sm h-max overflow-y-hidden">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold h-max overflow-y-hidden">
            {formattedTime.seconds}
          </span>
          <span className="text-sm h-max overflow-y-hidden">Seconds</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-sm font-bold h-max overflow-y-hidden ">
          Usdt raised to add this " INJ RAISED 5000 INJ / 5000 INJ"
        </h1>
        <div className="relative">
          <div className=" absolute top-0 left-0  min-h-full bg-red-400 p-3  rounded-3xl w-2/3 ">
            {" "}
          </div>
          <div className="  bg-transparent min-h-full border-[1px] p-3 rounded-3xl w-full ">
            {" "}
          </div>
        </div>
        <div className="flex gap-2 flex-col items-center justify-between ">
          {" "}
          <h1 className="text-sm font-bold h-max overflow-y-hidden ">
            TOKEN NAME " JCLUB "
          </h1>{" "}
          <h1 className="text-sm font-bold h-max overflow-y-hidden ">
            TOKEN SUPPLY " 1 B "
          </h1>{" "}
          <h1 className="text-sm font-bold h-max overflow-y-hidden ">
            PRESALE PRICE " 0.004$ "
          </h1>{" "}
        </div>
        <div className="flex flex-col gap-2 items-center justify-between ">
          {" "}
          <h1 className="text-sm font-bold h-max overflow-y-hidden ">
            YOUR Purchased " any amount
          </h1>{" "}
        </div>
        <div className="flex justify-between items-center">
          <h1 className="font-bold h-max overflow-y-hidden">-------</h1>
          <h1 className="text-sm font-bold h-max overflow-y-hidden">
            1 $INJ = 0.004$
          </h1>
          <h1 className="font-bold h-max overflow-y-hidden">-------</h1>
        </div>

        <div className="flex justify-between">
          <button className="flex w-full justify-between gap-4 items-center border-white border-[1px] rounded px-4 py-2">
            <FontAwesomeIcon className=" w-max text-blue-500" icon={faUsd} />
            <h1 className="text-sm font-bold h-max overflow-y-hidden ">USD</h1>
          </button>
        </div>

        <div className="flex justify-between">
          <div className="flex gap-2">
            <h1 className="text-xs font-bold h-max overflow-y-hidden">USD</h1>

            <h1 className="text-xs font-bold h-max overflow-y-hidden">
              You Pay
            </h1>
          </div>
          <div className="flex gap-2">
            <h1 className="text-xs font-bold h-max overflow-y-hidden">INJ</h1>

            <h1 className="text-xs font-bold h-max overflow-y-hidden">
              You Receive
            </h1>
          </div>
        </div>

        <div className="flex gap-8 justify-between w-[30vw]">
          <div className="bg-transparent border-[1px]  rounded py-3 flex justify-between items-center px-4 ">
            <input
              type="text"
              value={inputVal}
              placeholder="0"
              onChange={(e) => setInputVal(e.target.value)}
              name=""
              id=""
              className="bg-transparent focus:outline-none "
            />

            <FontAwesomeIcon
              icon={faDollar}
              className="text-xl font-bold text-blue-500"
            />
          </div>
          <div className="bg-transparent border-[1px]  rounded py-3 flex justify-between  px-4 items-center ">
            <input
              type="text"
              value={inputVal2}
              placeholder="0"
              onChange={(e) => setInputVal2(e.target.value)}
              name=""
              id=""
              className="bg-transparent focus:outline-none "
            />

            <FontAwesomeIcon
              icon={faEthereum}
              className="text-xl font-bold text-black"
            />
          </div>
        </div>

        <h1 className="text-center font-bold text-sm h-max overflow-y-hidden">
          Widget powered by Web3Toolkit <br />A Web3 Company
        </h1>
      </div>
    </div>
  );
};

export default CountdownTimer;
