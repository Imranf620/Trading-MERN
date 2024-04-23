import React from "react";

const Footer = () => {
  return (
    <div className="galaxyImage uppercase">
      <footer className="flex flex-col md:flex-row justify-between text-lg md:text-xl lg:text-2xl font-bold text-white px-4 md:px-7 py-14 md:py-28">
        {/* Left section with information */}
        <div className="flex flex-col md:w-1/2 lg:w-2/5 gap-6">
          {/* Main menu links */}
          <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10">
            <div className="flex flex-col">
              <h1>About</h1>
              <h1>How to buy</h1>
              <h1>Roadmap</h1>
              <h1>FAQ</h1>
            </div>
            <div className="flex flex-col">
              <h1>Privacy</h1>
              <h1>Cookies</h1>
              <h1>Terms & Conditions</h1>
            </div>
          </div>
          {/* Brand title */}
          <h1 className="text-center md:text-left">DOGEVERSE</h1>
        </div>

        {/* Right section with contact and disclaimer */}
        <div className="flex flex-col md:w-1/2 lg:w-2/5 gap-6">
          {/* Contact information */}
          <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10">
            <div className="flex flex-col">
              <h1>My 'Dogeverse' Office Panamá</h1>
              <h1>My 'Dogeverse' Office Panamá</h1>
              <h1>My 'Dogeverse' Office Panamá</h1>
              <h1>My 'Dogeverse' Office Panamá</h1>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="text-sm flex flex-col gap-4 text-center md:text-left">
            <span>COPYRIGHT 2024 DOGEVERSE. ALL RIGHTS RESERVED.</span>
            <span>
              DISCLAIMER: DOGEVERSE IS A MEME COIN WITH SPECULATIVE VALUE DERIVED ONLY FROM THE UNIVERSAL CULTURAL CAPITAL OF THE DOGE MEME.
            </span>
            <span>
              CRYPTO PRICES FLUCTUATE WILDLY. APE RESPONSIBLY.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
