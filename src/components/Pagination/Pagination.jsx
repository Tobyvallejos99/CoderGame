import React, { useState } from "react";
import style from "../Pagination/Pagination.module.css";
import { useDispatch } from "react-redux";
import { setPage } from "../../Redux/actions/actions";

export default function Pagination ({gamesPerPage, games}) {
    const pageNumbers = []
    const dispatch = useDispatch()
    for (let i = 1; i <= Math.ceil(games/gamesPerPage); i++) {
        pageNumbers.push(i);
    }
    
    const [currentPage, setCurrentPage] = useState(1);
    const [displayRange, setDisplayRange] = useState({start: 1, end: 10}); // Se muestra el rango del 1 al 10 por defecto
    
    const handleClick = (number) => {
        setCurrentPage(number);
        dispatch(setPage(number));
    };
    
    const handlePrev = () => {
        if (currentPage <= displayRange.start) {
        const newStart = displayRange.start - 10;
        const newEnd = displayRange.start - 1;
        setDisplayRange({start: newStart, end: newEnd});
        }
        setCurrentPage(currentPage - 1);
        dispatch(setPage(currentPage - 1));
    };
    
    const handleNext = () => {
        if (currentPage >= displayRange.end) {
        const newStart = displayRange.end + 1;
        const newEnd = displayRange.end + 10;
        setDisplayRange({start: newStart, end: newEnd});
        }
        setCurrentPage(currentPage + 1);
        dispatch(setPage(currentPage + 1));
    };
    
    const renderPageNumbers = () => {
        return pageNumbers
        .filter(number => number >= displayRange.start && number <= displayRange.end)
        .map(number => (
            <li className={style.li_container} onClick={() => handleClick(number)} key={number}>
            <button className="btn btn-danger" type="button">{number}</button>
            </li>
        ));
    };
    
    return(
        <nav className={style.nav_container}>

        <ul className={style.ul_container}>
            <li className={style.li_container}>
            <button className="btn btn-danger" type="button" onClick={handlePrev} disabled={currentPage === 1}>
                Prev
            </button>
            </li>
            {renderPageNumbers()}
            <li className={style.li_container}>
            <button className="btn btn-danger" type="button" onClick={handleNext} disabled={currentPage === pageNumbers.length}>
                Next
            </button>
            </li>
        </ul>
        </nav>
    );
}
