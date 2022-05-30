import React from 'react'
import Slider from "react-slick";

export default function SliderBlog() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
    return (
        <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
        <div className="blog-one__single">
            <div className="blog-one__image"></div>
            <div className="blog-one__content">1</div>
        </div>
          
        </Slider>
      </div>
    )
}
