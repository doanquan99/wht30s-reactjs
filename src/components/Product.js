import React from 'react'
import './Product.css'
function Product({name,price,numberOfHearts,img}) {
    return (
            <div className="product">
                <img src={img} alt="img" className="product-img"/>
                <p className="name">[What happen] {name}</p>
                <div className="footer">
                    <p className="price">{price}</p>
                    <div className="number-of-likes">
                        <img src="/icon/heart-icon.png" alt="icon" />
                        { numberOfHearts}
                    </div>
                </div>
            </div>

    )
}

export default Product
