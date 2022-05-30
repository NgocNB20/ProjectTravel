import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";

export default function SliderBlog() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        arrows: true,
        slidesToScroll:1,
        centerPadding: 30
      };
    return (
        <div className="container">
        
            <Slider {...settings}>
            <div className="blog-one__single ">
                <div className="blog-one__image">
                    <div style={{width: '100%', height: '300px', backgroundImage: 'url(/image/img-block/20210605-230421-9K532hgf.jpeg)'}} className="bg-img" />
                </div>
                <div className="blog-one__content">
                    <ul className="list-unstyled blog-one__meta">
                        <li><a href="#"><i className="far fa-calendar-alt" /> 05/06/2021</a></li>
                        <li><a href="#" title="Lượt xem"><i className="far fa-eye" /> 11</a></li>
                        <li><a href="#" title="Lượt thích"><i className="far fa-heart" />1</a></li>
                    </ul>
                </div>
            </div>
 
            
            </Slider>
      </div>
    )
}
