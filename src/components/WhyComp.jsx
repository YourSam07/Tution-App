import React from 'react'
import test from "../assets/bgs/test.png"
import teacher from "../assets/bgs/teacher.png"
import monitor from "../assets/bgs/car.png"
import onetoone from "../assets/bgs/1to1.png"
import { useInView } from 'react-intersection-observer'
import arrow from  "../assets/bgs/swirly-scribbled-arrow.png"
import circle from "../assets/bgs/circle.png"
import circle1 from  "../assets/bgs/circle2.png"
import circle2 from  "../assets/bgs/full-moon.png"


const WhyComp = () => {
  const { ref, inView} = useInView({
    threshold: 0,
    triggerOnce: true
  })
  return (
    <div className='flex flex-col justify-center items-center p-4 mt-4'>
      <div ref={ref} className={inView ? "text-center mb-8 relative aniD1" : "opacity-0"}>
        <p className='md:text-2xl text-xl font-serif'>Why choose</p>
        <h1 className='md:text-[2.5rem] text-3xl font-bold font-serif'>The Gravity Academy?</h1>
        <img src={arrow} alt="arrow" className='absolute top-0 md:-left-[50%] left-0 rotate-45 scale-150'/>        
        <img src={circle} alt="circle" className='absolute lg:left-[150%] md:left-[110%] scale-90 -z-10'/>        
      </div>
      <div className='flex flex-col flex-wrap md:flex-row justify-around mx-0 relative overflow-hidden'>
        <img src={circle1} alt="circle1" className='absolute top-[90%] left-[20%] -z-10' />
        <img src={circle2} alt="circle2" className='absolute top-[90%] left-[75%] -z-10' />
        <div ref={ref} className={inView ? "bg-white rounded-md shadow-lg p-8 w-80 flex flex-col gap-2 m-4  aniBox1" : "opacity-0"}>
          <div><img src={onetoone} alt="one to one" /></div>
          <h2 className='font-bold text-xl'>One to One Doubt Clearance</h2>
          <p>Individula Doubt CLearing Sessions will help students clear their concepts and master them.</p>
        </div>
        <div ref={ref} className={inView ? "bg-white rounded-md shadow-lg p-8 w-80 flex flex-col gap-2 m-4 delay-800 aniBox2" : "opacity-0"}>
          <div><img src={test} alt="test" /></div>
          <h2 className='font-bold text-xl'>Online Test Series Portal</h2>
          <p>online test series For JEE/NEET/AIPMT is available with more than 1200 test papers to solve.</p>
        </div> 
        <div ref={ref} className={inView ? "bg-white rounded-md shadow-lg p-8 w-80 flex flex-col gap-2 m-4 delay-400 aniBox3" : "opacity-0"}>
          <div><img src={teacher} alt="whiteboard" /></div>
          <h2 className='font-bold text-xl'>Experienced Faculty</h2>
          <p>Students will be taught by experienced teachers who have benn in this field for quite some time.</p>
        </div>
        <div ref={ref} className={inView ? "bg-white rounded-md shadow-lg p-8 w-80 flex flex-col gap-2 m-4 delay-600 aniBox4" : "opacity-0"}>
          <div><img src={monitor} alt="price" /></div>
          <h2 className='font-bold text-xl'>Student Monitoring</h2>
          <p>Biometric attendance, CCTV Classroom Surveillance, SMS Alerts, Emails Notifications</p>
        </div>
      </div>
    </div>
  )
}


export default WhyComp