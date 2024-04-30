import React, { useContext, useEffect } from "react";
import Nav from "../../Components/Nav/Nav";
import Multichain from "../../Components/Multichain/Multichain";
import Card from "../../Components/Cards/Card";
import Featured from "../../Components/Featured/Featured";
import MultiCard from "../../Components/MultiCard/MultiCard";
import Footer from "../../Components/Footer/Footer";
import ShowContext from "../../context/ShowContext";
import axios from "axios"


const Main = () => {
  
  
  const {handleShow, black} = useContext(ShowContext)


  // useEffect(() => {
  //   const enableKeplr = async () => {
  //     try {
  //       await window.keplr.enable(chainId);
  //       console.log('Keplr is enabled');
  //     } catch (error) {
  //       console.error('Error enabling Keplr:', error);
  //     }
  //   };
  
  //   enableKeplr();
  // }, []);

  
  // const getAddress = async () => {
  //   try {
  //     const offlineSigner = window.getOfflineSigner(chainId);
  //     const accounts = await offlineSigner.getAccounts();
  //     const address = accounts[0].address;
  //     console.log('User Address:', address);
  //   } catch (error) {
  //     console.error('Error getting address:', error);
  //   }
  // };
  
  // Call getAddress function wherever needed
  

  
  return (
    <div className={`flex px-12 flex-col ${black === true ?'bg-[#20202B]':'bg-white' }`} >
      <Nav />
      <Multichain />
      <Card />
    

      <Footer/>
    </div>
  );
};

export default Main;
