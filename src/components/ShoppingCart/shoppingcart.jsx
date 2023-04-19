import React, { useContext } from "react";
import { CartContext } from "./ShoppingCartContext";
import NavBar from "../NavBar/NavBar";
import card from '../Card/card'

const ShoppingCart = () => {
    const [cart, setCart] = useContext(CartContext);

    const quantity = cart.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0);

    const totalPrice = cart.reduce(
        (acc, curr) => acc + curr.quantity * curr.price,
        0
    );

    return (
        
        <div className="cart-container">
            <NavBar/>
        <div className="container">
            <card/>
            <div>Items in cart: {quantity}</div>
            <div>Total: ${totalPrice}</div>
            <button onClick={() => (cart)}>Checkout</button>
        </div>
        </div>
    );
    };


export default ShoppingCart 