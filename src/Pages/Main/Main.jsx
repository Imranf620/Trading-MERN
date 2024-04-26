import React from "react";
import Nav from "../../Components/Nav/Nav";
import Multichain from "../../Components/Multichain/Multichain";
import Card from "../../Components/Cards/Card";
import Featured from "../../Components/Featured/Featured";
import MultiCard from "../../Components/MultiCard/MultiCard";
import Footer from "../../Components/Footer/Footer";


const Main = () => {
  return (
    <div className="flex flex-col">
      <Nav />
      <Multichain />
      <Card />
      <Featured/>
      <MultiCard/>

      <Footer/>
    </div>
  );
};

export default Main;
