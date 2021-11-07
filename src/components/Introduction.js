import React from 'react'
import './Introduction.css'
function Introduction() {
    return (
        <div className="introduction-container">
            <img src="/img/introduction-banner.png" alt="banner" className="introduction-background" />
            <div className="introduction-content">
                <div className="grid-row">
                    <div className="grid-col">
                        <h3 className="heading">WHAT HAPPENED</h3>
                        <p className="description">How to create mobile-optimized videos in minutes. Not a designer,<br />
                            every team makes a lot of videos Can be trimmed. Take the first<br />
                            step to your brand's success. How to create<br />
                            mobile-optimized videos in minutes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction
