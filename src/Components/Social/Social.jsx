import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import ShowContext from "../../context/ShowContext";

const Social = () => {
  
  const { black } = useContext(ShowContext);
  return (
    <div className={`${black === true?"text-white":"text-black"} duration-300 flex flex-col items-center gap-11 py-11 px-4 md:px-8 lg:px-12`}>
      {/* Socials Header */}
      <h1 className="text-3xl font-semibold h-max overflow-y-hidden">Socials</h1>
      <h1 className="text-xl text-center h-max overflow-y-hidden">
        You can navigate through our socials by clicking on these icons.
      </h1>

      {/* Social Images */}
      <div className="flex flex-wrap justify-center gap-5 lg:gap-16 items-center h-60 w-full lg:w-10/12">
        <img
          className="w-28 h-20 lg:w-36 lg:h-28 rounded-2xl hover:scale-125 transition duration-500"
          src="https://www.discordels.xyz/Graphics/twitter.jpg"
          alt="Twitter"
        />
        <img
          className="w-28 h-20 lg:w-36 lg:h-28 rounded-2xl hover:scale-125 transition duration-500"
          src="https://pbs.twimg.com/profile_images/1389244283748823046/sOY6n24s_400x400.jpg"
          alt="Twitter Profile"
        />
        <img
          className="w-28 h-20 lg:w-36 lg:h-28 rounded-2xl hover:scale-125 transition duration-500"
          src="https://www.discordels.xyz/Graphics/discord-logo-3d-social-media-icon-isolated_47987-11941.jpg"
          alt="Discord"
        />
        <img
          className="w-28 h-20 lg:w-36 lg:h-28 rounded-2xl hover:scale-125 transition duration-500"
          src="https://www.discordels.xyz/Graphics/roadmap.jpg"
          alt="Roadmap"
        />
      </div>

      {/* See All Projects Button */}
      <button className={` font-bold text-2xl duration-300  px-4 py-3 ${black ===true?'bg-black text-[white]':"bg-white text-black"} rounded`}>
        See All Projects Link
      </button>

      {/* Sneak Peaks */}
      <h1 className="text-5xl font-bold text-cyan-300 h-max overflow-y-hidden">Sneak Peaks</h1>
      <p className="text-xl text-center text-cyan-300 px-4 md:px-8 lg:px-12 h-max overflow-y-hidden">
        Here are some Discordels NFT Character Sneak Peaks. You can get a free lands NFT if you hold one.
      </p>

      {/* Navigation for Sneak Peaks */}
      <div className="flex flex-wrap justify-center items-center gap-5 w-full lg:w-auto">
        <FontAwesomeIcon
          className="text-4xl border-2 border-white rounded-2xl p-2"
          icon={faArrowLeft}
        />
        <img
          className="w-1/3 lg:w-1/4 rounded-2xl"
          src="https://images.unsplash.com/photo-1621501011941-c8ee93618c9a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNyeXB0b2N1cnJlbmN5fGVufDB8fDB8fHww"
          alt="NFT 1"
        />
        <img
          className="w-1/3 lg:w-1/4 rounded-2xl"
          src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNyeXB0b2N1cnJlbmN5fGVufDB8fDB8fHww"
          alt="NFT 2"
        />
        <img
          class="w-1/3 lg:w-1/4 rounded-2xl"
          src="https://images.unsplash.com/photo-1608603742375-4ec9f53da578?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGNyeXB0b2N1cnJlbmN5fGVufDB8fDB8fHww"
          alt="NFT 3"
        />
        <FontAwesomeIcon
          className="text-4xl border-2 border-white rounded-2xl p-2"
          icon={faArrowRight}
        />
      </div>

      {/* Buy Now Button */}
      <button className={`w-full duration-300 ${black===true?'bg-black text-white':"bg-white text-black"}  py-4 rounded-xl font-black`}>
        -------Buy Now-------
      </button>

      {/* Final Section */}
      <div className={`flex flex-col-reverse lg:flex-row-reverse gap-10 items-center duration-300 ${black ===true ?'text-white' :"text-black"} py-10`}>
        <div className="flex flex-col justify-between items-start gap-7 w-full lg:w-1/2">
          <h1 className="text-cyan-300 font-semibold h-max overflow-y-hidden">DISCORDELS LANDS</h1>
          <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl flex-wrap font-sans h-max overflow-y-hidden">
            First Ever Land NFT on INJ
          </h1>
          <p className="text-xl h-max overflow-y-hidden">
            "Poor Discordels are homeless for now! 😢 They're searching for a home, and that's where Discordels Land comes in – their cozy living space! 🏠"
          </p>
          <button className="border-white  rounded py-3 px-6 border-2 font-bold">
          Buy Gen1
        </button>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            className="rounded h-[420px] w-full lg:w-[50vw]"
            src="https://images.unsplash.com/photo-1506555191898-a76bacf004ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGNyeXB0b2N1cnJlbmN5fGVufDB8fDB8fHww"
            alt="Discordels Lands"
          />
        </div>
      </div>
    </div>
  );
};

export default Social;
