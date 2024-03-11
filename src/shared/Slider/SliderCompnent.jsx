import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SliderComponent.scss'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#1d1d1d" , color: "#fff" ,  width:'30px' , height:'30px' ,display:'flex' , alignItems:'center' , justifyContent:'center' , zIndex:5}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#1d1d1d" , color: "#fff" , width:'30px' , height:'30px' , display:'flex' , alignItems:'center' , justifyContent:'center', zIndex:5 }}
      onClick={onClick}
    />
  );
}

export const SliderCompnent = ({children}) => {
  // states
  const [width, setWidth] = useState(window.innerWidth);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: width > 1000 ? 3 : width > 600 ? 2 : 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  // functions
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);


  return (
    <>
    <style>
      {
        `.slick-slide {
          padding: 10px; /* Добавьте промежуток между картами */
        }`
      }
    </style>
    <Slider {...settings}>
      {children}
    </Slider>
    </>
  )
}
