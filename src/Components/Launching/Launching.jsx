import React, { useContext, useState } from "react";
import ShowContext from "../../context/ShowContext";
import CountdownTimer from "../CountdownTimer/CountdownTimer";

const Launching = () => {

    const {preSail} = useContext(ShowContext)

  const oneDayThreeHoursTwentyFiveMinutesFortyTwoSeconds =
    1 * 3600 * 24 + 3 * 3600 + 25 * 60 + 42;

  const { black } = useContext(ShowContext);
  return (
    <div
      className={`flex flex-col relative  lg:flex-row-reverse gap-10 lg:gap-20 duration-300 items-center ${
        black === true ? "text-white" : "text-black"
      } py-10 px-4`}
    >
      {/* Text Section */}
      <div className="flex flex-col justify-between items-start gap-7 w-full lg:w-1/2">
        <h1 className="text-cyan-300 font-bold text-lg md:text-2xl lg:text-3xl h-max overflow-y-hidden">
          LAUNCHING MINIGAMES SOON
        </h1>
        <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl font-sans h-max overflow-y-hidden">
          First Ever <br /> Discord <br /> NFT
        </h1>
        <p className="text-md md:text-lg lg:text-xl h-max overflow-y-hidden">
          Don't miss out on the Release of our NFT. Sign up to get updates when
          we go live via announcements in our Discord server.
        </p>
        <button className="border-white  rounded py-3 px-6 border-2 font-bold">
          Buy Gen1
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <img
          className="rounded h-[400px] w-full lg:w-[50vw]"
          src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3J5cHRvY3VycmVuY3l8ZW58MHx8MHx8fDA%3D"
          alt="NFT"
        />
      </div>

      
    </div>
  );
};

export default Launching;
