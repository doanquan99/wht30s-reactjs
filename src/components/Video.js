import React from 'react'
import './Video.css'
import ButtonWht from './ButtonWht'
function Video() {
    return (
        <div className="video-container">
            <div className="content">
                <h3 className="title">what happened</h3>
                <p className="description">
                    How to create mobile-optimized videos in minutes. Not a designe
                    <br />
                    every team makes a lot of videos Can be trimmed. Take the first
                </p>
                <div>
                <ButtonWht>see more</ButtonWht>
                </div>
                <img src="/img/video-banner.png" alt="image" className="video-banner"/>
            </div>
            <img src="/img/video-background.png" alt="background-img" className="background-img"/>
        </div>
    )
}

export default Video
