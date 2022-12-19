import React from 'react'
import ef from "../assets/bgs/people.svg"
import doubt from "../assets/bgs/doubt.png"
import otest from "../assets/bgs/onlinetest.png"
import van from "../assets/bgs/van.png"
import mess from "../assets/bgs/mess.svg"
import stu from "../assets/bgs/student.png"
import hostel from "../assets/bgs/hostel.png"

const WhyFeatures = () => {
  return (
    <div className='mt-8'>
      <div className="section flex flex-col md:flex-row whyBg relative border-t-4 border-white ">
        <div className='bg-[#b92f2c] opacity-[0.88] absolute top-0 left-0 h-full w-full'></div>
        <div className="flex flex-col-reverse md:flex-row md:items-center z-30 lg:px-20 lg:gap-8">
          <div className="content text-center md:text-left md:w-3/4 p-6">
            <h2 className='font-serif font-bold text-2xl text-white uppercase'>STUDENT CENTRIC APPROACH</h2>
            <p className='font-sans text-slate-100'>We focus on each and every student differently because each student is unique and has a different level of understanding.We adopt a holistic learning approach which enables the child to not just prepare for the exam but also understand and apply theories & concepts in real life to solve real world problems.</p>
          </div>
          <div className="featureImg grid place-items-center md:mt-0 mt-4">
            <img src={stu} alt="" className='md:w-60 w-36' />
          </div>
        </div>
      </div>

      <div className="section flex flex-col md:flex-row whyBg relative border-t-4 border-white ">
        <div className='bg-[#9a3d37] opacity-[0.88] absolute top-0 left-0 h-full w-full'></div>
        <div className="flex flex-col-reverse md:flex-row-reverse md:items-center z-30 lg:px-20 lg:gap-8">
          <div className="content text-center md:text-left md:w-3/4 p-6">
            <h2 className='font-serif font-bold text-2xl text-white uppercase'>EXPERT Faculty Panel</h2>
            <p className='font-sans text-slate-100'>With faculty who themselves have acheived a lot in the field, from qaulifying JEE-Mains/JEE-Advance, NEET etc. to actual paper setters and evaluators, students are in the right hands. With this level of expertise the concepts will stick with the students and will eventually help them in the long run.</p>
          </div>
          <div className="featureImg grid place-items-center md:mt-0">
            <img src={ef} alt="" className='md:w-60 w-36' />
          </div>
        </div>
      </div>

      <div className="section flex flex-col md:flex-row whyBg relative border-t-4 border-white ">
        <div className='bg-[#b92f2c] opacity-[0.88] absolute top-0 left-0 h-full w-full'></div>
        <div className="flex flex-col-reverse md:flex-row md:items-center z-30 lg:px-20 lg:gap-8">
          <div className="content text-center md:text-left md:w-3/4 p-6">
            <h2 className='font-serif font-bold text-2xl text-white uppercase'>Individual Doubt Clearing Sessions</h2>
            <p className='font-sans text-slate-100'>Doubt is the origin of wisdom. At Gravity Academy, doubts are always entertained. Doubts clearification sessions are conducted to meet every student's queries depending on their level of understanding. </p>
          </div>
          <div className="featureImg grid place-items-center md:mt-0 mt-4">
            <img src={doubt} alt="" className='md:w-48 w-36' />
          </div>
        </div>
      </div>

      <div className="section flex flex-col md:flex-row whyBg relative border-t-4 border-white ">
        <div className='bg-[#9a3d37] opacity-[0.88] absolute top-0 left-0 h-full w-full'></div>
        <div className="flex flex-col-reverse md:flex-row-reverse md:items-center z-30 lg:px-20 lg:gap-8">
          <div className="content text-center md:text-left md:w-3/4 p-6">
            <h2 className='font-serif font-bold text-2xl text-white uppercase'>ONLINE TEST SERIES-PORTAL</h2>
            <p className='font-sans text-slate-100'>In addition to the above, the online test online test series For JEE/NEET/AIPMT is available with more than 1200 test papers to solve along with the data base of more than 1500000 questions on our eduportal Under Concrete test. This provides subject wise preparation, complete test papers based on whole syllabus & are prepared according to actual papers. </p>
          </div>
          <div className="featureImg grid place-items-center md:mt-0 mt-4">
            <img src={otest} alt="" className='md:w-60 w-36' />
          </div>
        </div>
      </div>

      <div className="section flex flex-col md:flex-row whyBg relative border-t-4 border-white ">
        <div className='bg-[#b92f2c] opacity-[0.88] absolute top-0 left-0 h-full w-full'></div>
        <div className="flex flex-col-reverse md:flex-row md:items-center z-30 lg:px-20 lg:gap-8">
          <div className="content text-center md:text-left md:w-3/4 p-6">
            <h2 className='font-serif font-bold text-2xl text-white uppercase'>Van Services Available</h2>
            <p className='font-sans text-slate-100'>Parents don't need to worry about dropping their children to the academy as a full scale Van service is available covering many locations.</p>
          </div>
          <div className="featureImg grid place-items-center md:mt-0 mt-4">
            <img src={van} alt="" className='md:w-60 w-36' />
          </div>
        </div>
      </div>

      <div className="section flex flex-col md:flex-row whyBg relative border-t-4 border-white ">
        <div className='bg-[#9a3d37] opacity-[0.88] absolute top-0 left-0 h-full w-full'></div>
        <div className="flex flex-col-reverse md:flex-row-reverse md:items-center z-30 lg:px-20 lg:gap-8">
          <div className="content text-center md:text-left md:w-3/4 p-6">
            <h2 className='font-serif font-bold text-2xl text-white uppercase'>Hostels</h2>
            <p className='font-sans text-slate-100'>Students need a clam and peace environment to focus on their studies. That's where our fully furnished hostels come into picture. With a clean and safe surrondings, sudents are more likely to be concentrated on their studies.</p>
          </div>
          <div className="featureImg grid place-items-center md:mt-0 mt-4">
            <img src={hostel} alt="" className='md:w-48 w-36 md:p-6' />
          </div>
        </div>
      </div>

      <div className="section flex flex-col md:flex-row whyBg relative border-t-4 border-white ">
        <div className='bg-[#b92f2c] opacity-[0.88] absolute top-0 left-0 h-full w-full'></div>
        <div className="flex flex-col-reverse md:flex-row md:items-center z-30 lg:px-20 lg:gap-8">
          <div className="content text-center md:text-left md:w-3/4 p-6">
            <h2 className='font-serif font-bold text-2xl text-white uppercase'>IN-House Mess</h2>
            <p className='font-sans text-slate-100'>Worried about food. We have got that covered too. We have a IN-House mess service which serves delicous food to the students. This saves time also as the students would not have to leave the hostel to get food.</p>
          </div>
          <div className="featureImg grid place-items-center md:mt-0 mt-4">
            <img src={mess} alt="" className='md:w-60 w-36' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyFeatures




