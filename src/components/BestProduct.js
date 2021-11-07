import React from 'react'
import './BestProduct.css'
import BestProductItem from './BestProductItem'
function BestProduct() {
    return (
        <div className="best-product-container">
            <h3 className="title">BEST PRODUCT</h3>
            <p className="description">
                How to create mobile-optimized videos in minutes. Not a designer,<br />
                every team makes a lot of videos Can be trimmed. Take the first
            </p>
            <img src="/img/best-product-background.png" alt="back-ground" className="background-img" />
            <div className="product-content">
                <div className="item">
                    <BestProductItem
                        img="/img/best-product-img-1.png"
                        orderNumber="01"
                    />
                </div>
                <div className="item">
                    <BestProductItem
                        img="/img/best-product-img-2.png"
                        orderNumber="02"
                    />
                </div>
                <div className="item">
                    <BestProductItem
                        img="/img/best-product-img-3.png"
                        orderNumber="03"
                    />
                </div>
            </div>

        </div>
    )
}
export default BestProduct
