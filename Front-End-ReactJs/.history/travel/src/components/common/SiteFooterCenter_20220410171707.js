import React from 'react'
import { Link } from 'react-router-dom'

function SiteFooterCenter() {
    return (
        <div className="col-md-3 footer-list" >
        <h3 className="footer-widget__title">Liên kết</h3>
        <ul className="footer-icon-links-list list-unstyled">
          <li><Link to="/vi/places"><i className="fas fa-camera-retro" /> Điểm du lịch</Link></li>
          <li><Link to="/vi/vtours"><i className="fas fa-cube" /> Khám phá 3D</Link></li>
          <li><Link to="/vi/agencies"><i className="fas fa-store-alt" /> Lữ hành</Link></li>
          <li><Link to="/vi/tours"><i className="fas fa-route" /> Tour du lịch</Link></li>
          <li><Link to="/vi/hotels"><i className="fas fa-hotel" /> Lưu trú</Link></li>
          <li><Link to="/vi/restaurants"><i className="fas fa-utensils" /> Ẩm thực</Link></li>
        </ul>
      </div>
    )
}

export default SiteFooterCenter
