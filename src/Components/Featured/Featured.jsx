import React from "react";

const Featured = () => {
  return (
    <div className="galaxyImage h-auto">
      <div className="flex flex-col  items-center h-full gap-20 py-20">
        <div className="flex flex-col items-center gap-20">
          <h1 className="text-5xl font-bold text-white overflow-y-hidden">
            FEATURED IN
          </h1>
          <h1 className="text-5xl font-bold text-white overflow-y-hidden ml-10 md:ml-0">
            Multi <span className="gradient-text">Bridge</span> Utility
          </h1>
        </div>
        <div className="flex flex-col md:flex-row px-16 justify-center items-center ">
          <div className="flex flex-col gap-4 items-start w-[350px] md:w-[40%] px-8 py-4 rounded-3xl blurred-background content  border-white border-[1px]">
            <h1 className="text-2xl font-bold text-white ">
              COSMO THE CHAIN HOPPING DOGE
            </h1>
            <p className="text-xl text-white font-semibold">
              Spawned by a collapsing supernova, Cosmo the Doge was born with
              the unique ability to hyperjump between the stars of the crypto
              universe. His time-tested voyages across Ethereum and Solana
              transformed the Doge Meme into a symbol of unity and creativity,
              giving rise to the Dogeverse. Now, Cosmo has discovered a way to
              share his chain-traveling ability so that $DOGEVERSE holders can
              freely traverse the best crypto chains. What a good boy.
            </p>
          </div>
          <svg
            width="80vw"
            height="80vh"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <defs>
              <style>
                {`.cls-1 { fill: none; stroke: #ffff; strokeLinecap: round; strokeMiterlimit: 10; strokeWidth: 2px; }`}
              </style>
            </defs>
            <circle className="cls-1" cx="24" cy="31.12" r="5.86" />
            <path
              className="cls-1"
              d="M25.73,36.72l.19.56a1,1,0,0,0,.91.68H30a1,1,0,0,1,.58,1.76L28,41.59a1,1,0,0,0-.35,1.1l1,3a1,1,0,0,1-1.5,1.09l-2.57-1.87a1,1,0,0,0-1.16,0L20.85,46.8a1,1,0,0,1-1.5-1.09l1-3a1,1,0,0,0-.35-1.1L17.4,39.72A1,1,0,0,1,18,38h3.19a1,1,0,0,0,.91-.68l.19-.56"
            />
            <circle className="cls-1" cx="8" cy="6.03" r="4.79" />
            <path
              className="cls-1"
              d="M9.41,10.61l.15.46a.79.79,0,0,0,.75.55h2.61a.8.8,0,0,1,.47,1.44l-2.11,1.53a.8.8,0,0,0-.29.89L11.8,18a.8.8,0,0,1-1.23.89l-2.1-1.53a.81.81,0,0,0-.94,0l-2.1,1.53A.8.8,0,0,1,4.2,18L5,15.48a.8.8,0,0,0-.29-.89L2.61,13.06a.8.8,0,0,1,.47-1.44H5.69a.79.79,0,0,0,.75-.55l.15-.46"
            />
            <circle className="cls-1" cx="40" cy="6.03" r="4.79" />
            <path
              className="cls-1"
              d="M41.41,10.61l.15.46a.79.79,0,0,0,.75.55h2.61a.8.8,0,0,1,.47,1.44l-2.11,1.53a.8.8,0,0,0-.29.89L43.8,18a.8.8,0,0,1-1.23.89l-2.1-1.53a.81.81,0,0,0-.94,0l-2.1,1.53A.8.8,0,0,1,36.2,18L37,15.48a.8.8,0,0,0-.29-.89l-2.11-1.53a.8.8,0,0,1,.47-1.44h2.61a.79.79,0,0,0,.75-.55l.15-.46"
            />
            <polyline className="cls-1" points="40 17.16 40 42 27.7 42" />
            <line className="cls-1" x1="17" x2="12.09" y1="14" y2="14" />
            <line className="cls-1" x1="35.91" x2="31" y1="14" y2="14" />
            <polyline className="cls-1" points="8 17.16 8 42 20.3 42" />
            <path className="cls-1" d="M24,14a2.1,2.1,0,1,1,2.1-2.1" />
            <path className="cls-1" d="M24,14a2.1,2.1,0,1,1-2.1,2.1" />
            <line className="cls-1" x1="24" x2="24" y1="9" y2="9.8" />
            <line className="cls-1" x1="24" x2="24" y1="19.1" y2="18.2" />
            <circle className="cls-1" cx="24" cy="14" r="7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Featured;
