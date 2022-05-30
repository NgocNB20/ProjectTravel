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
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
          <iframe src="//3dbooth.egal.vn/phutho/banner/2/" class="owl-slide-iframe" allow="vr; xr; accelerometer; magnetometer; gyroscope; autoplay;"></iframe>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    )
}

export default Slider3D
