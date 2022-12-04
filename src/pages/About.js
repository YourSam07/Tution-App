import React from 'react'
import "../index.css"
import Director from "../assets/images/Director.jpg"
import MDirector from "../assets/images/Managing Director.jpeg"
import teamwork from "../assets/bgs/teamwork1.png"
import Quotes from "../assets/bgs/quotes.png"
import woman from "../assets/bgs/woman1.png"
import arrow from "../assets/bgs/arrow.png"
import shiny from "../assets/bgs/shining.png"
import circle from "../assets/bgs/circle.png"
import circle2 from "../assets/bgs/circle2.png"
import circle3 from "../assets/bgs/circle3.png"
import vision from "../assets/bgs/vision.png"
import mission from "../assets/bgs/mission2.png"
// import star from "../assets/bgs/stars1.png"
import { useInView } from 'react-intersection-observer'

const About = () => {
  const { ref, inView} = useInView({
    threshold: 0,
    triggerOnce: true
  })

  return (
    <div className="flex flex-col ">
      <div className="p-4 flex lg:gap-4 items-center lg:min-h-[90vh] lg:flex-row flex-col">
        <div className="content lg:w-2/3 NNmd:p-8 p-4 font-serif relative">
          <img src={arrow} alt="arrow" className='absolute top-36 rotate-45' />
          <div ref={ref} className={inView ? "font-bold text-2xl uppercase text-amber-400 font-sans aniD2" : null}>About Us</div>
          <p ref={ref} className={inView ? "aniD1" : ""}><span ref={ref} className={inView ? 'font-bold font-serif text-xl ani' : ""}>The Gravity Academy</span> is an educational institute thar offers very uniquely designed courses for various Engineering and medical Entrance Exams.</p>
          <div className="flex flex-col relative">
            <img src={circle} alt="circle" className='absolute -right-5 -top-5 -z-10' />
            <div ref={ref} className={inView ? 'rounded-lg shadow-lg p-8 lg:ml-20 bg-white aniBox1' : 'hidden'}>
              We are the fastest & leading institute for the preparation of Entrance Examination of JEE & NEET. The Gravity Academy recognizes and respect the uniqueness of each student. The primary responsibility is to gratify the inner urge of oneself to sincere academic reaction of student and to guide them to entrance examination in each student. Our curriculum skilfully weaves artistic and practical discipline into everyday academics. Students learn to understand the concept of subjects, to think creatively.
            </div>
            <div ref={ref} className={inView ? 'rounded-lg shadow-lg p-8 lg:mr-20 bg-white mt-4 aniBox2' : 'hidden'}>
              We celebrate diversity and strive to still intergrity, compassion and confidence in each student. We give each aspirant support and encouragement to meet the desire goal. At The Gravity Academy, We are committed to providing a happy, safe and secure environment to realize the dream of our students. Consequently, we have been picting ourselves on our reputation as a dynamic coaching institute as a whole. We encourage the vibrate and energetic students to develop their confidence and love for learning for a bright future in this competitive era.
            </div>
          </div>
        </div>
        <div ref={ref} className={inView ? "flex justify-center items-center rounded-lg shadow-lg relative bg-gradient-to-tr from-cyan-50 to-cyan-500 h-[400px] w-[400px] aniBox7 md:mb-0 mb-8" : ""}>
          <img src={shiny} alt="shiny" className='absolute -top-3 -right-3 ' />
          <img src={teamwork} alt="teamwork" className='border-8 border-white rounded-full absolute -bottom-16 -left-8 lg:h-44 lg:w-44 sm:h-36 sm:w-36 h-44 w-44' />
          <img src={woman} alt="about" className='object-contain lg:flex h-[400px] w-[400px]' />
        </div>
      </div>

      <div className='flex flex-col p-8 lg:px-40 justify-center'>
        <div className="flex flex-col gap-6 sm:flex-row items-center">
          <div className='relative'>
            {/* <img src={star} alt="star" className='absolute right-0 -top-10'/> */}
            <img src={vision} alt="vision" className='sm:w-[80%]' />
          </div>
          <div className='relative'>
            <img src={circle2} alt="circle2" className='absolute -z-10 right-0' />
            <h1 className='text-amber-400 font-sans font-bold text-3xl'>Our Mission</h1>
            <p className='font-serif'>To be the best in education sector where best opportunities are made available for students to learn, perform and achieve the uppermost.</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row-reverse gap-6 items-center justify-center">
          <div className='relative'>
            {/* <img src={star} alt="star" className='absolute right-0 -top-10'/> */}
            <img src={mission} alt="vision" className='sm:w-[70%]' />
          </div>
          <div className='relative'>
            <img src={circle3} alt="circle3" className='absolute -z-10 right-0' />
            <h1 className='text-amber-400 font-sans font-bold text-3xl'>Our Vision</h1>
            <p className='font-serif'>Our mission is to provide leadership and inspiration to students to ensure their selection with top ranks in premier egineering and medical college of the country.</p>
          </div>
          </div>
      </div>



      <div className="directors p-4 flex flex-col">
        <div className='text-3xl font-bold font-serif text-center'>Desk of Directors</div>
        <div className='flex flex-col xl:flex-row'>
          <div className="data relative xl:flex-1">
            <img src={Quotes} alt="quotes" className='h-36 w-36 absolute -left-2 -top-5 opacity-30' />
            <div className='p-8'>
              <span className='text-extrabold text-lg'>D</span>ear Students, Welcome to The Gravity Academy ! It is indeed a matter of immense pride that aour student compete at the national and international level for various courses and secure the top position Or adequate source of expert guidance and counsel for aspirants in respective fields cater to a large student community. the young genration will make the future of our country and at The Gravity Academy; we tirelessly put our best endeavours to make the students reach the paramount. the sucess of The Gravity Academy is based on the success of students. We infuse in them the attitude that does not let them settle before mounting the heights of success and deriving the best not only academically but also socially. We believe in innovation and excellence and this is why we are the proven boon to engineering & medical aspirants. Since inceptio, The Gravity Academy has emerged as the most preferred coaching institute for IIT-JEE-AIIMS,JIPMER,KVPY,NITSE, Olymoiads and other entrance exam preparation. We welcome students to come and explore their potential and experience the fun of learning. Dreamimg big, breaking the barries and achieving it the only right path to success! with best wishes, Best Regards !!!
            </div>
            <img src={Quotes} alt="quotes" className='h-36 w-36 absolute lg:right-20 lg:bottom-20 right-0 bottom-0 opacity-30 rotate-180' />
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

  // < div className = "relative mt-4" >
  //       <div className='overlay bg-black opacity-60 h-full w-full'></div>
  //       <div className='flex flex-col justify-center items-center absolute top-0 left-0 h-full w-full px-16'>
  //         <div className="vision flex">
  //           <div className="md:flex items-center justify-center text-white font-extrabold text-[3rem] lg:h-[300px] md:w-[350px] lg:w-[400px] hidden">
  //             Our Vision
  //           </div>
  //           <div className="border-4 flex flex-col justify-center border-white p-4 text-white lg:h-[300px] md:w-[350px] lg:w-[400px] text-xl text-center md:grid md:place-items-center">
  //             <span className='md:hidden text-3xl text-white font-extrabold mb-4'>Our Vision</span>
  //             To be the best in education sector where best opportunities are made available for students to learn, perform and achieve the uppermost.
  //           </div>
  //         </div>
  //         <div className="mission flex flex-row-reverse mt-6 md:mt-0">
  //           <div className="md:flex items-center justify-center text-white font-extrabold text-[3rem] lg:h-[300px] md:w-[350px] lg:w-[400px] hidden">
  //             Our Mission
  //           </div>
  //           <div className="border-4 flex flex-col justify-center border-white p-4 text-white lg:h-[300px] md:w-[350px]  lg:w-[400px] text-xl text-center md:grid md:place-items-center">
  //             <span className='md:hidden text-3xl text-white font-extrabold mb-4'>Our Mission</span>
  //             
  //           </div>
  //         </div>
  //       </div>
  //     </div >