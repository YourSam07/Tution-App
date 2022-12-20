import React from 'react'
import Logo from '../assets/logos/gl3.png'
import temp from '../assets/bgs/adopen.png'
import { useState } from 'react'

const NewHero = () => {
  const [menuData, setMenuData] = useState( [
    {      title: "Home", active: false, href: "/"     },
    {      title: "About", active: false, href: "/about"     },
    {      title: "Why Gravity Academy", active: false, href: "/why"     },
    {      title: "Branches", active: false, href: "/branches"     },
    {      title: "Our Stars", active: false, href: "/stars"     },
    {      title: "Gallery", active: false, href: "/gallery"     },
    {      title: "Virtual Tour", active: false, href: "/vrtour"     },
    {      title: "Contact Us", active: false, href: "/contact"     }
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
  return (
    <div className='heroBg'>
      {/* <button className="fixed top-[45%] -right-[102px] bg-[#d9704a] text-white -rotate-90 px-8 py-2 z-50">Admission Enquiry Form</button  > */}
      <div className="flex-col flex lg:pt-40 lg:pl-40 pt-20 pb-10 items-center md:items-start md:pl-20">
        <div className="flex flex-col md:flex-row gap-8 ">
          <div className="logo">
            <img src={Logo} alt="" className='w-60' />
          </div>
          <div className="links font-sans text-xl text-white font-bold md:block">
            <ul>
              {menuData.map((item, index) => {
                return <li key={index}>
                  <span className={item.active ? "hoverEffect" : "hidden"}>{`>   `}</span>
                  <a href={item.href} className={item.active ? "hoverEffect" : ""} onMouseEnter={() => activeHover(index)} onMouseLeave={() => activeHover(index)}>{item.title}</a>
                </li>
              })}
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-8 gap-4 items-center px-6 sm:px-4 md:p-0 md:pr-8">
          <div className="bulletin bg-[#f36a33] p-8 sm:w-1/2 lg:w-[40%] text-white">
            <h2 className='mb-4'>Gravity Academy Bulletin</h2>
            <marquee behavior="scroll" direction="up" height="175" scrollamount="3">
              <p className='pb-4 border-b-2 border-white mt-4'>The Gravity Academy started with amazing results in Medical as well as Engineering Field.</p>
              <p className='pb-4 border-b-2 border-white mt-4'>Vivek Santosh Rahangdale got selected in AIIMS Nagpur, which is the an All India Top Rank College in 1st attempt.</p>
              <p className='pb-4 border-b-2 border-white mt-4'>Avani Ridhorkar got into NIT Raipur. Other students also bagged top admits from colleges like VNIT Nagpur, COEP pune, VIT Pune etc.</p>
              <p className='pb-4 border-b-2 border-white mt-4'>Rohit Rahangdale, with his arduous efforts was admitted to N.K.P. Salve Medical College, Nagpur for M.B.B.S.</p>
              <p className='pb-4 border-b-2 border-white mt-4'>Students did well in not only engineering exams but also medical exams as two of them got into B.A.M.S.</p>
              <p className='pb-4 border-b-2 border-white mt-4'>Disha A. Damahe and Neddhi R Kamthe got into VSMP'S Dental College Nagpur B.D.S and S.D.K.S Dental College Nagpur B.D.S respectively. </p>
            </marquee>
          </div>
          <div className="entrance grid place-items-center sm:block sm:w-1/2 lg:w-[40%]">
            <img src={temp} alt="" className=''/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewHero