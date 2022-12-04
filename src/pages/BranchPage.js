import React from 'react'
import { useInView } from 'react-intersection-observer'
const BranchPage = () => {
  const { ref, inView} = useInView({
    threshold: 0,
    triggerOnce: true
  })
  return (
    <div className='px-8 py-8 md:px-16'>
      <div className="flex flex-col ">
        <h1 className="font-bold font-sans text-3xl text-amber-400">Branches</h1>
        <p>We offer our coaching at two places. Feel free to visit an have a look for yourself. Both aour offices i.e. Head adn Branch Office are open from 9 am to 6 pm.</p>
      </div>

      <div className="flex flex-col mt-16">
        <div id="square" className="flex flex-col md:flex-row items-center justify-between w-full h-[50vh]">
          <div className='flex flex-col'>
            <h2 className='font-serif font-extrabold text-[2rem]'>Head Office Address</h2>
            <h4 className='font-sans text-xl'>Chattrapati Sq.,6A, Matruchhaya Modern Society Nagpur</h4>
            <h4 className='font-sans text-xl'>Mob No.:- 8668631102, 8855973492, 8668376653</h4>
          </div>
          <div className='map rounded-md shadow-lg overflow-hidden'>
            <iframe width="600" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=6-192,%20Srinagar%20-%20Kanyakumari%20Hwy,%20Narendra%20Nagar,%20Chatrapati%20Nagar,%20Nagpur,%20Maharashtra%20440015+(Head%20Office%20-%20Chatrappati%20Sqaure)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure area map</a>
            </iframe>
          </div>

        </div>
        <div id="omkar" className="flex flex-col md:flex-row-reverse my-24 items-center gap-12 w-full h-[50vh]">
          <div className='flex flex-col'>
            <h2 className='font-serif font-extrabold text-[2rem]'>Branch Office Address</h2>
            <h4 className='font-sans text-xl'>Omkar Nagar Near Era International School Residential Campus Nagpur</h4>
            <h4 className='font-sans text-xl'>Mob No.:- 8668631102, 8855973492, 8668376653</h4>
          </div>
          <div className='map rounded-md shadow-lg overflow-hidden'>
            <iframe width="600" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=6-192,%20Srinagar%20-%20Kanyakumari%20Hwy,%20Narendra%20Nagar,%20Chatrapati%20Nagar,%20Nagpur,%20Maharashtra%20440015+(Head%20Office%20-%20Chatrappati%20Sqaure)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure area map</a>
            </iframe>
          </div>

        </div>
      </div>

      {/* <div className='branchBg min-h-[100vh] w-full relative'>
        <div className='overlay bg-black opacity-80 h-full w-full absolute top-0 left-0'></div>
        <div className="flex flex-col justify-center items-center absolute top-0 left-0 h-full w-full px-16">
          <div className='map rounded-md shadow-lg overflow-hidden'>
            <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=6-192,%20Srinagar%20-%20Kanyakumari%20Hwy,%20Narendra%20Nagar,%20Chatrapati%20Nagar,%20Nagpur,%20Maharashtra%20440015+(Head%20Office%20-%20Chatrappati%20Sqaure)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure area map</a>
            </iframe>
          </div>
          <div className='flex flex-col'>
            <h2>Head Office Address</h2>
            <h4>Chattrapati Sq.,6A, Matruchhaya Modern Society Nagpur</h4>
            <h4>Mob No.:- 8668631102, 8855973492, 8668376653</h4>
          </div>
        </div>

      </div> */}


    </div >
  )
}

export default BranchPage