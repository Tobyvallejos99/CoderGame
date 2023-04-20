import React from "react";
import style from "../Pagination/Pagination.module.css"
import { useDispatch } from "react-redux";
import { setPage } from "../../Redux/actions/actions";

export default function Pagination ({gamesPerPage, games}) {
    const pageNumbers = []
    const dispatch = useDispatch()

    for (let i = 1; i <= Math.ceil(games/gamesPerPage); i++) {
        pageNumbers.push(i);
    }

    return(
        <nav className={style.nav_container}>
            <ul className={style.ul_container}> 
                {pageNumbers && 
                pageNumbers.slice(0, 20).map(number => (
                    <li className={style.li_container} onClick={() => dispatch(setPage(number))} key={number}>
                        <button className="btn btn-danger" type="button">{number}</button> 
                    </li>
                ))}
                {pageNumbers.length > 20 && (
                    <li className={style.li_container}>
                        <button className="btn btn-danger" type="button">...</button>
                    </li>
                )}
            </ul>
        </nav>
    ) 
}

