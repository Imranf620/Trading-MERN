import React from "react";
import Nav from "../../Components/Nav/Nav";
import Multichain from "../../Components/Multichain/Multichain";
import Card from "../../Components/Cards/Card";
import Featured from "../../Components/Featured/Featured";
import Phases from "../../Components/Phases/Phases";
import MultiCard from "../../Components/MultiCard/MultiCard";
import Footer from "../../Components/Footer/Footer";
import Faqs from "../../Components/Faqs/Faqs"

const Main = () => {
  return (
    <div className="flex flex-col">
      <Nav />
      <Multichain />
      <Card />
      <Featured/>
      <Phases/>
      <MultiCard/>
      <Faqs/>
      <Footer/>
    </div>
  );
};

export default Main;
