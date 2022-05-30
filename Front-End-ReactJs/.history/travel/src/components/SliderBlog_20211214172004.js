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
          <div style={{}} />
          <div style={{width: '100%', height: '300px', backgroundImage: 'url(/image/img-block/20210605-230421-9K532hgf.jpeg)'}} className="bg-img" /><a href="/vi/blog/details/du-an-nghi-duong-tai-phu-tho-noi-bat-nho-nhung-dich-vu-doc-dao-13"><i className="fa fa-long-arrow-alt-right" /></a>
        </div>
        <div className="blog-one__content">
          <ul className="list-unstyled blog-one__meta">
            <li><a href="#"><i className="far fa-calendar-alt" /> 05/06/2021</a>
            </li>
            <li><a href="#" title="Lượt xem"><i className="far fa-eye" /> 11</a>
            </li>
            <li><a href="#" title="Lượt thích"><i className="far fa-heart" />
                1</a></li>
          </ul>
          <h3><a href="/vi/blog/details/du-an-nghi-duong-tai-phu-tho-noi-bat-nho-nhung-dich-vu-doc-dao-13">Dự
              án nghỉ dưỡng tại Phú Thọ - Nổi bật nhờ những dịch vụ độc
              đáo</a></h3>
        </div>
      </div>
      <div className="blog-one__single">
        <div className="blog-one__image">
          <div style={{}} />
          <div style={{width: '100%', height: '300px', backgroundImage: 'url(/image/img-block/20210605-230421-9K532hgf.jpeg)'}} className="bg-img" /><a href="/vi/blog/details/du-an-nghi-duong-tai-phu-tho-noi-bat-nho-nhung-dich-vu-doc-dao-13"><i className="fa fa-long-arrow-alt-right" /></a>
        </div>
        <div className="blog-one__content">
          <ul className="list-unstyled blog-one__meta">
            <li><a href="#"><i className="far fa-calendar-alt" /> 05/06/2021</a>
            </li>
            <li><a href="#" title="Lượt xem"><i className="far fa-eye" /> 11</a>
            </li>
            <li><a href="#" title="Lượt thích"><i className="far fa-heart" />
                1</a></li>
          </ul>
          <h3><a href="/vi/blog/details/du-an-nghi-duong-tai-phu-tho-noi-bat-nho-nhung-dich-vu-doc-dao-13">Dự
              án nghỉ dưỡng tại Phú Thọ - Nổi bật nhờ những dịch vụ độc
              đáo</a></h3>
        </div>
      </div>
          
        </Slider>
      </div>
    )
}
