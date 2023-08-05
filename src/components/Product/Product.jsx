import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, name, price, manufacturer } = props.product;
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default Product;