import React, { useContext, useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Launching from '../../Components/Launching/Launching'
import Social from '../../Components/Social/Social'
import ShowContext from '../../context/ShowContext'


const Home = () => {

     
 
  
  const { black } = useContext(ShowContext);
  return (
    <div className={`${black === true ?'bg-gray-800':'bg-white' } px-12 home`}>
        <Navbar />
        <hr className={`h-1 bg-black border-none w-full `} />
        <Launching />
        <hr className="h-1 bg-black border-none w-full " />
        <Social />

     
    </div>
  )
}

export default Home