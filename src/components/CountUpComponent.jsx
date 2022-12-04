import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const CountUpComponent = () => {
  const { ref, inView} = useInView({
    threshold: 0,
    triggerOnce: true
  })
  return (
    <div className="bg-red-500 text-white font-sans p-4 flex flex-wrap justify-around my-8">
      <div className="grid place-items-center mx-4">
        <div ref={ref} className="text-[2rem] font-extrabold"><CountUp redraw={inView} end={8232} duration={3}/></div>
        <div className='font-bold'>Success Stories</div>
      </div>
      <div className="w-1 h-20 bg-white hidden md:block"></div>
      <div className="grid place-items-center mx-4  ">
        <div ref={ref} className="text-[2rem] font-extrabold"><CountUp redraw={inView} end={40} duration={3}/></div>
        <div className='font-bold'>Expert Instructor</div>
      </div>
      <div className="w-1 h-20 bg-white hidden md:block"></div>
      <div className="grid place-items-center mx-4">
        <div ref={ref} className="text-[2rem] font-extrabold"><CountUp redraw={inView} end={50324} duration={3}/></div>
        <div className='font-bold'>Hours Tutored</div>
      </div>
      <div className="w-1 h-20 bg-white  hidden md:block"></div>
      <div className="grid place-items-center mx-4">
        <div ref={ref} className="text-[2rem] font-extrabold"><CountUp redraw={inView} end={10000} duration={3}/></div>
        <div className='font-bold'>Active Students</div>
      </div>
    </div>
  )
}

export default CountUpComponent