import React from 'react'
import circle2 from "../assets/bgs/circle2.png"
import circle3 from "../assets/bgs/circle3.png"
import vision from "../assets/bgs/vision.png"
import mission from "../assets/bgs/mission2.png"
import { useInView } from 'react-intersection-observer'

const AboutMIsVis = () => {
  const {ref, inView} = useInView({
    threshold: 0,
    triggerOnce: true
  })
  return (
    <div className='flex flex-col p-8 lg:px-40 justify-center'>
      
      <div ref={ref} className="flex flex-col gap-6 sm:flex-row items-center justify-between">
        <div className={inView ? 'relative grid place-items-center aniBox1' : 'opacity-0'}>
          <img src={vision} alt="vision" className='sm:w-[80%]' />
        </div>
        <div className='relative'>
          <img src={circle2} alt="circle2" className='absolute -z-10 right-0' />
          <h1 className={ inView ? 'text-amber-400 font-sans font-bold text-3xl ani' : 'opacity-0'}>Our Mission</h1>
          <p className={inView ? 'font-serif aniD1' : 'opacity-0'}>To be the best in education sector where best opportunities are made available for students to learn, perform and achieve the uppermost.</p>
        </div>
      </div>

      <div ref={ref} className="flex flex-col sm:flex-row-reverse gap-6 items-center justify-between">
        <div className={inView ? 'relative grid place-items-center aniBox7' : 'opacity-0'}>
          <img src={mission} alt="vision" className='sm:w-[70%]' />
        </div>
        <div className='relative'>
          <img src={circle3} alt="circle3" className='absolute -z-10 right-0' />
          <h1 className={ inView ? 'text-amber-400 font-sans font-bold text-3xl ani' : 'opacity-0'}>Our Vision</h1>
          <p className={inView ? 'font-serif aniD1' : 'opacity-0'}>Our mission is to provide leadership and inspiration to students to ensure their selection with top ranks in premier egineering and medical college of the country.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMIsVis