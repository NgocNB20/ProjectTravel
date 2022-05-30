import React from 'react'

export default function Navbar() {
    return (
        <div>
            <h1 className="text-center">Navbar</h1>
            const [isOpen,setIsOpen]= useState(false);
    const handleToggle =()=>{setIsOpen(!isOpen);};
    return (
        <nav className="navbar">
            <div className="nav-center">
            <div className="nav-header">
                <Link to="/">
                    <img src={logo} alt="Beach Resort"/>
                </Link>
                <button className="nav-btn" type="button" onClick={handleToggle}>
                    <FaAlignRight className="nav-icon" />
                </button>
            </div>
            <ul className={isOpen ? "nav-links show-nav":"nav-links"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/rooms">Rooms</Link>
                </li>

            </ul>
            </div>
        </nav>
    )
        </div>
    )
}
