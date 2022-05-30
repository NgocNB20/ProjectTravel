import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import Blog from './Blog';
import SingleBlog from './SingleBlog';

export default function SliderBlog() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        arrows: true,
        slidesToScroll:3,
        centerPadding: 30
      };
    return (
        <div className="container"> 
            <Slider {...settings}>
                <SingleBlog/>
                <SingleBlog/>
                <SingleBlog/>
                <SingleBlog/>
                <SingleBlog/>
                <SingleBlog/>
                <SingleBlog/>
                <SingleBlog/>
            </Slider>
      </div>
    )
}
