import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // const cart = props.cart;  // option 1
    const { cart } = props;    // option 2

    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: $</p>
            <p>Tax: $</p>
            <h2>Grand Total: $</h2>
            <a href="">Clear Cart</a> <br />
            <a href="">Order Review</a>
        </div>
    );
};

export default Cart;