import React, { useState } from 'react'
import whatsapp from "../assets/bgs/whatsapp.png"
import call from "../assets/bgs/call.png"
import chat from "../assets/bgs/chat.png"
const FloatingBtn = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <div className="mainopShadow"></div>
      <div className="fab" onClick={() => setOpen(!open)}>
        <div className={open ? "mainop grid place-items-center bg-white h-[175px]" : "mainop grid place-items-center bg-white"}>
          <img src={chat} alt="chat" className='w-8' />
        </div>
        <div id="sheets" className="minifab op2">
        <a href="tel:+917276131102" target="_blank" rel="noreferrer" >
            <img className="minifabIcon" src={call} alt="call" />
          </a>
        </div>
        <div id="docs" className="minifab op1">
          <a href="https://wa.me/+919075957279" target="_blank" rel="noreferrer" >
            <img className="minifabIcon" src={whatsapp} alt="whatsapp"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default FloatingBtn