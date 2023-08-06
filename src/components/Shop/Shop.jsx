import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        console.log('product added', product);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>Order Summary</h2>
                <p>Selected Items:</p>
                <p>Total Price: $</p>
                <p>Total Shipping Charge: $</p>
                <p>Tax: $</p>
                <h2>Grand Total: $</h2>
                <a href="">Clear Cart</a> <br />
                <a href="">Order Review</a>
            </div>
        </div>
    );
};

export default Shop;