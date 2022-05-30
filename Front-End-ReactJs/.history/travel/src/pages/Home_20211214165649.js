import React from 'react'
import { Link } from 'react-router-dom'
import BlockTitle from '../components/BlockTitle'
import HomeSearch from '../components/HomeSearch'
import Slider3D from '../components/Slider3D'

export default function Home() {
    return (
        <div id="slider3d">
            <Slider3D/>
            <HomeSearch/>
            <BlockTitle title="Tin tức & Sự kiện" subtitle="Đừng bỏ lỡ"/>
        </div>
    )
}
