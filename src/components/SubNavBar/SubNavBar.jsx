import React from "react";
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar'
import style from  './subnavbar.module.css';

export default function NavBar() {
    return (
            <div className={style.navbar}>
                <nav>
                    <div>
                        <SearchBar />
                    </div>
                </nav>
            </div>
    )
    }