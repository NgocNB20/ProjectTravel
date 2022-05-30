import React from 'react'
import { Link } from 'react-router-dom'
import HomeSearch from '../components/HomeSearch'
import Slider3D from '../components/Slider3D'

export default function Home() {
    return (
        <div id="slider3d">
            <Slider3D/>
            <HomeSearch/>
        </div>
    )
}
