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
          <iframe src="//3dbooth.egal.vn/phutho/banner/1/" class="owl-slide-iframe" allow="vr; xr; accelerometer; magnetometer; gyroscope; autoplay;"></iframe>
          </div>
          <div>
          <iframe src="//3dbooth.egal.vn/phutho/banner/2/" class="owl-slide-iframe" allow="vr; xr; accelerometer; magnetometer; gyroscope; autoplay;"></iframe>
          </div>
          <div>
          <iframe src="//3dbooth.egal.vn/phutho/banner/3/" class="owl-slide-iframe" allow="vr; xr; accelerometer; magnetometer; gyroscope; autoplay;"></iframe>
          </div>
        </Slider>
      </div>
    )
}

export default Slider3D
