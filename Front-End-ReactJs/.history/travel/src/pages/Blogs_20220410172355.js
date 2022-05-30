import React, { useEffect } from 'react'
import Banner from '../components/common/Banner'
import ListBlock from '../components/blogs/ListBlock'

function Blogs() {
    useEffect(()=>{
        window.scrollTo(0, 0);  
        },[]);
    return (
        <div>         
            <Banner page="Bài Viết" title="Bài viết"/>
            <ListBlock/>            
        </div>
    )
}

export default Blogs
