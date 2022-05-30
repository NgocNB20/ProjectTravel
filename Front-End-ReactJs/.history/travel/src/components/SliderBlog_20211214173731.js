import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";

export default function SliderBlog() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll:1
      };
    return (
        <div>
        
        <Slider {...settings}>
        <div className="blog-one__single ">
            <div className="blog-one__image">
                <div style={{width: '100%', height: '300px', backgroundImage: 'url(/image/img-block/20210605-230421-9K532hgf.jpeg)'}} className="bg-img" />
            </div>
            <div className="blog-one__content">
                <Link to="/vi/blog/details/du-an-nghi-duong-tai-phu-tho-noi-bat-nho-nhung-dich-vu-doc-dao-13"><i className="fa fa-long-arrow-alt-right" /></Link>
            </div>
        </div>
        <div className="blog-one__single">
            <div className="blog-one__image">
                <div style={{width: '100%', height: '300px', backgroundImage: 'url(/image/img-block/20210605-230421-9K532hgf.jpeg)'}} className="bg-img" />
            </div>
            <div className="blog-one__content">
                <Link to="/vi/blog/details/du-an-nghi-duong-tai-phu-tho-noi-bat-nho-nhung-dich-vu-doc-dao-13"><i className="fa fa-long-arrow-alt-right" /></Link>
            </div>
        </div>
        <div className="blog-one__single">
            <div className="blog-one__image">
                <div style={{width: '100%', height: '300px', backgroundImage: 'url(/image/img-block/20210605-230421-9K532hgf.jpeg)'}} className="bg-img" />
            </div>
            <div className="blog-one__content">
                <Link to="/vi/blog/details/du-an-nghi-duong-tai-phu-tho-noi-bat-nho-nhung-dich-vu-doc-dao-13"><i className="fa fa-long-arrow-alt-right" /></Link>
            </div>
        </div>  
        <div className="blog-one__single">
            <div className="blog-one__image">
                <div style={{width: '100%', height: '300px', backgroundImage: 'url(/image/img-block/20210605-230421-9K532hgf.jpeg)'}} className="bg-img" />
            </div>
            <div className="blog-one__content">
                <Link to="/vi/blog/details/du-an-nghi-duong-tai-phu-tho-noi-bat-nho-nhung-dich-vu-doc-dao-13"><i className="fa fa-long-arrow-alt-right" /></Link>
            </div>
        </div>
        
          
        </Slider>
      </div>
    )
}
