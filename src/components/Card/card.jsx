import React from "react";

export default function Card ({ name, img, gender, id }) {
    return (
        <div>
        <h2>{name}</h2>
        <img  src={img} alt={name}/>
            <h5>Genero: {gender}</h5>
        </div>
    )
};