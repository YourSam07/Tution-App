import React from 'react'
import data from "../assets/data.json"

const OurStars = () => {
  return (
    <div className='mt-20 mb-10 whypadding'>
      <h1 className='font-bold text-amber-400 font-sans text-3xl mb-4 text-center'>Our Stars</h1>
      <div className=" flex flex-col w-full gap-8">
        <div className="img1 grid place-items-center relative" >
          <img src={`/gallery/${data.brochures.firstpage}`} alt="" className='md:w-[60%] w-[85%]' />
          {/* <div className='m-6 flex items-center gap-4 px-4 py-2 border-2 cursor-pointer rounded-md shadow-lg hover:bg-red-400 hover:text-white trans hover:scale-110'>
            Download Brochure 1 here
            <a href={`/gallery/${data.brochures.firstpage}`} className="" download>
              <AiOutlineDownload size={40}  />
            </a>
          </div> */}
        </div>
        <div className="img2 grid place-items-center relative mt-8">
          <img src={`/gallery/${data.brochures.backpage}`} alt="" className='md:w-[60%] w-[85%]' />
          {/* <div className='m-6 flex items-center gap-4 px-4 py-2 border-2 cursor-pointer rounded-md shadow-lg hover:bg-red-400 hover:text-white trans hover:scale-110'>
            Download Brochure 2 here
            <a href={`/gallery/${data.brochures.backpage}`} download>
              <AiOutlineDownload size={40}  />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default OurStars