import React from 'react'
import './Brand.css'
function Brand({img,name,nameBackgroundColor,isHot,isLol}) {
    return (
        <div className="brand">
            <p className="name" style={{backgroundColor:nameBackgroundColor}}>{name}</p>
            <img src={img} alt="brand-img" className="img" />
            {isHot ? <img src="/icon/icon-hot.png" className="icon-hot" /> : ""}
            {isLol ? <img src="/icon/icon-lol.png" className="icon-lol" /> : ""}
        </div>
    )
}

export default Brand
