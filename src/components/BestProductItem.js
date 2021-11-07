import React from 'react'
import './BestProductItem.css'
function BestProductItem({img,orderNumber}) {
    return (
        <div className="best-product-item">
            <img src="./img/best-product-circle-number.png" alt="icon" className="icon-order-number"/>
            <span className="order-number">{orderNumber}</span>
            <img src={img ? img : '/img/default-img.png'} alt="img" className="product-img"/>
            <div className="footer">
                <p className="text">How to create mobile-optimized</p>
                <button className="btn">GO</button>
            </div>
        </div>
    )
}

export default BestProductItem
