import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Summary from '../Order Summary/Summary';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Summary></Summary>
            </div>
        </div>
    );
};

export default Shop;