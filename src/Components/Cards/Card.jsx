import React, { useContext } from "react";
import ShowContext from "../../context/ShowContext";

const Card = () => {

  const { black  } = useContext(ShowContext);
  return (
    <div className="h-auto py-24 ">
      <div className={`flex justify-between px-4 flex-wrap md:flex-nowrap gap-10 ${black===true?"text-white":"text-black"} `}>
        <div className="flex flex-col gap-4 items-start w-[400px] px-8 py-4 rounded-3xl blurred-background content  border-white border-[1px]">
          <h1 className="text-2xl font-bold ">COSMO THE CHAIN HOPPING DOGE</h1>
          <p className="text-xl  font-semibold">
            Spawned by a collapsing supernova, Cosmo the Doge was born with the
            unique ability to hyperjump between the stars of the crypto
            universe. His time-tested voyages across Ethereum and Solana
            transformed the Doge Meme into a symbol of unity and creativity,
            giving rise to the Dogeverse. Now, Cosmo has discovered a way to
            share his chain-traveling ability so that $DOGEVERSE holders can
            freely traverse the best crypto chains. What a good boy.
          </p>
        </div>
        <div className={`flex flex-col gap-4 items-start w-[400px] px-8 py-4 rounded-3xl ${black===true?"blurred-background":" border-black border-2"} content  border-white border-[1px]`}>
          <h1 className="text-2xl font-bold  ">COSMO THE CHAIN HOPPING DOGE</h1>
          <p className="text-xl font-semibold">
            Spawned by a collapsing supernova, Cosmo the Doge was born with the
            unique ability to hyperjump between the stars of the crypto
            universe. His time-tested voyages across Ethereum and Solana
            transformed the Doge Meme into a symbol of unity and creativity,
            giving rise to the Dogeverse. Now, Cosmo has discovered a way to
            share his chain-traveling ability so that $DOGEVERSE holders can
            freely traverse the best crypto chains. What a good boy.
          </p>
        </div>
        <div className="flex flex-col gap-4 items-start w-[400px] px-8 py-4 rounded-3xl blurred-background content  border-white border-[1px]">
          <h1 className="text-2xl font-bold  ">COSMO THE CHAIN HOPPING DOGE</h1>
          <p className="text-xl  font-semibold">
            Spawned by a collapsing supernova, Cosmo the Doge was born with the
            unique ability to hyperjump between the stars of the crypto
            universe. His time-tested voyages across Ethereum and Solana
            transformed the Doge Meme into a symbol of unity and creativity,
            giving rise to the Dogeverse. Now, Cosmo has discovered a way to
            share his chain-traveling ability so that $DOGEVERSE holders can
            freely traverse the best crypto chains. What a good boy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
