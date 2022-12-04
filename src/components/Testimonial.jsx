import { useState } from 'react'
import Slider from 'react-slick'
import data from "../assets/data.json"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaStar } from "react-icons/fa"
import Quotes from "../assets/bgs/quotes.png"
import { useInView } from 'react-intersection-observer'

export default function Carousel() {
  const [sliderRef, setSliderRef] = useState(null)
  const [dataIndex, setdataIndex] = useState(0);
  const { ref, inView} = useInView({
    threshold: 0,
    triggerOnce: true
  })
  const sliderSettings = {
    dots: true,
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
  const colors = ["#cfcece", "#c18c70", "#a7d6ea"]

  return (
    <div className='content py-12'>
      <div className="flex flex-col justify-start items-center mb-12">
        <h3 ref={ref} className={inView ? 'font-sans font-bold text-amber-400 text-md md:text-lg ani' : ''}>OUR TESTIMONIAL</h3>
        <h1 ref={ref} className={inView ? 'font-serif text-xl md:text-[2rem] ani' : ""}>What <span className='font-bold'>Our Student Say</span> About Us</h1>
      </div>
      <Slider ref={setSliderRef} {...sliderSettings}>
        {data.details.map((item, index) =>
        (
          <div>
            <div key={index} className={index === dataIndex ? "flex items-center justify-center flex-col" : "mt-12 flex justify-center items-center scale-75 opacity-60"}>
              <div className="rounded-full overflow-hidden grid place-items-center h-32 w-32 mb-6" style={{
                backgroundColor: `${colors[index % 3]}`
              }}>
                <img src={item.img} alt="pp" className='' />
              </div>
              <h1 className={index === dataIndex ? "font-bold font-serif text-2xl mb-2" : "hidden"}>{item.name}</h1>
              <div className={index === dataIndex ? "flex gap-2" : "hidden"}>
                {[...Array(item.star)].map((item, index) => {
                  return (<FaStar key={index} fill='#fed15a' size={24} />)
                })}
              </div>
              <div className={index === dataIndex ? "text-center mt-4 text-[1.5rem] relative mb-8" : "hidden"}>
                <span className='absolute -top-[75%] left-0 opacity-10'><img src={Quotes} alt="quotes" className='h-32 w-32'/></span>
                {item.content}
                <span className='absolute top-[0%] right-[5%] rotate-180 opacity-10'><img src={Quotes} alt="quotes" className='h-32 w-32'/></span>
                </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
