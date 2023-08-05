import React from 'react';

const Summary = () => {
    return (
        <div>
            <h2>Order Summary</h2>
            <p>Selected Items:</p>
            <p>Total Price: $</p>
            <p>Total Shipping Charge: $</p>
            <p>Tax: $</p>
            <h2>Grand Total: $</h2>
            <a href="">Clear Cart</a> <br />
            <a href="">Order Review</a>
        </div>
    );
};

export default Summary;