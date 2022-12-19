import React from 'react'
import "../index.css"
import AboutHero from '../components/AboutHero'
import AboutMIsVis from '../components/AboutMIsVis'
import AboutDoD from '../components/AboutDoD'

const About = () => {  
  return (
    <div className="flex flex-col mt-20 whypadding">
      <AboutHero />
      <AboutMIsVis /> 
      <AboutDoD />   
    </div>
  )
}

export default About