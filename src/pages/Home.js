import React from 'react'
// import HeroSec from '../components/HeroSec'
import NewHero from '../components/NewHero'
import CountUpComponent from '../components/CountUpComponent'
import Courses from "../components/Courses"
import WhyComp from '../components/WhyComp'
import Testimonial from '../components/Testimonial'
import QuoteSec from '../components/QuoteSec'

const Home = () => {
  return (
    <div>
      <NewHero />
      <QuoteSec />
      <WhyComp />
      <Courses />
      <CountUpComponent />
      <Testimonial />
      

    </div>
  )
}

export default Home