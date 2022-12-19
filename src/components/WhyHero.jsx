import React from 'react'
import people from "../assets/bgs/people.png"

const WhyHero = () => {
  return (
    <div className='flex flex-col md:flex-row lg:px-24 lg:items-center'>
      <div className="heading text-center w-full font-serif mt-8 md:text-left md:p-8">
        <h2 className='text-amber-400 font-bold text-xl'>Why Choose</h2>
        <h1 className='font-extrabold text-[2rem]'>The Gravity Academy</h1>
        <p className='font-sans p-8 md:p-0'>
          The Gravity Academy has prefected the Comprehensive program of rigorous experience battling various problems yet emerging with innovative solutions thereby living up to expectation of providing quality education to all its students.
        </p>
      </div>
      <div className="pic md:grid md:place-items-center">
        <img src={people} alt="" className=''/>
      </div>
    </div>
  )
}

export default WhyHero