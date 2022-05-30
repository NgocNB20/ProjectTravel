import React from 'react'
import { Link } from 'react-router-dom'

function Blog({blog}) {
    return (
        <div className="blog-one__single ">
        <div className="blog-one__image">
            <div style={{width: '100%', height: '300px', backgroundImage: 'url(/image/img-block/20210605-230421-9K532hgf.jpeg)'}} className="bg-img" />
            <Link to="/vi/blog/details/du-an-nghi-duong-tai-phu-tho-noi-bat-nho-nhung-dich-vu-doc-dao-13"><i className="far fa-arrow-right"></i></Link>
        </div>
        <div className="blog-one__content">
            <ul className="list-unstyled blog-one__meta">
                <li><Link to="#"><i className="far fa-calendar-alt" /> 05/06/2021</Link></li>
                <li><Link to="#" title="Lượt xem"><i className="far fa-eye" /> 11</Link></li>
                <li><Link to="#" title="Lượt thích"><i className="far fa-heart" />1</Link></li>
            </ul>
            <h3>
                <Link to="/vi/blog/details/du-an-nghi-duong-tai-phu-tho-noi-bat-nho-nhung-dich-vu-doc-dao-13">Dự án nghỉ dưỡng tại Phú Thọ - Nổi bật nhờ những dịch vụ độc đáo</Link>
            </h3>
        </div>
    </div>
    )
}

export default Blog

