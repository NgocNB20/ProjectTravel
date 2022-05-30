import React from 'react'
import { Link } from 'react-router-dom'
import Slider3D from '../components/Slider3D'

export default function Home() {
    return (
        <div id="slider3d">
            <Slider3D/>
            <Link to="#home-blogs2" className="scroll-down-button style5"><span></span>Cuộn xuống</Link>
        </div>
    )
}
