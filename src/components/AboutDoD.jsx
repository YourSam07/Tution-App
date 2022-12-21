import React from 'react'
import Director from "../assets/images/Director2.png"
import MDirector from "../assets/images/Managing Director.png"
import Quotes from "../assets/bgs/quotes.png"
import { useInView } from 'react-intersection-observer'

const AboutDoD = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  })
  return (
    <div ref={ref} className="directors p-4 flex flex-col">
      <div className={inView ? 'text-3xl font-bold font-serif text-center ani' : 'opacity-0'}>Desk of Directors</div>
      <div className='flex flex-col lg:flex-row order-2'>
        <div className='grid place-items-center'>
          <div className={inView ? "rounded-full shadow-lg relative h-[300px] w-[300px] overflow-hidden mx-auto xl:order-first aniBox1" : "opacity-0"}>
            <img src={Director} alt="Director" className='h-[450px] w-[350px]' />
            {/* <div className='absolute bottom-0 w-full text-center bg-black opacity-60'>
            <div className='text-3xl text-white'>Mr. Anil Tiwari</div>
            <div className='text-white'>Director</div>
          </div> */}
          </div>
          <div className={inView ? 'text-center ani' : 'opacity-0'}>
            <div className='text-3xl'>Mr. Anil Tiwari</div>
            <div className=''>Director</div>
          </div>
        </div>

        <div className="data relative xl:flex-1 order-1">
          <img src={Quotes} alt="quotes" className='h-36 w-36 absolute -left-2 -top-5 opacity-30' />
          <div className={inView ? 'p-8 ani' : 'opacity-0'}>
            <span className='text-extrabold text-lg'>D</span>ear Students, Welcome to The Gravity Academy ! It is indeed a matter of immense pride that our students compete at the national and international level for various courses and secure the top position Or adequate source of expert guidance and counsel for aspirants in respective fields cater to a large student community. the young genration will make the future of our country and at The Gravity Academy; we tirelessly put our best endeavours to make the students reach the paramount. the sucess of The Gravity Academy is based on the success of students. We infuse in them the attitude that does not let them settle before mounting the heights of success and deriving the best not only academically but also socially. We believe in innovation and excellence and this is why we are the proven boon to engineering & medical aspirants. Since inceptio, The Gravity Academy has emerged as the most preferred coaching institute for IIT-JEE-AIIMS,JIPMER,KVPY,NITSE, Olymoiads and other entrance exam preparation. We welcome students to come and explore their potential and experience the fun of learning. Dreamimg big, breaking the barries and achieving it the only right path to success! with best wishes, Best Regards !!!
          </div>
          <img src={Quotes} alt="quotes" className='h-36 w-36 absolute lg:right-[3%] lg:bottom-[2%] right-0 bottom-0 opacity-30 rotate-180' />
        </div>



        <div className='grid place-items-center order-3'>
          <div ref={ref} className={inView ? "rounded-full shadow-lg relative h-[300px] w-[300px] overflow-hidden lg:m-0 my-8 mx-auto aniBox7" : "opacity-0"}>
            <img src={MDirector} alt="Director" className='h-[450px] w-[350px] hover:scale-105 hover:cursor-pointer' />
            {/* <div className='absolute bottom-10 w-full text-center bg-black opacity-60'>
            <div className='text-3xl text-white'>Mr. Akhilesh Jadhav</div>
            <div className='text-white'>Managing Director</div>
          </div> */}
          </div>
          <div ref={ref} className={inView ? 'text-center ani' : 'opacity-0'}>
            <div className='text-3xl'>Mr. Akhilesh Jadhav</div>
            <div className=''>Managing Director</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutDoD