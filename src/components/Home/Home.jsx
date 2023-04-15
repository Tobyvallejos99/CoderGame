import Cards from '../Cards/cards';
import Slider from '../Slider/Slider';
import NavBar from '../NavBar/NavBar';
import SubNavBar from '../SubNavBar/SubNavBar';
import Pagination from '../Pagination/Pagination';
// import { useState } from 'react';
// import { useDispatch, useSelector } from "react-redux";



const Home = () => {

    //const dispatch = useDispatch();
    //const games = useSelector((state) => state.renderedVideogames);
    

    return(
        <div>
            <NavBar/>
            <p/>
            <div class="d-flex justify-content-center align-items-center">
            <SubNavBar/>
            </div>
            <p/>
            <Slider />
            <div className='position-absolute'><Cards /></div>
            
        </div>
    )
}

export default Home;