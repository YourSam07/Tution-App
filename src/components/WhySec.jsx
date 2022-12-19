import React from 'react'
import { useInView } from 'react-intersection-observer'

const WhySec = () => {
  const {ref, inView} = useInView({
    threhold: 0,
    triggerOnce: true
  })
  return (
    <div className='flex flex-col md:flex-row items-center m-8 xl:px-20 lg:px-4 gap-8'>
      <div ref={ref} className='md:w-1/3 md:text-left text-center'>
        <h1 className={inView ? 'font-serif font-bold text-2xl text-amber-400 ani' : 'opacity-0'}>TEACHING METHODOLOGY</h1>
        <h1 className={inView ? 'font-serif font-extrabold text-[2rem] aniD1' : 'opacity-0'}>Conceptual Clarity & Analytical Understanding</h1>
      </div>
      <div ref={ref} className='md:w-2/3 text-center md:text-left flex flex-col items-center md:items-start'>
        <div className={inView ? "p-4 shadow-lg rounded-md font-serif mb-6 w-fit aniBox1" : 'opacity-0'}>Recaps for better understanding</div>
        <div className={inView ? "p-4 shadow-lg rounded-md font-serif mb-6 md:ml-4 w-fit aniBox2" : "opacity-0"}>Explaining through examples and graphical representation</div>
        <div className={inView ? "p-4 shadow-lg rounded-md font-serif mb-6 md:ml-8 w-fit aniBox3" : "opacity-0"}>Proving simple and easy explanations that student can understand</div>
        <div className={inView ? "p-4 shadow-lg rounded-md font-serif mb-6 md:ml-12 w-fit aniBox4" : 'opacity-0'}>Enabling leaning at apace according to the difficulty level of the topic</div>
        <div className={inView ? "p-4 shadow-lg rounded-md font-serif mb-6 md:ml-16 w-fit aniBox5" : 'opacity-0'}>Use of Audio- Visual multimedia for better retention and reinforcement</div>
        <div className={inView ? "p-4 shadow-lg rounded-md font-serif md:ml-20 w-fit aniBox6" : 'opacity-0'}>Conceptual clarity is a vital key to help students understand content and make connections between what is taught and their own experiences</div>
      </div>
    </div>
  )
}

export default WhySec
