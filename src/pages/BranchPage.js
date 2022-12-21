import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
const BranchPage = () => {
  const [mobileView, setMobileView] = useState(false)

  const { ref, inView} = useInView({
    threshold: 0,
    triggerOnce: true
  })

  const handleWindowSize = () => {
    window.innerWidth > 650 ? setMobileView(false) : setMobileView(true)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSize)

    return () => {
      window.removeEventListener('resize', handleWindowSize)
    }
  })

  return (
    <div className='mt-20 px-8 py-8 md:px-16 whypadding'>
      <div ref={ref} className={inView ? "flex flex-col mb-24 ani" : "opacity-0"}>
        <h1 className="font-extrabold font-sans text-[2rem] text-amber-400">Branches</h1>
        <p  >We offer our coaching at two places. Feel free to visit an have a look for yourself. Both aour offices i.e. Head adn Branch Office are open from 9 am to 6 pm.</p>
      </div>

      <div className="flex flex-col justify-center mt-16">
        <div id="square" className="flex flex-col lg:flex-row mb-24 items-center justify-between gap-12 w-full">
          <div ref={ref} className={inView ? 'flex flex-col aniBox1 xl:w-1/2' :'opacity-0'}>
            <h2 className='font-serif font-extrabold text-[2rem]'>Head Office Address</h2>
            <h4 className='font-sans text-xl'>Chattrapati Sq.,6A, Matruchhaya Modern Society Nagpur</h4>
            <h4 className='font-sans text-xl'>Mob No.:- +91 7276131102, +91 8855973492</h4>
          </div>
          <div ref={ref} className={inView ? 'map xl:w-1/2 aniBox7' : 'opacity-0'}>
            <iframe className='rounded-md shadow-lg overflow-hidden' title="map" width={mobileView ? "350" : "600"}  height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=6-192,%20Srinagar%20-%20Kanyakumari%20Hwy,%20Narendra%20Nagar,%20Chatrapati%20Nagar,%20Nagpur,%20Maharashtra%20440015+(Head%20Office%20-%20Chatrappati%20Sqaure)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure area map</a>
            </iframe>
          </div>

        </div>
        <div id="omkar" ref={ref} className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 w-full">
          <div ref={ref} className={inView ? 'flex flex-col xl:w-1/2 aniBox7' : 'opacity-0'}>
            <h2 className='font-serif font-extrabold text-[2rem]'>Branch Office Address</h2>
            <h4 className='font-sans text-xl'>Omkar Nagar Near Era International School Residential Campus Nagpur</h4>
            <h4 className='font-sans text-xl'>Mob No.:- +91 7276131102, +91 8855973492</h4>
          </div>
          <div className={inView ? 'map xl:w-1/2 aniBox1' : 'opacity-0'}>
            <iframe className='rounded-md shadow-lg overflow-hidden' title="map" height="300" width={mobileView ? "350" : "600"} frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=6-192,%20Srinagar%20-%20Kanyakumari%20Hwy,%20Narendra%20Nagar,%20Chatrapati%20Nagar,%20Nagpur,%20Maharashtra%20440015+(Head%20Office%20-%20Chatrappati%20Sqaure)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure area map</a>
            </iframe>
          </div>

        </div>
      </div>
    </div >
  )
}

export default BranchPage