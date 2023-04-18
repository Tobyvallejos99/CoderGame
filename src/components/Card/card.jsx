import React from "react";
import { Link } from "react-router-dom";
import style from '../Card/card.module.css'

export default function Card ({ name,image,released, price, description, id }) {
    return (
        <Link className={style.minibox} to={'/game/'+id}>
            <div className={style.containerizquierda}>
                <h2 className={style.title}>{name} </h2>
                <img src={image} alt={name} width='150px' height="85px" />
                <p>{released}</p>
            </div>
            <div>
                {/* <p className="font-10">{description}</p> */}
            </div>

            <Link className= {style.containerderecha} to={'/cart/'+id}>
            <div>
                ${price} 
            </div>
            </Link>
        </Link>
    )
};