import React from 'react'
import data from "../assets/data.json"
import { useNavigate } from 'react-router-dom'

const Hostel = () => {
  const navigate = useNavigate()
  return (
    <div className='mt-20 whypadding'>
      <div className='hostelBg mb-12'></div>
      <div className='text-center lg:px-20 p-8'>
        <h1 className='font-serif text-3xl font-bold md:text-[2.2rem] lg:text-[3rem] lg:mb-4 md:mb-2'>Residential Campus/Hostels</h1>
        <p><span className='underline font-serif font-bold mt-4'>Residential hostels</span> of Gravity Academy accommodates students of all fields. Students from Engineering, Medical and 10th/12th classes resides in this dormitory. There are 17 rooms on each floor/house. Each house is supervised by a Housemaster, Asst. Housemaster and Hostel Supdt./Matron. Each room accommodates 4 students. Rooms are airy and well kept. Each student is provided with a cupboard and study table. Every room has a attached bathroom and a toilet. For entertainment and video conferencing there are common rooms and Skype rooms. There are two badminton courts in the Girls boarding house.</p>
        <button className='bg-[black] mt-4 text-white py-2 mb-4 px-4 rounded-lg hover:bg-[#e41c24] trans' onClick={() => navigate("/vrtour")}>Hostel Gallery</button>
      </div>
      <div className='h-[90vh]'>
        <iframe src={data.vrImages.hostel[0]} frameborder="0" height="98%" width="100%"></iframe>
      </div>
    </div>
  )
}

export default Hostel