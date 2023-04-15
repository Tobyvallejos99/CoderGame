import React from "react";


export default function Card ({ name,image,released }) {
    return (
        <div className="text-center ">
            <div class="btn btn-secondary" >
                <h2>{name} </h2>
                <img src={image} alt={name} width='300px' height="200px" />
                <p>{released}</p>
            </div>
        </div>
    )
};