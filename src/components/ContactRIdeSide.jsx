import React from 'react'
import Ill from "../assets/bgs/contactIll.svg"

const ContactRIdeSide = () => {
  return (
    <div className="flex contactBg flex-col md:flex-row p-4 gap-12 lg:p-12 xl:py-16 xl:px-60 justify-between ">
      <div className="font-serif lg:text-left text-center md:w-1/2">
        <div className="font-bold text-[2.5rem] lg:text-[3rem] ">Contact Us</div>
        <p className='text-[1rem] lg:text-[1.5rem]'>We want to hear from you. Let us know how can we help you</p>
        <img src={Ill} alt="illusttration" className='hidden md:block mt-12' />
      </div>
        
      <form action="" className='p-8 flex flex-col md:mt-4 justify-centeritems-center rounded-lg shawdow-xl bg-white shadow-lg'>
        <div className="font-bold text-lg mb-4 text-center">Send us a Messasge</div>
        <input type="text" name="" id="" placeholder='Enter your name' className='px-6 py-2 w-[100%] border-b-4 border-[#ffa0a3]'/>
        <input type="text" name="" id="" placeholder='Enter Email Addresss' className='px-6 py-2 mt-6 w-[100%] border-b-4 border-[#ffa0a3]'/>
        <input type="text" name="" id="" placeholder='Enter Subject' className='px-6 py-2 mt-6 w-[100%]  border-b-4 border-[#ffa0a3]'/>
        <textarea name="" id="" cols="30" rows="4" placeholder='Enter Meassage' className='px-6 py-2 mt-6 w-[100%] border-b-4 border-[#ffa0a3]' />
        <button type="submit" className='px-6 py-2 mt-4 bg-[#f55c61] shadow-md rounded-sm hover:bg-[#ff8e92]'>Send Message</button>
      </form>
    </div> 
  )
}

export default ContactRIdeSide



