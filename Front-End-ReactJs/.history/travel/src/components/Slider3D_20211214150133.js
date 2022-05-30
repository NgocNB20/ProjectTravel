import React from 'react'
import Slider from "react-slick";

function Slider3D() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div>
        <Slider {...settings}>
          <div>
          <iframe src="//3dbooth.egal.vn/phutho/banner/1/" className="owl-slide-iframe" ></iframe>
          </div>
          <div>
          <iframe src="//3dbooth.egal.vn/phutho/banner/2/" className="owl-slide-iframe" ></iframe>
          </div>
          <div>
          <iframe src="//3dbooth.egal.vn/phutho/banner/3/" className="owl-slide-iframe" ></iframe>
          </div>
          <div>
          <iframe src="//3dbooth.egal.vn/phutho/banner/4/" className="owl-slide-iframe" ></iframe>
          </div>
        </Slider>
      </div>
    )
}

export default Slider3D
