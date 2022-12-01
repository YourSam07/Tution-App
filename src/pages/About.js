import React from 'react'
import "../index.css"
import Director from "../assets/Director.jpg"
import MDirector from "../assets/Managing Director.jpeg"
import about from "../assets/bgs/about.jpg"
import Quotes from "../assets/bgs/quotes.png"

const About = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex lg:gap-4">
        <div className="lg:flex p-4 scale-85 lg:w-1/3 hidden ">
          <img src={about} alt="about" className='rounded-lg shadow-md hidden lg:block' />
        </div>
        <div className="content lg:w-2/3 p-4 font-serif about">
          <div className="header text-red-500 font-bold text-3xl">The Gravity Academy</div>
          <p className='p-4'>The Gravity Academy is an educational institute thar offers very uniquely designed courses for various Engineering and medical Entrance Exams.</p>
          <div className="flex flex-col">
            <div className='rounded-lg shadow-lg p-8 lg:ml-20 bg-white'>
              We are the fastest & leading institute for the preparation of Entrance Examination of JEE & NEET. The Gravity Academy recognizes and respect the uniqueness of each student. The primary responsibility is to gratify the inner urge of oneself to sincere academic reaction of student and to guide them to entrance examination in each student. Our curriculum skilfully weaves artistic and practical discipline into everyday academics. Students learn to understand the concept of subjects, to think creatively.
            </div>
            <div className='rounded-lg shadow-lg p-8 lg:mr-20 bg-white mt-4'>
              We celebrate diversity and strive to still intergrity, compassion and confidence in each student. We give each aspirant support and encouragement to meet the desire goal. At The Gravity Academy, We are committed to providing a happy, safe and secure environment to realize the dream of our students. Consequently, we have been picting ourselves on our reputation as a dynamic coaching institute as a whole. We encourage the vibrate and energetic students to develop their confidence and love for learning for a bright future in this competitive era.
            </div>
          </div>
        </div>
      </div>
      <div className="misvis h-[700px] relative mt-4">
        <div className='overlay bg-black opacity-60 h-full w-full'></div>
        <div className='flex flex-col justify-center items-center absolute top-0 left-0 h-full w-full px-16'>
          <div className="vision flex">
            <div className="md:flex items-center justify-center text-white font-extrabold text-[3rem] lg:h-[300px] md:w-[350px] lg:w-[400px] hidden">
              Our Vision
            </div>
            <div className="border-4 flex flex-col justify-center border-white p-4 text-white lg:h-[300px] md:w-[350px] lg:w-[400px] text-xl text-center md:grid md:place-items-center">
              <span className='md:hidden text-3xl text-white font-extrabold mb-4'>Our Vision</span>
              To be the best in education sector where best opportunities are made available for students to learn, perform and achieve the uppermost.
            </div>
          </div>
          <div className="mission flex flex-row-reverse mt-6 md:mt-0">
            <div className="md:flex items-center justify-center text-white font-extrabold text-[3rem] lg:h-[300px] md:w-[350px] lg:w-[400px] hidden">
              Our Mission
            </div>
            <div className="border-4 flex flex-col justify-center border-white p-4 text-white lg:h-[300px] md:w-[350px]  lg:w-[400px] text-xl text-center md:grid md:place-items-center">
              <span className='md:hidden text-3xl text-white font-extrabold mb-4'>Our Mission</span>
              Our mission is to provide leadership and inspiration to students to ensure their selection with top ranks in premier egineering and medical college of the country.
            </div>
          </div>
        </div>
      </div>
      <div className="directors p-4 flex flex-col">
        <div className='text-3xl font-bold font-serif text-center'>Desk of Directors</div>
        <div className='flex flex-col xl:flex-row'>
          <div className="data relative xl:flex-1">
            <img src={Quotes} alt="quotes" className='h-16 w-16 absolute -left-5' />
            <div className='p-8'>
              <span className='text-extrabold text-lg'>D</span>ear Students, Welcome to The Gravity Academy ! It is indeed a matter of immense pride that aour student compete at the national and international level for various courses and secure the top position Or adequate source of expert guidance and counsel for aspirants in respective fields cater to a large student community. the young genration will make the future of our country and at The Gravity Academy; we tirelessly put our best endeavours to make the students reach the paramount. the sucess of The Gravity Academy is based on the success of students. We infuse in them the attitude that does not let them settle before mounting the heights of success and deriving the best not only academically but also socially. We believe in innovation and excellence and this is why we are the proven boon to engineering & medical aspirants. Since inceptio, The Gravity Academy has emerged as the most preferred coaching institute for IIT-JEE-AIIMS,JIPMER,KVPY,NITSE, Olymoiads and other entrance exam preparation. We welcome students to come and explore their potential and experience the fun of learning. Dreamimg big, breaking the barries and achieving it the only right path to success! with best wishes, Best Regards !!!
            </div>
          </div>
          <div className="rounded-lg shadow-lg relative h-[450px] w-[350px] overflow-hidden mx-auto xl:order-first">
            <img src={Director} alt="Director" className='h-[450px] w-[350px]' />
            <div className='absolute bottom-0 w-full text-center bg-black opacity-60'>
              <div className='text-3xl text-white'>Mr. Anil Tiwari</div>
              <div className='text-white'>Director</div>
            </div>
          </div>
          <div className="rounded-lg shadow-lg relative h-[450px] w-[350px] overflow-hidden my-8 mx-auto">
            <img src={MDirector} alt="Director" className='h-[450px] w-[350px] hover:scale-105 hover:cursor-pointer' />
            <div className='absolute bottom-0 w-full text-center bg-black opacity-60'>
              <div className='text-3xl text-white'>Mr. Akhilesh Jadhav</div>
              <div className='text-white'>Managing Director</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About