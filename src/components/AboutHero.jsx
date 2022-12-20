import React from 'react'
import { useInView } from 'react-intersection-observer'
import about from "../assets/bgs/about.svg"
import arrow from "../assets/bgs/arrow.png"
import circle from "../assets/bgs/redCircle.png"
import data from "../assets/data.json"

const AboutHero = () => {
  const {ref, inView} = useInView({
    threshold: 0,
    triggerOnce: true
  })
  return (
    <div className="p-4 flex lg:gap-4 items-center lg:flex-row flex-col">
      <div ref={ref} className="content lg:w-2/3 md:p-8 p-4 font-serif relative">
        <img src={arrow} alt="arrow" className={inView ? 'absolute top-36 rotate-45 ani' : 'opacity-0'} />
        <div className={inView ? "font-bold text-2xl uppercase text-amber-400 font-sans aniD2" : "opacity-0"}>About Us</div>
        <p className={inView ? "aniD1" : "opacity-0"}><span className='font-bold font-serif text-xl ani'>The Gravity Academy</span> is an educational institute thar offers very uniquely designed courses for various Engineering and medical Entrance Exams.</p>
        <div className="flex flex-col relative">
          <img src={circle} alt="circle" className={inView ? 'absolute -right-5 -top-5 -z-10 ani' : 'opacity-0'} />
          <div className={inView ? 'rounded-lg shadow-lg p-8 lg:ml-20 bg-white aniBox1' : 'opacity-0'}>
            We are the fastest & leading institute for the preparation of Entrance Examination of JEE & NEET. The Gravity Academy recognizes and respect the uniqueness of each student. The primary responsibility is to gratify the inner urge of oneself to sincere academic reaction of student and to guide them to entrance examination in each student. Our curriculum skilfully weaves artistic and practical discipline into everyday academics. Students learn to understand the concept of subjects, to think creatively.
          </div>
          <div className={inView ? 'rounded-lg shadow-lg p-8 lg:mr-20 bg-white mt-4 aniBox2' : 'opacity-0'}>
            We celebrate diversity and strive to still intergrity, compassion and confidence in each student. We give each aspirant support and encouragement to meet the desire goal. At The Gravity Academy, We are committed to providing a happy, safe and secure environment to realize the dream of our students. Consequently, we have been picting ourselves on our reputation as a dynamic coaching institute as a whole. We encourage the vibrate and energetic students to develop their confidence and love for learning for a bright future in this competitive era.
          </div>
          <button className="py-2 font-sans text-white bg-red-600 hover:bg-red-400 hover:scale-105 trans rounded-lg shadow-lg w-1/5 my-4">
            <a href={data.brochures.pdf} download>Download Brochure</a>
          </button>
        </div>
      </div>
      <div className="flex md:w-1/3 justify-center items-center">
        <div className={inView ? "grid place-items-center overflow-hidden aniBox7" : "opacity-0"}>
          <img src={about} alt="" className='' />
        </div>
      </div>
    </div>
  )
}

export default AboutHero