import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // const cart = props.cart;  // option 1
    const { cart } = props;    // option 2
    console.log(cart);

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;

    for (const product of cart) {

        // if (product.quantity === 0) {        // system 1
        //     product.quantity = 1;
        // }

        // product.quantity = product.quantity || 1;        // system 2 (shortcut)

        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const totalTax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + totalTax;

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${totalTax.toFixed(2)}</p>
            <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
            {/* <a href="">Clear Cart</a> <br />
            <a href="">Order Review</a> */}
        </div>
    );
};

export default Cart;