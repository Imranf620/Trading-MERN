import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Multichain = () => {
  return (
    <div className="h-auto py-16 galaxyImage flex justify-center items-center  ">
      <div className="blurred-background rounded-3xl  ">
        <div className="flex flex-col justify-between  gap-6 items-center content">
          <h1 className="text-4xl font-bold h-max overflow-y-hidden text-white">
            DOGE GOES MULTICHAIN
          </h1>
          <h1 className="text-white text-3xl font-semibold overflow-hidden">
            Buy and claim <span className="gradient-text">$DOGEVERSE</span> on
            any of these chains
          </h1>
          <div>
            <div className="flex justify-between flex-wrap gap-6 items-center">
              <div className="flex-col relative py-3 overflow-hidden ">
                <FontAwesomeIcon
                  icon={faEthereum}
                  className="text-8xl  bg-black text-white rounded-[100%] w-32 h-32"
                />
                <div className="flex  items-center bg-white rounded-xl w-min px-2 absolute -bottom-1 left-7 ">
                  <FontAwesomeIcon
                    className="text-green-600 text-xs"
                    icon={faDotCircle}
                  />
                  <span className="text-black font-bold">Active</span>
                </div>
              </div>
              <div className="flex-col relative py-3 overflow-hidden ">
                <FontAwesomeIcon
                  icon={faEthereum}
                  className="text-8xl  bg-black text-white rounded-[100%] w-32 h-32"
                />
                <div className="flex  items-center bg-white rounded-xl w-min px-2 absolute -bottom-1 left-7 ">
                  <FontAwesomeIcon
                    className="text-green-600 text-xs"
                    icon={faDotCircle}
                  />
                  <span className="text-black font-bold">Active</span>
                </div>
              </div>
              <div className="flex-col relative py-3 overflow-hidden ">
                <FontAwesomeIcon
                  icon={faEthereum}
                  className="text-8xl  bg-black text-white rounded-[100%] w-32 h-32"
                />
                <div className="flex  items-center bg-white rounded-xl w-min px-2 absolute -bottom-1 left-7 ">
                  <FontAwesomeIcon
                    className="text-green-600 text-xs"
                    icon={faDotCircle}
                  />
                  <span className="text-black font-bold">Active</span>
                </div>
              </div>
              <div className="flex-col relative py-3 overflow-hidden ">
                <FontAwesomeIcon
                  icon={faEthereum}
                  className="text-8xl  bg-black text-white rounded-[100%] w-32 h-32"
                />
                <div className="flex  items-center bg-white rounded-xl w-min px-2 absolute -bottom-1 left-7 ">
                  <FontAwesomeIcon
                    className="text-green-600 text-xs"
                    icon={faDotCircle}
                  />
                  <span className="text-black font-bold">Active</span>
                </div>
              </div>
              <div className="flex-col relative py-3 overflow-hidden ">
                <FontAwesomeIcon
                  icon={faEthereum}
                  className="text-8xl  bg-black text-white rounded-[100%] w-32 h-32"
                />
                <div className="flex  items-center bg-white rounded-xl w-min px-2 absolute -bottom-1 left-7 ">
                  <FontAwesomeIcon
                    className="text-green-600 text-xs"
                    icon={faDotCircle}
                  />
                  <span className="text-black font-bold">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Multichain;
