import React from "react";


export default function Card ({ name, flag, gender, id }) {
    return (
        <div>
        <h2>{name}</h2>
        <img  src={flag} alt={name}/>
            <h5>Genero: {gender}</h5>
        </div>
    )
};