import React from 'react'
import logo from "../assets/logos/gl1.png"
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center p-6 bg-red-500 text-slate-50">
      <div className="logo flex gap-4 justify-center items-center">
        <img src={logo} alt="" className='h-16 w-16' />
        <div className="text-xl font-bold">Gravity Academy</div>
      </div>
      <div className="mt-4 md:w-3/4">The Gravity Academy is an educational institute that offer very uniquely designed courses for various engineering and medical entrance exam.</div>
      <div className="links flex flex-col md:flex-row items-center mt-4">
        <Link to='/' className='cursor-pointer'>Home<span className='px-4 hidden md:none md:inline'>|</span></Link>
        <Link to='/about' className='cursor-pointer'>About<span className='px-4 hidden md:inline'>|</span></Link>
        <Link to='/why' className='cursor-pointer'>Why Gravity Academy<span className='px-4 hidden md:inline'>|</span></Link>
        <Link to='/branches' className='cursor-pointer'>Branches<span className='px-4 hidden md:inline'>|</span></Link>
        <Link to='/gallery' className='cursor-pointer'>Gallery<span className='px-4 hidden md:inline'>|</span></Link>
        <Link to='/contact' className='cursor-pointer'>Contact</Link>
      </div>
      <div className="flex flex-col items-center mt-4">
        <div className="flex gap-4">
          <BsFacebook size={24}/>
          <BsTwitter size={24}/>
          <BsInstagram size={24}/>
          <BsLinkedin size={24}/>
        </div>
        <div className='mt-2'>
        Copyright ©2022 All rights reserved by Elite360 Studio
        </div>
      </div>
    </div>
  )
}

export default Footer