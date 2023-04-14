import React from "react";


export default function Card ({ name,image,released }) {
    return (
        <div class="btn btn-secondary" >
        <h2>{name}</h2>
        <img src={image} alt={name} width='300px' />
        <p>{released}</p>
        </div>
    )
};