import React from "react";
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar'
import style from  './subnavbar.module.css';
import FilterBar from '../FilterBar/FilterBar'

export default function NavBar() {
    return (
            <div className={style.navbar}>
                <nav>
                    <div className="ro">
                        <SearchBar />
                        <FilterBar/>
                    </div>
                </nav>
            </div>
    )
    }