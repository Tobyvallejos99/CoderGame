import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../Redux/actions/actions";
import Card from "../Card/card";
import Pagination from "../Pagination/Pagination";


const Cards = () => {
    
    const dispatch = useDispatch();
    const games = useSelector((state) => state.renderedVideogames);

    const [currentPage, setCurrentPage] = useState(1)
    const [gamesPerPage, setGamesPerPage] = useState(13)
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
            <h1>CardContainer</h1>
            <div>
            <Pagination
                    gamesPerPage={gamesPerPage}
                    games = {games.length}
                    pagination={pagination}
                    />
            
                    {currentGames?.map((el) => {
                        return (
                            <div key={el.id}>
                                <Card key={el.id} name={el.name} image={el.image} released={el.released} />
                            </div>
                        )
                    })}
                </div>
            
        </div>
    )
}

export default Cards;