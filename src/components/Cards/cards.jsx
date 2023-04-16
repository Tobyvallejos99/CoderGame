import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../Redux/actions/actions";
import Card from "../Card/card";
import Pagination from "../Pagination/Pagination";
import style from '../Cards/cards.module.css'


const Cards = () => {
    
    const dispatch = useDispatch();
    const games = useSelector((state) => state.renderedVideogames);

    const [currentPage, setCurrentPage] = useState(1)
    const [gamesPerPage, setGamesPerPage] = useState(10)
    const indexOfLastGame = currentPage * gamesPerPage
    const indexOfFirstGame = indexOfLastGame - gamesPerPage
    const currentGames = games.slice(indexOfFirstGame, indexOfLastGame)

    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

        
    useEffect(() => {
        dispatch(getVideogames());
    }, [dispatch])

    return(
        <div>
            <div className={style.minibox}>
            <h1 class="display-5 text-danger">VideoGames</h1>
            </div>
            <div className={style.Cards__Box}>
                    {currentGames?.map((el) => {
                        return (
                            <div className={style.Cards__Box}>
                            <div key={el.id} className={style.Card}>
                                <Card key={el.id} name={el.name} image={el.image} released={el.released} />
                            </div>
                            </div>
                        )
                    })}
                </div>
            <Pagination
                    gamesPerPage={gamesPerPage}
                    games = {games.length}
                    pagination={pagination}
                    />
                    <p></p>
        </div>
    )
}

export default Cards;