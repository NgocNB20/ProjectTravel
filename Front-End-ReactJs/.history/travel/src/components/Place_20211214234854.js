import React from 'react'
import { Link } from 'react-router-dom'

function Place() {
    return (
        <div class="destinations-three__single">
            <div style={{width: '100%', height: '415px', backgroundImage: 'url(/DataFiles/2021/06/Files/20210605-170453-AZAGsuom.jpeg)'}} className="bg-img" />
            <div className="destinations-three__content">
                <h3><Link to="/vi/place/details/den-hung-1">Đền Hùng</Link></h3>
            </div>
            <div className="destinations-three__hover-content">
                <h3><Link to="/vi/place/details/den-hung-1">Đền Hùng</Link></h3>
                <p>Thành Phố Việt Trì</p>
                <Link to="/vi/place/details/den-hung-1" className="destinations-three__link">
                    <i className="tripo-icon-right-arrow" />
                </Link>
      </div>
        </div>
        
    )
}

export default Place
