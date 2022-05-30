import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import Place from './SinglePlace';

function SliderPlace() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        arrows: true,
        slidesToScroll:4,
        centerPadding: 30
      };
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
