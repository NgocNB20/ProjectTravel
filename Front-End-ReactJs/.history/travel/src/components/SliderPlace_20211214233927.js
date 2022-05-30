import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import Place from './Place';
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    arrows: true,
    slidesToScroll:4,
    centerPadding: 30
  };
function SliderPlace() {
    return (
        <div className="container"> 
        <Slider {...settings}>
           <Place/>
           <Place/>
           <Place/>
           <Place/>
           <Place/>
           <Place/>
        </Slider>
  </div>
    )
}

export default SliderPlace
