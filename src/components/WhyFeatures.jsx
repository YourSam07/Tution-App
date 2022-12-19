import React from 'react'
import f1 from "../assets/bgs/scentric.png"
import ef from "../assets/bgs/people.svg"
import doubt from "../assets/bgs/doubt.png"

const WhyFeatures = () => {
  return (
    <div className='mt-8'>
      <div className="section flex flex-col md:flex-row whyBg relative border-t-4 border-white ">
        <div className='bg-red-500 opacity-[0.88] absolute top-0 left-0 h-full w-full'></div>
        <div className="flex flex-col md:flex-row z-30 lg:px-20 lg:gap-8">
          <div className="content text-center md:text-left md:w-3/4 p-6">
          <h2 className='font-serif font-bold text-2xl text-white uppercase'>STUDENT CENTRIC APPROACH</h2>
            <p className='font-sans text-slate-200'>We focus on each and every student differently because each student is unique and has a different level of understanding.We adopt a holistic learning approach which enables the child to not just prepare for the exam but also understand and apply theories & concepts in real life to solve real world problems.</p>
          </div>
          <div className="featureImg grid place-items-center md:mt-0 mt-4">
            <img src={f1} alt="" className='h-[20vh] w-[15vw]'/>
          </div>
        </div>
      </div>

      <div className="section flex flex-col md:flex-row whyBg relative border-t-4 border-white ">
        <div className='bg-red-500 opacity-[0.88] absolute top-0 left-0 h-full w-full'></div>
        <div className="flex flex-col md:flex-row-reverse z-30 lg:px-20 lg:gap-8">
          <div className="content text-center md:text-left md:w-3/4 p-6">
            <h2 className='font-serif font-bold text-2xl text-white uppercase'>EXPERT Faculty Panel</h2>
            <p className='font-sans text-slate-200'>With faculty who themselves have acheived a lot in the field, from qaulifying JEE-Mains/JEE-Advance, NEET etc. to actual paper setters and evaluators, students are in the right hands. With this level of expertise the concepts will stick with the students and will eventually help them in the long run.</p>
          </div>
          <div className="featureImg grid place-items-center md:mt-0">
            <img src={ef} alt="" className="w-40"/>
          </div>
        </div>
      </div>

      <div className="section flex flex-col md:flex-row whyBg relative border-t-4 border-white ">
        <div className='bg-red-500 opacity-[0.88] absolute top-0 left-0 h-full w-full'></div>
        <div className="flex flex-col md:flex-row z-30 lg:px-20 lg:gap-8">
          <div className="content text-center md:text-left md:w-3/4 p-6">
            <h2 className='font-serif font-bold text-2xl text-white uppercase'>Individual Doubt Clearing Sessions</h2>
            <p className='font-sans text-slate-200'>Doubt is the origin of wisdom. At Gravity Academy, doubts are always entertained. Doubts clearification sessions are conducted to meet every student's queries depending on their level of understanding. </p>
          </div>
          <div className="featureImg grid place-items-center md:mt-0 mt-4">
            <img src={doubt} alt="" className='w-24'/>
          </div>
        </div>
      </div>
      
      <div className="section flex flex-col md:flex-row whyBg relative border-t-4 border-white ">
        <div className='bg-red-500 opacity-[0.88] absolute top-0 left-0 h-full w-full'></div>
        <div className="flex flex-col md:flex-row z-30 lg:px-20 lg:gap-8">
          <div className="content text-center md:text-left md:w-3/4 p-6">
            <h2 className='font-serif font-bold text-2xl text-white uppercase'>ONLINE TEST SERIES-PORTAL</h2>
            <p className='font-sans text-slate-200'>In addition to the above, the online test online test series For JEE/NEET/AIPMT is available with more than 1200 test papers to solve along with the data base of more than 1500000 questions on our eduportal Under Concrete test. This provides subject wise preparation, complete test papers based on whole syllabus & are prepared according to actual papers. </p>
          </div>
          <div className="featureImg grid place-items-center md:mt-0 mt-4">
            <img src={doubt} alt="" className='w-24'/>
          </div>
        </div>
      </div>
      
      <div className="section flex flex-col md:flex-row whyBg relative border-t-4 border-white ">
        <div className='bg-red-500 opacity-[0.88] absolute top-0 left-0 h-full w-full'></div>
        <div className="flex flex-col md:flex-row z-30 lg:px-20 lg:gap-8">
          <div className="content text-center md:text-left md:w-3/4 p-6">
            <h2 className='font-serif font-bold text-2xl text-white uppercase'>Individual Doubt Clearing Sessions</h2>
            <p className='font-sans text-slate-200'>Doubt is the origin of wisdom. At Gravity Academy, doubts are always entertained. Doubts clearification sessions are conducted to meet every student's queries depending on their level of understanding. </p>
          </div>
          <div className="featureImg grid place-items-center md:mt-0 mt-4">
            <img src={doubt} alt="" className='w-24'/>
          </div>
        </div>
      </div>




    </div>
  )
}

export default WhyFeatures




