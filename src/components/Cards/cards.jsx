import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../Redux/actions/actions";
import Card from "../Card/card";

const Cards = () => {
    
    const dispatch = useDispatch();
    const games = useSelector((state) => state.renderedVideogames);
    
    useEffect(() => {
        dispatch(getVideogames());
    }, [dispatch])

    return(
        <div>
            <h1>CardContainer</h1>
            <div>
                    {games?.map((el) => {
                        return (
                            <div key={el.id}>
                                <Card key={el.id} name={el.name}/>
                            </div>
                        )
                    })}
                </div>
            
        </div>
    )
}

export default Cards;