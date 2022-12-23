import React, { useRef } from 'react'
import Logo from '../assets/logos/gl3.png'
import temp from '../assets/bgs/adopen.png'
import { useState } from 'react'
import popup from '../assets/bgs/popup.jpg'
import emailjs from '@emailjs/browser'
import data from "../assets/data.json"
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom'

const NewHero = () => {
  const [openPopUp, setOpenPopUp] = useState(false)
  const [menuData, setMenuData] = useState([
    { title: "Home", active: false, href: "/" },
    { title: "About", active: false, href: "/about" },
    { title: "Why Gravity Academy", active: false, href: "/why" },
    { title: "Branches", active: false, href: "/branches" },
    { title: "Our Stars", active: false, href: "/stars" },
    { title: "Gallery", active: false, href: "/gallery" },
    { title: "Virtual Tour", active: false, href: "/vrtour" },
    { title: "Contact Us", active: false, href: "/contact" }
  ])

  const activeHover = (i) => {
    console.log(i)
    setMenuData(menuData.map((item, index) => {
      if (index === i) {
        console.log(index, i)
        item.active = !item.active
      } else {
        item.active = false
      }
      return item
    }))
    console.log(menuData)
  }

  const handlePopUp = () => {
    setOpenPopUp(true)
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1gz943y', 'template_axcx379', form.current, 'I0S-n2IixOFBjSbR6')
      .then((result) => {
        console.log(result);
      }, (error) => {
        console.log(error.text);
      });
  };
  const notify = () => {
    toast.success("Brochure Successfully Downloaded")
  }

  return (
    <div className='heroBg relative'>
      <button className="fixed top-[45%] -right-[102px] bg-[#d9704a] text-white -rotate-90 px-8 py-2 z-50" onClick={() => handlePopUp()}>Admission Enquiry Form</button  >
      <div className="flex-col flex lg:pt-40 lg:pl-40 pt-20 pb-10 items-center md:items-start md:pl-20">
        <div className="flex flex-col md:flex-row gap-8 ">
          {/* <div className="logo">
            <img src={Logo} alt="" className='w-60' />
          </div> */}
          <div className="links font-sans text-xl text-white font-bold md:block">
            <ul>
              {menuData.map((item, index) => {
                return <li key={index}>
                  <span className={item.active ? "hoverEffect" : "hidden"}>{`>   `}</span>
                  <Link to={item.href} className={item.active ? "hoverEffect" : ""} onMouseEnter={() => activeHover(index)} onMouseLeave={() => activeHover(index)}>{item.title}</Link>
                </li>
              })}
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-8 gap-4 items-center px-6 sm:px-4 md:p-0 md:pr-8">
          <div className="bulletin bg-white  sm:w-1/2 lg:w-[40%]">
            <div className='mb-4 bg-[#0f0f0f] text-white text-center py-2 font-extrabold font-serif text-xl'>Gravity Academy Bulletin</div>
            <marquee behavior="scroll" direction="up" height="175" scrollamount="3" className="p-8">
              <p className='pb-4 border-b-2 border-white mt-4'>{`>  `}The Gravity Academy started with amazing results in Medical as well as Engineering Field.</p>
              <p className='pb-4 border-b-2 border-white mt-4'>{`>  `}Vivek Santosh Rahangdale got selected in AIIMS Nagpur, which is the an All India Top Rank College in 1st attempt.</p>
              <p className='pb-4 border-b-2 border-white mt-4'>{`>  `}Avani Ridhorkar got into NIT Raipur. Other students also bagged top admits from colleges like VNIT Nagpur, COEP pune, VIT Pune etc.</p>
              <p className='pb-4 border-b-2 border-white mt-4'>{`>  `}Rohit Rahangdale, with his arduous efforts was admitted to N.K.P. Salve Medical College, Nagpur for M.B.B.S.</p>
              <p className='pb-4 border-b-2 border-white mt-4'>{`>  `}Students did well in not only engineering exams but also medical exams as two of them got into B.A.M.S.</p>
              <p className='pb-4 border-b-2 border-white mt-4'>{`>  `}Disha A. Damahe and Neddhi R Kamthe got into VSMP'S Dental College Nagpur B.D.S and S.D.K.S Dental College Nagpur B.D.S respectively. </p>
            </marquee>
          </div>
          {/* <div className="entrance grid place-items-center sm:block sm:w-1/2 lg:w-[40%]">
            <Link to={data.brochures.pdf} download onClick={() => notify()}>
              <img src={temp} alt="" className='' />
            </Link> 
          </div> */}
          <div className="bulletin bg-white text-center">
            <div className='mb-8 bg-[#0f0f0f] text-white text-center py-5 font-extrabold font-serif text-3xl'>Admission Open</div>
            <div className='py-2 border-y-2 border-white mx-28'>JEE/NEET/FOUNDATION ASPIRANTS</div>
            <button className='bg-black text-white py-2 mt-8 mb-4 px-4 rounded-lg hover:bg-white hover:text-black trans{`>  `}'>
              <a href={data.brochures.pdf} download onClick={() => notify()}>
                Download Brochure
              </a>
            </button>
          </div>
        </div>
      </div>
      {openPopUp ?
        <div className=''>
          <div className="bg-black fixed z-40 top-0 left-0 opacity-70 h-[100vh] w-full" onClick={() => setOpenPopUp(false)}></div>
          <div className="flex flex-col justify-center z-50 top-[2%] left-0 lg:translate-x-full sm:translate-x-1/2 translate-x-[18%] fixed p-8 bg-white rounded-lg shadow-lg md:w-1/3 sm:w-1/2 w-3/4">
            <div>
              <img src={popup} alt="" />
            </div>
            <form action="" className='flex flex-col justify-center mt-4' ref={form} onSubmit={sendEmail}>
              <input type="text" name="from_name" id="" placeholder='Enter your name' className='px-6 py-2 w-[100%] border-b-4 border-[#ffa0a3] focus:outline-none focus:border-2 focus:border-[#ffa0a3] focus:border-b-4' />
              <input type="text" name="from_email" id="" placeholder='Enter Email Addresss' className='px-6 py-2 mt-6 w-[100%] border-b-4 border-[#ffa0a3] focus:outline-none focus:border-2 focus:border-[#ffa0a3] focus:border-b-4' />
              <input type="text" name="subject" id="" placeholder='Enter Subject' className='px-6 py-2 mt-6 w-[100%]  border-b-4 border-[#ffa0a3] focus:outline-none focus:border-2 focus:border-[#ffa0a3] focus:border-b-4' />
              <textarea name="message" id="" cols="30" rows="4" placeholder='Enter Message' className='px-6 py-2 mt-6 w-[100%] border-b-4 border-[#ffa0a3] focus:outline-none focus:border-2 focus:border-[#ffa0a3] focus:border-b-4' spellCheck="false" />
              <button type="submit" className='px-6 py-2 mt-4 bg-[#f55c61] shadow-md rounded-sm hover:bg-[#ff8e92]'>Send Message</button>
            </form>
          </div>
        </div>
        : null}
    </div>
  )
}

export default NewHero