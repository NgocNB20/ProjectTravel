import React from 'react'
import { Link } from 'react-router-dom'

function SingleTour() {
    return (
        <div className="tour-one__single">
            <div className="tour-one__image">
        <div style={{height: '292px', backgroundImage: 'url(/DataFiles/2021/06/Files/20210606-181351-sGjoMqyP.jpeg)'}} className="bg-img" /><Link to="#" className="add-favorite"><i className="fa fa-heart" />0</Link>
      </div>
        </div>
    )
}

export default SingleTour
