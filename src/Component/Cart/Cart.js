import React from 'react';
import './Cart.css';

const Cart = (props) => {
    return (
        <div>
            <ul>
                {
                    props.cart.map(single => <li>{single.strMeal}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;