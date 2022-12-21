import React, { useEffect, useState } from 'react'
import logo from "../assets/logos/gl3.png"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import { Link, useLocation } from 'react-router-dom'

const branches = [
  { name: "Chattrapti Sqaure", link: "/branches#square" },
  { name: "Omkar Nagar", link: "/branches#omkar" },
]

const Navbar = () => {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [branchClicked, setBranchClicked] = useState(false)
  const [showNav, setShowNav] = useState(true)
  const closeMobileMenu = () => {
    setMenuOpen(!menuOpen)
    setBranchClicked(false)
  }

  const handleScroll = () => {
    if (location.pathname === '/') {
      setShowNav(false)
      window.scrollY > 500 ? setShowNav(true) : setShowNav(false)
    } else {
      setShowNav(true)
    }
  }
  console.log(showNav)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  })

  useEffect(() => {
    if (location.pathname === '/') setShowNav(false)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // console.log(menuOpen)
  return (
    <nav className={showNav ? 'fixed z-40 w-full top-0 left-0' : "hidden"}>
      <div className="nav flex px-4 justify-between items-center shadow-md rounded-md bg-white w-full">
        <div className="w-28">
          <img src={logo} alt="logo" />
        </div>
        <div className='mobile__menu' onClick={() => closeMobileMenu()}>
          {menuOpen ? <AiOutlineClose size={24} /> : <GiHamburgerMenu size={24} />}
        </div>

        {menuOpen ?
          <ul className='slide__menu font-serif'>
            <li className="nav__menu-item">
              <Link to="/" >Home</Link>
            </li>
            <li
              className="nav__menu-item"
            >
              <Link to="/about">About</Link>
            </li>
            <li className="nav__menu-item">
              <Link to="/why">Why gravity Academy</Link>
            </li>
            <li className="nav__menu-item">
              <Link to="/branches" onClick={() => setBranchClicked(!branchClicked)}>Branches</Link>
              {branchClicked ?
                <ul className="mobile__submenu">
                  {(branches.map(item => <li>
                    <Link to={item.link}>{item.name}</Link>
                  </li>))}
                </ul>
                : null}
            </li>
            <li className="nav__menu-item">
              <Link to="/stars">Our Stars</Link>
            </li>
            <li className="nav__menu-item">
              <Link to="/vrtour">Virtual Tour</Link>
            </li>
            <li className="nav__menu-item">
              <Link to="/gallery">Gallery</Link>
            </li>
            
            <li className="nav__menu-item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          : null}

        {/* Desktop View  */}
        <ul className="nav__menu flex items-center flex-wrap">
          <li className="nav__menu-item">
            <Link to="/">Home</Link>
          </li>
          <li
            className="nav__menu-item"
          >
            <Link to="/about">About</Link>
          </li>
          <li className="nav__menu-item">
            <Link to="/why">Why gravity Academy</Link>
          </li>
          <li className="nav__menu-item">
            <Link to="/branches">Branches</Link>
            <Submenu arr={branches} />
          </li>
          <li className="nav__menu-item">
            <Link to="/stars">Our Stars</Link>
          </li>
          <li className="nav__menu-item">
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className="nav__menu-item">
            <Link to="/vrtour">Virtual Tour</Link>
          </li>
          <li className="nav__menu-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

const Submenu = ({ arr }) => {
  return (
    <ul className="nav__submenu z-20">
      {arr.map(item =>
        <li className="nav__submenu-item">
          <Link to={item.link}>{item.name}</Link>
        </li>)
      }
    </ul>
  )
}

export default Navbar