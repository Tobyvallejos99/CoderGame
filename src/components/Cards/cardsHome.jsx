import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../Redux/actions/actions";
import Card from "../Card/cardhome";
import style from '../Cards/cards.module.css'


const Cards = () => {
    
    const dispatch = useDispatch();
    const games = useSelector((state) => state.renderedVideogames);
    const page = useSelector(state => state.page)
    
    
    const [gamesPerPage, setGamesPerPage] = useState(3)
    const indexOfLastGame = page * gamesPerPage
    const indexOfFirstGame = indexOfLastGame - gamesPerPage
    
    const ordedByRatin =  games.sort((a,b) =>{
        if(a.rating > b.rating) return -1;
        if(a.rating < b.rating) return 1;
        return 0
    });
    const currentGames = ordedByRatin.slice(indexOfFirstGame, indexOfLastGame)
    

    useEffect(() => {
        dispatch(getVideogames());
    }, [dispatch])

    return(
        <div className="container">
            <div className={style.Cards__Box}>
                    {currentGames?.map((el) => {
                        return (
                            <div key={el.id} className={style.Cards__Box}>
                            <div key={el.id} className={style.Card}>
                                <Card key={el.id} id={el.id} name={el.name} image={el.image} released={el.released} price={el.price} description={el.description}/>
                            </div>
                            <p></p>
                            </div>
                        )
                    })}
                </div>
                <p></p>
        </div>
    )
}

export default Cards;