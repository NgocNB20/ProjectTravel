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
        <div class="blog-one__single">
                                            <div class="blog-one__image">
                                                <div style=""></div>
                                                <div style="width: 100%; height: 300px; background-image: url(/image/img-block/20210605-230421-9K532hgf.jpeg);" class="bg-img"></div>
                                                <a href="/vi/blog/details/du-an-nghi-duong-tai-phu-tho-noi-bat-nho-nhung-dich-vu-doc-dao-13"><i class="fa fa-long-arrow-alt-right"></i></a>
                                            </div>
                                            <div class="blog-one__content">
                                                <ul class="list-unstyled blog-one__meta">
                                                    <li><a href="#"><i class="far fa-calendar-alt"></i> 05/06/2021</a>
                                                    </li>
                                                    <li><a href="#" title="Lượt xem"><i class="far fa-eye"></i> 11</a>
                                                    </li>
                                                    <li><a href="#" title="Lượt thích"><i class="far fa-heart"></i>
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
