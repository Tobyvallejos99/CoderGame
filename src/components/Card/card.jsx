import React from "react";
import { Link } from "react-router-dom";
import style from '../Card/card.module.css'
import { useContext } from "react";
import { CartContext } from "../ShoppingCart/ShoppingCartContext";

export default function Card ({ name,image,released, price, description, id }) {

    const [cart, setCart]= useContext(CartContext)

    const addToCart = () => {
        setCart((currItems) => {
            const isItemsFound = currItems.find((item) => item.id === id);
            if (isItemsFound) {
                return currItems.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity + 1 };
                } else {
                    return item;
                }
                });
            } else {
                return [...currItems, { id, quantity: 1, price }];
            }
            });
        };

    const removeItem = (id) => {
            setCart((currItems) => {
            if (currItems.find((item) => item.id === id)?.quantity === 1) {
            return currItems.filter((item) => item.id !== id);
            } else {
            return currItems.map((item) => {
                if (item.id === id) {
                return { ...item, quantity: item.quantity - 1 };
                } else {
                return item;
                }
            });
            }
        });
        };
        
    // const getQuantityById = (id) => {
    //         return cart.find((item) => item.id === id)?.quantity || 0;
    //     };
        
    // const quantityPerItem = getQuantityById(id);


    return (
        <Link className={style.minibox} to={'/game/'+id}>
            <div className={style.containerizquierda}>
                <h2 className={style.title}>{name} </h2>
                <img src={image} alt={name} width='150px' height="85px" />
                <p>{released}</p>
            </div>
            <div className= {style.containerderecha} to={'/cart/'+id}>
            <div>
                ${price} 
            </div>
            <></>
            <button className={style.containerderecha} onClick={() => addToCart()}>
            +Add to cart
            </button>
            </div>
        </Link>
    )
};