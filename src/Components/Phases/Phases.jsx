import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useLocation } from 'react-router-dom'

const Phases = () => {

    const location  = useLocation()
    console.log(location.state)
  return (
    <div className='galaxyImage h-auto'>
        <div className='bg-[#20202B]'>

        <Navbar/>
        </div>
        <div className='flex flex-col px-8  gap-24 md:gap-10px py-14  ' >
            <h1 className='text-white font-black text-5xl text-center h-max overflow-y-hidden'>Road Map</h1>
            <div className='flex flex-col gap-1 items-start'>
                <h1 className='text-2xl font-bold text-white'>Phase 2: Development</h1>
                <ul className='list-disc ml-4'>
                    <li className='text-2xl font-semibold text-white'>Contact Audit</li>
                    <li className='text-2xl font-semibold text-white'>Presale Begins</li>
                    <li className='text-2xl font-semibold text-white'>Community Building</li>
                </ul>
            </div>
            <div className='flex flex-col gap-1 items-center'>
                <h1 className='text-2xl font-bold text-white'>Phase 2: Development</h1>
                <ul className='list-disc ml-4'>
                    <li className='text-2xl font-semibold text-white'>Contact Audit</li>
                    <li className='text-2xl font-semibold text-white'>Presale Begins</li>
                    <li className='text-2xl font-semibold text-white'>Community Building</li>
                </ul>
            </div>
            <div className='flex flex-col gap-1 items-end'>
                <h1 className='text-2xl font-bold text-white'>Phase 2: Development</h1>
                <ul className='list-disc ml-4'>
                    <li className='text-2xl font-semibold text-white'>Contact Audit</li>
                    <li className='text-2xl font-semibold text-white'>Presale Begins</li>
                    <li className='text-2xl font-semibold text-white'>Community Building</li>
                </ul>
            </div>
            <div className='flex flex-col gap-1  items-start'>
                <h1 className='text-2xl font-bold text-white'>Phase 2: Development</h1>
                <ul className='list-disc ml-4'>
                    <li className='text-2xl font-semibold text-white'>Contact Audit</li>
                    <li className='text-2xl font-semibold text-white'>Presale Begins</li>
                    <li className='text-2xl font-semibold text-white'>Community Building</li>
                </ul>
            </div>
            <div className='flex flex-col gap-1 items-center'>
                <h1 className='text-2xl font-bold text-white'>Phase 2: Development</h1>
                <ul className='list-disc ml-4'>
                    <li className='text-2xl font-semibold text-white'>Contact Audit</li>
                    <li className='text-2xl font-semibold text-white'>Presale Begins</li>
                    <li className='text-2xl font-semibold text-white'>Community Building</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Phases