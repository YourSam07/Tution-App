import { useState } from 'react'
import Slider from 'react-slick'
import data from "../assets/data.json"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Carousel() {
  const [sliderRef, setSliderRef] = useState(null)
  const [dataIndex, setdataIndex] = useState(0);

  const sliderSettings = {
    centerMode: "true",
    centerPadding: 0,
    arrows: false,
    autoplay: true,
    autoplayspeed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    cssEase: "ease", 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    beforeChange: (current, next) => setdataIndex(next),
  }

  return (
    <div className='content py-12'>
      {/* <div className='controls'>
        <button onClick={sliderRef?.slickPrev}>
          <FaChevronLeft />
        </button>
        <button onClick={sliderRef?.slickNext}>
          <FaChevronRight />
        </button>
      </div> */}
      <Slider ref={setSliderRef} {...sliderSettings}>
        {data.details.map((item, index) => 
        (
          <div key={index} className={index === dataIndex ? "testimonialCardActive" : "testimonialCard"}>
            <div className="rounded-full overflow-hidden grid place-items-center">
              <img src={item.img} alt="pp" className='h-20 w-20' />
            </div>
            <div className='text-center'>{item.content}</div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
