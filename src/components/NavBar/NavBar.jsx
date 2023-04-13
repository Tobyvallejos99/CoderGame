import React from "react";
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar'
import style from  './navbar.module.css';

export default function NavBar() {
    return (
        <nav>
        <div className={style.navbar}>
        <Link to="/Home"><img src= "https://cdn.discordapp.com/attachments/509143549787504665/1096068638957649962/CoderGame.png" class="top-0 start-0 w-50 h-50" alt='codergame'
                width="250px" height="70px"/></Link>
            <div className={style.navbar__options}> 
            <SearchBar/>
            <Link class="btn btn-danger" to='/Activity'>Sell</Link>
            <Link class="btn btn-danger" to='/Activities'>Profile</Link>
            <Link class="btn btn-danger" to='/Activities'>🛒</Link>
            </div>
        </div>
        </nav>
    )
    }