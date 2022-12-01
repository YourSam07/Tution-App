import React from 'react'
import data from "../assets/data.json"

const Gallery = () => {
  console.log(data)
  return (
    <div className='p-6'>
      <div className="font-sans font-bold text-lg m-4">Gallery</div>
      <div className="gallery columns-1 md:columns-2 lg:columns-3 xl:coulmns-4">
        {Object.entries(data.gallery).map(([key, value]) => {
          console.log(value)
          return (<div className="gallery-item break-inside-avoid p-2 md:p-4 lg:p-6">
            <img src={value} className="w-full h-full rounded-lg shadow-lg hover:scale-105 cursor-pointer" alt="gaa" />
          </div>)
        })}
      </div>
    </div>
  )
}

export default Gallery