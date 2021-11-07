import React from 'react'
import './BrandStory.css'
import ButtonWht from './ButtonWht'
function BrandStory() {
    return (
        <div className="brand-story-container">
            <h3 className="title">brand story</h3>
            <p className="description">
                모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서 다듬을 수 있습니다
                <br />
                <br />
                다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요
            </p>
            <img src="/img/brand-story-background.png" alt="background" className="background-img" />
            <img src="./img/brand-story-banner.png" alt="banner" className="banner-img" />
            <div className="content">
                <h3 className="content-title">What Happened’s Brand story</h3>
                <p className="text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae obcaecati non repellat fugiat explicabo, quae, fugit ducimus perferendis soluta nisi ipsam vitae sunt. Culpa incidunt tempora delectus recusandae deserunt alias.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet enim molestiae nesciunt, ipsa hic fugiat quos, ipsum quis aliquam
                </p>
                <ButtonWht>see more</ButtonWht>
            </div>
        </div>
    )
}

export default BrandStory
