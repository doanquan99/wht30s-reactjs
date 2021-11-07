import React from 'react'
import './HeroBanner.css';
function HeroBanner() {
    return (
        <div className="hero-banner-container">
            <h3 className="title">launching open event!</h3>
            <img src="./img/hero-banner.png" alt="hero-banner" className="hero-banner" />
            <div className="footer">
                <button className="btn">LOREM IPSUM</button>
                <img src="/icon/arrow.png" className="icon-arrow" alt="icon" />
                <p className="description">MARKET<br/>LAUNCHING</p>
                <img src="/icon/arrow.png" className="icon-arrow" alt="icon" />
                <button className="btn">LOREM IPSUM</button>
            </div>
        </div>
    )
}

export default HeroBanner
