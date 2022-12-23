import React from 'react'
import ntse from "../assets/bgs/ntse.png"
import iit from "../assets/bgs/Iit.png"
import mhtcet from "../assets/bgs/mhtcet.png"
import nda from "../assets/bgs/nda.png"
import neet from "../assets/bgs/neet.png"
import circle3 from "../assets/bgs/circle3.png"

import { useInView } from "react-intersection-observer"

const Courses = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  })
  return (
    <div ref={ref} className='text-center lg:px-12 mb-10 relative'>
      <img src={circle3} alt="circle3" className='absolute left-[37%] top-[50%] -z-10' />
      <p className='md:text-2xl text-xl font-serif text-amber-400 font-bold'>UPSKILL YOUR CAREER IN</p>
      <h1 className='md:text-[2.5rem] text-3xl font-extrabold font-serif'>ENGINEERING, MEDICAL & FOUNDATION</h1>
      {/* <h1 className={inView ? "font-bold md:text-[2.5rem] text-3xl font-serif mb-8 ani" : "opacity-0"}>UPSKILL YOUR CAREER IN ENGINEERING, MEDICAL & FOUNDATION</h1> */}
      <div className="flex flex-wrap gap-12 justify-center items-center md:items-end overflow-hidden mt-12">
        <div className={inView ? "p-4 px-16 bg-white rounded-md shadow-lg grid place-items-center mb-4 aniBox1" : "opacity-0"}>
          <img src={ntse} alt="" className='' />
          <h2 className='font-bold font-sans text-2xl'>NTSE</h2>
        </div>
        <div className={inView ? "p-4 px-16 bg-white rounded-md shadow-lg grid place-items-center mb-4 aniBox2" : "opacity-0"}>
          <img src={iit} alt="" className='' />
          <h2 className='font-bold font-sans text-2xl'>IIT-JEE</h2>
        </div>
        <div className={inView ? "p-4 px-16 bg-white rounded-md shadow-lg grid place-items-center mb-4 aniBox3" : "opacity-0"}>
          <img src={neet} alt="" className='' />
          <h2 className='font-bold font-sans text-2xl'>NEET</h2>
        </div>
        <div className={inView ? "p-4 px-16 bg-white rounded-md shadow-lg grid place-items-center mb-4 aniBox4" : "opacity-0"}>
          <img src={nda} alt="" className='' />
          <h2 className='font-bold font-sans text-2xl'>NDA</h2>
        </div>
        <div className={inView ? "p-4 px-16 bg-white rounded-md shadow-lg grid place-items-center mb-4 aniBox6" : "opacity-0"}>
          <img src={mhtcet} alt="" className='' />
          <h2 className='font-bold font-sans text-2xl'>MHTCET</h2>
        </div>
      </div>
    </div>
  )
}

export default Courses