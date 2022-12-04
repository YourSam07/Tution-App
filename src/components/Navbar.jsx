import React, { useState } from 'react'
import logo from "../assets/logos/gl3.png"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"

const branches = [
  { name: "Chattrapti Sqaure", link: "/branches#square" },
  { name: "Omkar Nagar", link: "/branches#omkar" },
]

const courses = [
  { name: "NEET", link: "/" },
  { name: "IIT JEE", link: "/" },
  { name: "MHT CET", link: "/" },
  { name: "NDA", link: "/" },
  { name: "NTSE", link: "/" },
  { name: "KVPY", link: "/" },
  { name: "VITEE", link: "/" },
]


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [branchClicked, setBranchClicked] = useState(false)
  const [coursesClicked, setCoursesClicked] = useState(false)
  const closeMobileMenu = () => {
    setMenuOpen(!menuOpen)
    setBranchClicked(false)
    setCoursesClicked(false)
  }
  console.log(menuOpen)
  return (
    <nav className="nav flex px-4 justify-between items-center shadow-md rounded-md">
      <div className="w-28">
        <img src={logo} alt="logo" />
      </div>
      <div className='mobile__menu' onClick={() => closeMobileMenu()}>
        {menuOpen ? <AiOutlineClose size={24} /> : <GiHamburgerMenu size={24} />}
      </div>

      {menuOpen ?
        <ul className='slide__menu font-serif'>
          <li className="nav__menu-item">
            <a href="/">Home</a>
          </li>
          <li
            className="nav__menu-item"
          >
            <a href="/about">About</a>
          </li>
          <li className="nav__menu-item">
            <a href="/">Why gravity Academy</a>
          </li>
          <li className="nav__menu-item">
            <a href="/" onClick={() => setBranchClicked(!branchClicked)}>Branches</a>
            {branchClicked ?
              <ul className="mobile__submenu">
                {(branches.map(item => <li>
                  <a href={item.link}>{item.name}</a>
                </li>))}
              </ul>
              : null}
          </li>
          <li className="nav__menu-item">
            <a href="/gallery">Gallery</a>
          </li>
          <li className="nav__menu-item">
            <a href="/" onClick={() => setCoursesClicked(!coursesClicked)}>Courses</a>
            {coursesClicked ?
              <ul className="mobile__submenu">
                {(courses.map(item => <li>
                  <a href={item.link}>{item.name}</a>
                </li>))}
              </ul>
              : null}
          </li>
          <li className="nav__menu-item">
            <a href="/contact">Contact</a>
          </li>
        </ul>
        : null}

      {/* Desktop View  */}
      <ul className="nav__menu flex items-center">
        <li className="nav__menu-item">
          <a href="/">Home</a>
        </li>
        <li
          className="nav__menu-item"
        >
          <a href="/about">About</a>
        </li>
        <li className="nav__menu-item">
          <a href="/">Why gravity Academy</a>
        </li>
        <li className="nav__menu-item">
          <a href="/branches">Branches</a>
          <Submenu arr={branches} />
        </li>
        <li className="nav__menu-item">
          <a href="/gallery">Gallery</a>
        </li>
        <li className="nav__menu-item">
          <a href="/">Courses</a>
          <Submenu arr={courses} />
        </li>
        <li className="nav__menu-item">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

const Submenu = ({ arr }) => {
  return (
    <ul className="nav__submenu z-20">
      {arr.map(item =>
        <li className="nav__submenu-item">
          <a href={item.link}>{item.name}</a>
        </li>)
      }
    </ul>
  )
}

export default Navbar