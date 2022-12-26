import React from 'react'
import group from "../assets/bgs/group.png"
import { useInView } from 'react-intersection-observer'
import { useNavigate } from 'react-router-dom'

const QuoteSec = () => {
  const navigate = useNavigate()
  const {ref, inView} = useInView({
    threshold: 0,
    triggerOnce: true
  })
  return (
    <div ref={ref} className='flex flex-col lg:gap-20 md:flex-row justify-around items-center'>
      <div className={inView ? 'aniBox1 lg:ml-12' : 'opacity-0'}>
        <img src={group} alt="" />
      </div>
      <div className={inView ? 'text-center p-4 md:text-left lg:w-[60%] md:w-[75%] ani': 'opacity-0'}>
        <h2 className='font-serif text-3xl font-bold md:text-[2.2rem] lg:text-[3rem] lg:mb-4 md:mb-2'>For every student,</h2>
        <h2 className='font-serif text-3xl font-bold md:text-[2.2rem] lg:text-[3rem] lg:mb-4 md:mb-2'> every classroom.</h2>
        <h2 className='font-serif text-3xl font-bold md:text-[2.2rem] lg:text-[3rem] lg:mb-6 md:mb-4'> Real Results</h2>
        <p className="font-sans text-lg mb-6 lg:mr-20">We have got everything covered in our beautiful residential hostels to stay, learn and earn your seat in India's top institutes.</p>
        <div className='flex gap-4 items-center md:justify-start justify-center'>
          <button className='bg-[black] text-white py-2 mb-4 px-4 rounded-lg hover:bg-[#e41c24] trans' onClick={() => navigate("/about")}>Know More</button>
          <button className='bg-[black] text-white py-2 mb-4 px-4 rounded-lg hover:bg-[#e41c24] trans' onClick={() =>  navigate("/hostels")}>Hostels</button>
        </div>
      </div>
    </div>
  )
}

export default QuoteSec