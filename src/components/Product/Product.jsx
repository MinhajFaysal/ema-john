import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, name, price, manufacturer } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>Price: {price}$</h4>
            <p>Manufacturer: {manufacturer}</p>
        </div>
    );
};

export default Product;