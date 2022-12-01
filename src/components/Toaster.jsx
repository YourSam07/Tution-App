import React, { useState } from 'react'
import { AiOutlineClose } from "react-icons/ai"
import { useNavigate } from 'react-router-dom'

const Toaster = () => {
  const [isClosed, setIsClosed] = useState(false)
  const navigate = useNavigate()
  return (
    <div>
      {isClosed ? null
        : <div className="toatser-wraper flex justify-between bg-[#d4dc04] p-1">
          <div className="wrapper m-auto">
            <span className="font-sans text-center">
              Are you looking to join the new batch?
            </span>
            <span className='ml-2 underline decoration-solid cursor-pointer' onClick={() => navigate("/about")}>
              Talk to us
            </span>
          </div>
          <div className="close flex justify-center items-center cursor-pointer" onClick={() => setIsClosed(true)}>
            <AiOutlineClose />
          </div>
        </div>}
    </div>
  )
}

export default Toaster