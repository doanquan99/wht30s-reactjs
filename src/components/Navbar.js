import React,{useState} from 'react'
import './Navbar.css'

function Navbar() {
    const [click,setClick] = useState(false)
    
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src='/img/-e-logo.png' alt="img" className="logo" />
                </div>
                <div className="menu-icon" onClick={handleClick}>
                    <img src={click ? './icon/times-solid.svg':'./icon/bars-solid.svg'} alt="icon" className="icon"/>
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu" } >
                    <li className="nav-item" onClick={closeMobileMenu}>INTRODUCTION</li>
                    <li className="nav-item" onClick={closeMobileMenu}>SOLUTION</li>
                    <li className="nav-item" onClick={closeMobileMenu}>RATE PLAN</li>
                    <li className="nav-item" onClick={closeMobileMenu}>LOGIN</li>
                    <li className="nav-item" onClick={closeMobileMenu}>APPLY FOR FREE USE</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
