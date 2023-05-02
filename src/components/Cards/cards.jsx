import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../Redux/actions/actions";
import Card from "../Card/card";
import Pagination from "../Pagination/Pagination";
import style from '../Cards/cards.module.css'
import { useAuth0 } from "@auth0/auth0-react";

const Cards = () => {
    
    const dispatch = useDispatch();
    const games = useSelector((state) => state.renderedVideogames);
    const page = useSelector(state => state.page)
    const {user, isAuthenticated} = useAuth0()

    const [gamesPerPage, setGamesPerPage] = useState(5)
    const indexOfLastGame = page * gamesPerPage
    const indexOfFirstGame = indexOfLastGame - gamesPerPage
    const currentGames = games.slice(indexOfFirstGame, indexOfLastGame)
    

    useEffect(() => {
        isAuthenticated?dispatch(getVideogames(user.sub))
        :dispatch(getVideogames())
        ;
    }, [dispatch])

    return(
        <div className="container">
            <div className={style.Cards__Box}>
                    {currentGames?.map((el) => {
                        return (
                            <div key={el.id} className={style.Cards__Box}>
                            <div key={el.id} className={style.Card}>
                                <Card key={el.id} id={el.id} name={el.name} image={el.image} released={el.released} price={el.price} description={el.description} promotions={el.Promotions} favorites={el.Favorites}/>
                            </div>
                            <p></p>
                            </div>
                        )
                    })}
                </div>
            <Pagination
                    gamesPerPage={gamesPerPage}
                    games = {games.length}                   
                    />
                    <p></p>
        </div>
    )
}

export default Cards;