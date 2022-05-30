import React from 'react';
 
import {Link} from 'react-router-dom';
import  { useState } from 'react';
import TopHeader from './TopHeader';
 
 

function Navbar() {
    // const [isOpen,setIsOpen]= useState(false);
    // const handleToggle =()=>{setIsOpen(!isOpen);};
    // return (
    //     <nav className="navbar">
    //         <div className="nav-center">
    //         <div className="nav-header">
    //             <Link to="/">
    //                 <h1>Logo</h1>
    //             </Link>
    //             <button className="nav-btn" type="button" onClick={handleToggle}>
                     
    //             </button>
    //         </div>
    //         <ul className={isOpen ? "nav-links show-nav":"nav-links"}>
    //             <li>
    //                 <Link to="/">Home</Link>
    //             </li>
    //             <li>
    //                 <Link to="/rooms">Rooms</Link>
    //             </li>

    //         </ul>
    //         </div>
    //     </nav>
    // )
    <TopHeader />
}

 
export default Navbar

