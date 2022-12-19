import React from 'react'
import data from "../assets/data.json"
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri"
import { useState } from 'react';

const VirtualTour = () => {
  console.log(data)
  const [subMenu, setSubMenu] = useState([
    { index: 1, open: false },
    { index: 2, open: false },
    { index: 4, open: false },
    { index: 5, open: false },
  ])
  const [viewOpen, setViewOpen] = useState(true)
  const [currImg, setCurrImg] = useState(data.vrImages.building[0])
  const openSubMenu = (i) => {
    setSubMenu(subMenu.map((item, index) => {
      if (item.index === i) {
        item.open = !item.open
      } else {
        item.open = false
      }
      return item
    }))
    console.log(subMenu[0])
  }
  const changeImg = (ind) => {
    if (ind === 1) {
      setCurrImg(data.vrImages.classroom[0])
    } else if (ind === 2) {
      setCurrImg(data.vrImages.hostel[0])
    } else if (ind === 4) {
      setCurrImg(data.vrImages.mess[0])
    } else if (ind === 5) {
      setCurrImg(data.vrImages.reception[0])
    }
    openSubMenu(ind)
  }

  return (
    <div className="mt-20 min-h-[89.5vh] relative whypadding">
      <div className="absolute top-0 left-0 h-full w-full">
        <iframe title='vr' src={currImg} height="98%" width="100%" frameborder="0"></iframe>
        <div className="menu fixed left-10 top-[15vh] bg-white shadow-3xl rounded-lg overflow-hidden whypadding">
          <div className="flex items-center justify-between p-4 gap-8">
            <span className='text-xl font-bold'>Views</span>
            <span className='cursor-pointer' onClick={() => { setViewOpen(!viewOpen) }}>
              {viewOpen ? <RiArrowDropUpLine size={32} /> : <RiArrowDropDownLine size={32} />}
            </span>
          </div>
          {viewOpen ? <ul className="flex flex-col">
            <li className="p-4 hover:bg-red-500 hover:text-white cursor-pointer" onClick={() => setCurrImg(data.vrImages.building[0])}>
              Main Building
            </li>
            <li
              className="p-4 hover:bg-red-500 hover:text-white cursor-pointer"
              onClick={() => changeImg(1)}
              style={{ backgroundColor: subMenu[0].open ? "rgb(239 68 68);" : null }}
            >
              Class Room
            </li>
            {/* {subMenu[0].open ?
              <ul className='px-6 bg-slate-200'>
                <li onClick={() => setCurrImg(data.vrImages.classroom[0])} className='cursor-pointer'>View 1</li>
                <li onClick={() => setCurrImg(data.vrImages.classroom[1])} className='cursor-pointer'>View 2</li>
              </ul> : null} */}
            <li
              className="p-4 hover:bg-red-500 hover:text-white cursor-pointer"
              onClick={() => changeImg(2)}
              style={{ backgroundColor: subMenu[1].open ? "rgb(239 68 68);" : null }}>
              Hostel
            </li>
            {subMenu[1].open ?
              <ul className='bg-slate-200'>
                <li onClick={() => setCurrImg(data.vrImages.hostel[0])} className='cursor-pointer hover:bg-black hover:text-white px-6'>View 1</li>
                <li onClick={() => setCurrImg(data.vrImages.hostel[1])} className='cursor-pointer hover:bg-black hover:text-white px-6'>View 2</li>
                <li onClick={() => setCurrImg(data.vrImages.hostel[2])} className='cursor-pointer hover:bg-black hover:text-white px-6'>View 3</li>
                <li onClick={() => setCurrImg(data.vrImages.hostel[3])} className='cursor-pointer hover:bg-black hover:text-white px-6'>View 4</li>
                <li onClick={() => setCurrImg(data.vrImages.hostel[4])} className='cursor-pointer hover:bg-black hover:text-white px-6'>View 5</li>
                <li onClick={() => setCurrImg(data.vrImages.hostel[5])} className='cursor-pointer hover:bg-black hover:text-white px-6'>View 6</li>
                {/* <li onClick={() => setCurrImg(data.vrImages.hostel[6])} className='cursor-pointer'>View 7</li> */}
                {/* <li onClick={() => setCurrImg(data.vrImages.hostel[7])} className='cursor-pointer'>View 8</li> */}
                {/* <li onClick={() => setCurrImg(data.vrImages.hostel[8])} className='cursor-pointer'>View 9</li> */}
              </ul> : null}
            <li className="p-4 hover:bg-red-500 hover:text-white cursor-pointer" onClick={() => setCurrImg(data.vrImages.library[0])}>
              Library
            </li>
            <li
              className="p-4 hover:bg-red-500 hover:text-white cursor-pointer"
              onClick={() => changeImg(4)}
              style={{ backgroundColor: subMenu[2].open ? "rgb(239 68 68);" : null }}>
              Mess
            </li>
            {/* {subMenu[2].open ?
              <ul className='px-6 bg-slate-200'>
                <li onClick={() => setCurrImg(data.vrImages.mess[0])} className='cursor-pointer'>View 1</li>
                <li onClick={() => setCurrImg(data.vrImages.mess[1])} className='cursor-pointer'>View 2</li>
              </ul> : null} */}
            <li
              className="p-4 hover:bg-red-500 hover:text-white cursor-pointer"
              onClick={() => changeImg(5)}
              style={{ backgroundColor: subMenu[3].open ? "rgb(239 68 68);" : null }}>
              Reception
            </li>
            {/* {subMenu[3].open ?
              <ul className='px-6 bg-slate-200'>
                <li onClick={() => setCurrImg(data.vrImages.reception[0])} className='cursor-pointer'>View 1</li>
                <li onClick={() => setCurrImg(data.vrImages.reception[1])} className='cursor-pointer'>View 2</li>
              </ul> : null} */}
            <li
              className="p-4 hover:bg-red-500 hover:text-white cursor-pointer"
              onClick={() => setCurrImg(data.vrImages.director[0])}
              style={{ backgroundColor: subMenu[3].open ? "rgb(239 68 68);" : null }}>
              Director Room
            </li>
          </ul> : null}
        </div>

      </div>

    </div>
  )
}

export default VirtualTour