import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testimonio0 from '../img/testi0.jpg';
import testimonio1 from '../img/testi1.jpg';
import testimonio2 from '../img/testi2.jpg';
import testimonio3 from '../img/testi3.jpg';
import testimonio4 from '../img/testi4.jpg';
import testimonio5 from '../img/testi5.jpg';
import testimonio6 from '../img/testi6.jpg';
import testimonio7 from '../img/testi7.jpg';
import testimonio8 from '../img/testi8.jpg';
import testimonio9 from '../img/testi9.jpg';
import testimonio10 from '../img/testi10.jpg';
import testimonio11 from '../img/testi11.jpg';
import { PrevArrow, NextArrow } from './Flecha'; 

const Testimonial = () => {
  const testimonios = [
    testimonio0,
    testimonio1,
    testimonio2,
    testimonio3,
    testimonio4,
    testimonio5,
    testimonio6,
    testimonio7,
    testimonio8,
    testimonio9,
    testimonio10,
    testimonio11
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-dots-custom", 
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className="relative flex flex-col items-center justify-center p-4">
      <h2 className="font-mono text-3xl font-bold text-center text-gray-800">Testimonios</h2>
      <div className="relative w-full max-w-sm">
        <Slider ref={sliderRef} {...settings}>
          {testimonios.map((testimonio, index) => (
            <div key={index} className="p-2">
              <img src={testimonio} alt={`Testimonio ${index}`} className="max-h-96 w-full object-contain rounded-lg shadow-lg" />
            </div>
          ))}
        </Slider>
        <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
        <NextArrow onClick={() => sliderRef.current.slickNext()} />
      </div>
      <br/>
    </div>
  );
};

export default Testimonial;