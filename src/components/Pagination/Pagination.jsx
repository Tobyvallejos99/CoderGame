import React from "react";
import style from "../Pagination/Pagination.module.css"

export default function pagination ({gamesPerPage, games, pagination}) {
    const pageNumbers = []

    for (let i = 0; i <= Math.ceil(games/gamesPerPage); i++) {
        pageNumbers.push(i);
        
    }

    return(
        <nav className={`${style.nav_container}`}>
            <ul className={`${style.ul_container}`}> 
                {pageNumbers && 
                pageNumbers.map(number => (
                    <li className={`${style.li_container}`} onClick={() => pagination(number)} key={number}>
                         <button type="button">{number}</button> 
                    </li>
                ))}
            </ul>
        </nav>
    ) 
}

