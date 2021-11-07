import React from 'react'
import Grid from "@mui/material/Grid";
import './ListProduct.css'
import Product from './Product';
import ButtonWht from './ButtonWht';

const products = [
    {
        name: "How to create",
        price: "2,500 won",
        img: "/img/product_img_01.png",
        numberOfHearts: "236"
    },
    {
        name: "How to create",
        price: "2,500 won",
        img: "/img/product_img_02.png",
        numberOfHearts: "236"
    },
    {
        name: "How to create",
        price: "2,500 won",
        img: "/img/product_img_03.png",
        numberOfHearts: "236"
    },
    {
        name: "How to create",
        price: "2,500 won",
        img: "/img/product_img_04.png",
        numberOfHearts: "236"
    },
    {
        name: "How to create",
        price: "2,500 won",
        img: "/img/product_img_05.png",
        numberOfHearts: "236"
    },
    {
        name: "How to create",
        price: "2,500 won",
        img: "/img/product_img_05.png",
        numberOfHearts: "236"
    },
    {
        name: "How to create",
        price: "2,500 won",
        img: "/img/product_img_04.png",
        numberOfHearts: "236"
    },
    {
        name: "How to create",
        price: "2,500 won",
        img: "/img/product_img_03.png",
        numberOfHearts: "236"
    },
    {
        name: "How to create",
        price: "2,500 won",
        img: "/img/product_img_02.png",
        numberOfHearts: "236"
    },
    {
        name: "How to create",
        price: "2,500 won",
        img: "/img/product_img_01.png",
        numberOfHearts: "236"
    }
]


function ListProduct() {
    return (
        <div className="list-product-container">
            <Grid container spacing={2} columns={10}>
                {products.map((product, index) => (
                    <Grid item xl={2} xs={5} key={index}>
                        <Product
                            name={product.name}
                            price={product.price}
                            numberOfHearts={product.numberOfHearts}
                            img={product.img}
                        />
                    </Grid>
                ))}
            </Grid>
            <div className="button-container">
                <ButtonWht background="#fff">see more</ButtonWht>
            </div>
        </div>
    )
}

export default ListProduct
