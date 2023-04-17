import React from "react";
import { Link } from "react-router-dom";
import style from '../Card/card.module.css'

export default function Card ({ name,image,released, id }) {
    return (
        <Link className={style.minibox} to={'/game/'+id}>
            <div >
                <h2 className={style.title}>{name} </h2>
                <img src={image} alt={name} width='300px' height="200px" />
                <p>{released}</p>
            </div>
        </Link>
    )
};