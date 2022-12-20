import React from 'react'
import Ill from "../assets/bgs/contactIll.svg"
import { useInView } from "react-intersection-observer"
import { FaWhatsapp } from "react-icons/fa"
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import FloatingBtn from './FloatingBtn';
import {toast} from "react-toastify"

const ContactRIdeSide = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  })

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1gz943y', 'template_axcx379', form.current, 'I0S-n2IixOFBjSbR6')
      .then((result) => {
        console.log(result);
        toast.success("Form Submitted Successfully.")
        document.getElementById("form").reset()
      }, (error) => {
        console.log(error.text);
        toast.error("Had trouble submitting the form.")
      });
  };

  return (
    <div className="flex contactBg flex-col md:flex-row p-4 gap-12 lg:p-12 xl:py-16 xl:px-60 justify-between ">
      <div className="font-serif lg:text-left text-center md:w-1/2">
        <div ref={ref} className={inView ? "font-bold text-[2.5rem] lg:text-[3rem] ani " : "opacity-0"}>Contact Us</div>
        <p ref={ref} className={inView ? 'text-[1rem] lg:text-[1.5rem] aniD1' : 'opacity-0'}>We want to hear from you. Let us know how can we help you</p>
        <img src={Ill} alt="illusttration" className={inView ? 'hidden md:block mt-12 ani' : 'opacity-0'} />
      </div>

      <div className={inView ? 'p-8 flex flex-col justify-center rounded-lg shawdow-xl bg-white shadow-lg aniBox7' : 'opacity-0'}>
        <div className="font-bold text-lg mb-4 text-center">Send us a Message</div>
        <form id="form" action="" className='flex flex-col justify-center' ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" id="" placeholder='Enter your name' className='px-6 py-2 w-[100%] border-b-4 border-[#ffa0a3] focus:outline-none focus:border-2 focus:border-[#ffa0a3] focus:border-b-4' />
          <input type="text" name="from_email" id="" placeholder='Enter Email Addresss' className='px-6 py-2 mt-6 w-[100%] border-b-4 border-[#ffa0a3] focus:outline-none focus:border-2 focus:border-[#ffa0a3] focus:border-b-4' />
          <input type="text" name="subject" id="" placeholder='Enter Subject' className='px-6 py-2 mt-6 w-[100%]  border-b-4 border-[#ffa0a3] focus:outline-none focus:border-2 focus:border-[#ffa0a3] focus:border-b-4' />
          <textarea name="message" id="" cols="30" rows="4" placeholder='Enter Message' className='px-6 py-2 mt-6 w-[100%] border-b-4 border-[#ffa0a3] focus:outline-none focus:border-2 focus:border-[#ffa0a3] focus:border-b-4' spellCheck="false" />
          <button type="submit" className='px-6 py-2 mt-4 bg-[#f55c61] shadow-md rounded-sm hover:bg-[#ff8e92]'>Send Message</button>
        </form>
        <div className='mt-4 flex items-center'><span className='w-1/2 h-[1px] mr-2 bg-black'></span> or <span className='ml-2 w-1/2 h-[1px] bg-black'></span></div>
        <button className='px-6 py-2 mt-4 bg-green-400 shadow-md rounded-sm hover:bg-green-200'>
          <a href="https://wa.me/+919075957279" target="_blank" rel="noreferrer" className='flex gap-2 items-center justify-center'>
            <span>Message on Whatsapp</span>
            <span><FaWhatsapp size={28} /></span>
          </a>
        </button>
      </div>
      <FloatingBtn />
    </div>
  )
}

export default ContactRIdeSide



