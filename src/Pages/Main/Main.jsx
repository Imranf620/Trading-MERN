import React, { useContext } from "react";
import Nav from "../../Components/Nav/Nav";
import Multichain from "../../Components/Multichain/Multichain";
import Card from "../../Components/Cards/Card";
import Featured from "../../Components/Featured/Featured";
import MultiCard from "../../Components/MultiCard/MultiCard";
import Footer from "../../Components/Footer/Footer";
import ShowContext from "../../context/ShowContext";


const Main = () => {
  
  
  const {handleShow, black} = useContext(ShowContext)

  
  return (
    <div className={`flex flex-col ${black === true ?'bg-[#20202B]':'bg-white' }`} >
      <Nav />
      <Multichain />
      <Card />
    

      <Footer/>
    </div>
  );
};

export default Main;
