import React from "react";
import style from '../Card/card.module.css'

export default function Card ({ name,image,released }) {
    return (
        <div className={style.minibox}>
            <div >
                <h2 className={style.title}>{name} </h2>
                <img src={image} alt={name} width='300px' height="200px" />
                <p>{released}</p>
            </div>
        </div>
    )
};