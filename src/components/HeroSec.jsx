import React from 'react'
import one from "../assets/images/t12.png"    
import two from "../assets/images/t10.png"
import three from "../assets/images/t11.png"
import four from "../assets/images/t9.png"
import { useInView } from 'react-intersection-observer'

const HeroSec = () => {

  const { ref, inView} = useInView({
    threshold: 0
  })
  console.log(inView, "inView")
  return (
    <div className="flex md:flex-row flex-col gap-16 lg:p-12 md:p-4 min-h-[90vh]">
      <div ref={ref} className="md:p-4 px-8 pt-8 flex flex-col md:w-[60%] w-full justify-center">
        <h4 ref={ref} className={inView ? 'text-amber-400 uppercase font-bold font-sans lg:text-3xl aniD1' : "opacity-0"}>100% Satisfaction Guarantee</h4>
        <div ref={ref} className={inView ? 'xl:text-[4.5rem] lg:text-[3rem] md:text-[2.3rem] sm:text-[2.2rem] text-[2rem] font-extrabold font-serif ani' : "opacity-0"}>Get Quality Coaching from Nagpur's best</div>
        <p ref={ref} className={inView ? 'font-serif lg:text-xl mb-2 aniD2' : "opacity-0"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, placeat.</p>
        <button ref={ref} className={inView ? 'py-3 mx-0 font-bold font-sans lg:text-xl md:text-lg rounded-3xl shadow-lg lg:w-[25%] md:w-[40%] sm:w-[30%] w-[35%] mt-4 bg-[#fed05b] hover:bg-[#fed0cb] hover:cursor-pointer aniD2' : "hidden"}>Know More</button>
      </div>
      <div className='bg-yellow flex flex-col justify-center md:items-end items-center gap-3'>
        <div className='flex gap-3 relative'>
          <div className="grid place-items-center bg-[#93d5eb] rounded-full overflow-hidden  shadow-lg">
            <div className='bg-[#ffa9cb] h-8 w-8 rounded-full absolute top-[80%] -left-[5%]'></div>
            <img src={one} alt="" className='xl:h-48 xl:w-48 lg:h-40 lg:w-40 md:h-24 md:w-24 sm:h-48 sm:w-48 h-32 w-32' />
            <div className='bg-[#f1c05e] h-5 w-5 rounded-full absolute top-[5%] left-[45%] -z-10'></div>
          </div>
          <div className="grid place-items-center bg-[#ffa8ca] rounded-lg overflow-hidden shadow-lg">
            <img src={two} alt="" className='xl:h-48 xl:w-48 lg:h-40 lg:w-40 md:h-24 md:w-24 sm:h-48 sm:w-48 h-32 w-32' />
            <div className='bg-[#fed05b] xl:h-40 xl:w-40 lg:h-32 lg:w-32 md:h-24 md:w-24 h-24 w-24 rounded-full absolute -top-[15%] left-[72%] -z-10'></div>
          </div>
        </div>
        <div className="flex gap-3 relative">
          <div className="grid place-items-center bg-[#f5c362] rounded-lg overflow-hidden shadow-lg">
            <img src={three} alt="" className='xl:h-48 xl:w-48 lg:h-40 lg:w-40 md:h-24 md:w-24 sm:h-48 sm:w-48 h-32 w-32 ' />
            <div className='bg-[#61b4d0] h-6 w-6 rounded-full absolute top-[80%] -left-[10%] -z-10'></div>
          </div>
          <div className="grid place-items-center bg-[#e4e3e5] rounded-tr-full rounded-br-full overflow-hidden shadow-lg">
            <img src={four} alt="" className='xl:h-48 xl:w-48 lg:h-40 lg:w-40 md:h-24 md:w-24 sm:h-48 sm:w-48 h-32 w-32' />
            <div className='bg-[#ffa8ca] h-8 w-8 rounded-full absolute top-[65%] -right-[5%] -z-10'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSec