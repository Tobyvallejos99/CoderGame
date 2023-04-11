import React from "react";
import style from '../Card/card.module.css';

export default function Card ({ name, img, gender, id }) {
    return (
        <div className={style.Card_Box}>
        <h2 className={style.Card__Name}>{name}</h2>
        <img className={style.Card__Img} src={img} alt={name}/>
            <h5 className={style.Card__Continent}>Genero: {gender}</h5>
        </div>
    )
};