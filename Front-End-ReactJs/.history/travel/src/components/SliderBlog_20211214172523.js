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
            <div className="blog-one__image">
            <div style={{width: '100%', height: '300px', backgroundImage: 'url(/image/img-block/20210605-230421-9K532hgf.jpeg)'}} className="bg-img" />
            </div>
            <div className="blog-one__content">
            <a href="/vi/blog/details/du-an-nghi-duong-tai-phu-tho-noi-bat-nho-nhung-dich-vu-doc-dao-13"><i className="fa fa-long-arrow-alt-right" /></a>
            </div>
        </div>
        
          
        </Slider>
      </div>
    )
}
