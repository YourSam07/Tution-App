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
    <div ref={ref} className='flex flex-col justify-center items-center p-4 mt-4'>
      <div   className={inView ? "text-center mb-8 relative aniD1" : "opacity-0"}>
        <p className='md:text-2xl text-xl font-serif text-amber-400 font-bold'>Why choose</p>
        <h1 className='md:text-[2.5rem] text-3xl font-extrabold font-serif'>The Gravity Academy?</h1>
        <img src={arrow} alt="arrow" className='absolute top-0 md:-left-[50%] left-0 rotate-45 scale-150 hidden sm:block'/>        
        <img src={circle} alt="circle" className='absolute lg:left-[140%] md:left-[110%] scale-90'/>        
      </div>
      <div className='pb-12 flex flex-col flex-wrap md:flex-row justify-around mx-0 relative overflow-hidden'>
        <img src={circle1} alt="circle1" className='absolute top-[75%] left-[20%]' />
        <img src={circle2} alt="circle2" className='absolute top-[70%] left-[75%]' />
        <div   className={inView ? "bg-white rounded-md shadow-lg z-10 p-8 w-80 flex flex-col gap-2 m-4  aniBox1" : "opacity-0"}>
          <div><img src={onetoone} alt="one to one" /></div>
          <h2 className='font-bold text-xl'>One to One Doubt Clearance</h2>
          <p>Individula Doubt CLearing Sessions will help students clear their concepts and master them.</p>
        </div>
        <div   className={inView ? "bg-white rounded-md shadow-lg z-10 p-8 w-80 flex flex-col gap-2 m-4 delay-800 aniBox2" : "opacity-0"}>
          <div><img src={test} alt="test" /></div>
          <h2 className='font-bold text-xl'>Online Test Series Portal</h2>
          <p>Apart from Offline Tests, Online test series For JEE/NEET/AIPMT is available with more than 1200 test papers to solve.</p>
        </div> 
        <div   className={inView ? "bg-white rounded-md shadow-lg z-10 p-8 w-80 flex flex-col gap-2 m-4 delay-400 aniBox3" : "opacity-0"}>
          <div><img src={teacher} alt="whiteboard" /></div>
          <h2 className='font-bold text-xl'>Experienced Faculty</h2>
          <p>Students will be taught by experienced teachers who have benn in this field for quite some time.</p>
        </div>
        <div   className={inView ? "bg-white rounded-md shadow-lg z-10 p-8 w-80 flex flex-col gap-2 m-4 delay-600 aniBox4" : "opacity-0"}>
          <div><img src={monitor} alt="price" /></div>
          <h2 className='font-bold text-xl'>Student Monitoring</h2>
          <p>Biometric attendance, CCTV Classroom Surveillance, SMS Alerts, Emails Notifications</p>
        </div>
      </div>
    </div>
  )
}


export default WhyComp