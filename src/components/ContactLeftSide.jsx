import React from 'react'
import { AiFillHome, AiFillPhone, AiTwotoneMail } from "react-icons/ai"
import { useInView } from 'react-intersection-observer'

const ContactLeftSide = () => {
  const {ref, inView} = useInView({
    threshold: 0,
    triggerOnce: true
  })
  return (
    <div className='flex flex-col p-4 contactBg2'>
      <div ref={ref} className={inView ? "font-bold font-serif text-2xl text-center md:text-left md:pl-12 lg:text-3xl lg:pl-28 ani" : "opacity-0"}>We're here for you</div>
      <div className="flex flex-col md:flex-row md:gap-4 lg:p-12 lg:gap-8 mb-8"> 
        <div className="left flex flex-col md:w-1/2">
          <div ref={ref} className={inView ? "flex-col mt-4 text-black px-6 py-4 rounded-md shadow-lg bg-white aniBox1" : "opacity-0"}>
            <div className="flex items-center">
              <div className="border-[0.2rem] border-black p-1">
                <AiFillHome size={24} />
              </div>
              <div className="p-4">
                <div className="font-bold text-lg">Head Office</div>
                <p className='text-[0.9rem]'>Come say Hello at our Office HQ</p>
              </div>
            </div>
            <p className='text-[0.9rem]'>Chattrapati Sq.,6A, Matruchhaya Modern Society Nagpur</p>
          </div>
          <div ref={ref} className={inView ? "flex-col mt-8 text-black px-6 py-4 rounded-md shadow-lg bg-white aniBox1" :  "opacity-0"}>
            <div className="flex items-center">
              <div className="border-[0.2rem] border-black p-1">
                <AiFillHome size={24} />
              </div>
              <div className="p-4">
                <div className="font-bold text-lg">Branch Office</div>
                <p className='text-[0.9rem]'>Come say Hello at our Office</p>
              </div>
            </div>
            <p className='text-[0.9rem]'>Omkar Nagar Near Era International School Residential Campus Nagpur</p>
          </div>
        </div>
        <div className="right flex flex-col md:w-1/2 md:-mt-12">
          <div ref={ref} className={inView ? "flex-col mt-4 text-black px-6 py-4 rounded-md shadow-lg bg-white aniBox7" : "opacity-0"}>
            <div className="flex items-center">
              <div className="border-[0.2rem] border-black p-1">
                <AiFillPhone size={24} />
              </div>
              <div className="p-4">
                <div className="font-bold text-lg">Phone</div>
                <p className='text-[0.9rem]'>Mon to Sat 9:00 AM to 6:00 PM</p>
              </div>
            </div>
            <p className='text-[0.9rem]'>+91 8668631102, +91 8855973492, +91 8668376653</p>
          </div>
          <div ref={ref} className={inView ? "flex-col mt-8 text-black px-6 py-4 rounded-md shadow-lg bg-white aniBox7" : "opacity-0"}>
            <div className="flex items-center">
              <div className="border-[0.2rem] border-black p-1">
                <AiTwotoneMail size={24} />
              </div>
              <div className="p-4">
                <div className="font-bold text-lg">Email us</div>
                <p className='text-[0.9rem]'>Send us your query anytime!</p>
              </div>
            </div>
            <p className='text-[0.9rem]'>gravityiitjeeacademy@gmail.com<span className='opacity-0'>Lorem ipsum dolor sit amet </span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactLeftSide



