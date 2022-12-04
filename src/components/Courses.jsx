import React from 'react'
import ntse from "../assets/bgs/ntse.png"
import iit from "../assets/bgs/Iit.png"
import kvpy from "../assets/bgs/kvpy.png"
import mhtcet from "../assets/bgs/mhtcet.png"
import nda from "../assets/bgs/nda.png"
import neet from "../assets/bgs/neet.png"
import circle3 from "../assets/bgs/circle3.png"

const Courses = () => {
  return (
    <div className='text-center lg:px-12 my-10 relative '>
      <img src={circle3} alt="circle3" className='absolute left-[37%] top-[50%] -z-10'/>
      <h1 className="font-bold text-3xl font-serif mb-8">Courses Taught</h1>
      <div className="flex flex-wrap gap-12 justify-center items-center md:items-end">
        <div className="p-4 px-16 bg-white rounded-md shadow-lg grid place-items-center">
          <img src={ntse} alt="" className=''/>
          <h2 className='font-bold font-sans text-2xl'>NTSE</h2>
        </div>
        <div className="p-4 px-16 bg-white rounded-md shadow-lg grid place-items-center">
          <img src={iit} alt="" className=''/>
          <h2 className='font-bold font-sans text-2xl'>IIT-JEE</h2>
        </div>
        <div className="p-4 px-16 bg-white rounded-md shadow-lg grid place-items-center">
          <img src={neet} alt="" className=''/>
          <h2 className='font-bold font-sans text-2xl'>NEET</h2>
        </div>
        <div className="p-4 px-16 bg-white rounded-md shadow-lg grid place-items-center">
          <img src={nda} alt="" className=''/>
          <h2 className='font-bold font-sans text-2xl'>NDA</h2>
        </div>
        <div className="p-4 px-16 bg-white rounded-md shadow-lg grid place-items-center">
          <img src={kvpy} alt="" className=''/>
          <h2 className='font-bold font-sans text-2xl'>KVPY</h2>
        </div>
        <div className="p-4 px-16 bg-white rounded-md shadow-lg grid place-items-center">
          <img src={mhtcet} alt="" className=''/>
          <h2 className='font-bold font-sans text-2xl'>MHTCET</h2>
        </div>
      </div>
    </div>
  )
}

export default Courses