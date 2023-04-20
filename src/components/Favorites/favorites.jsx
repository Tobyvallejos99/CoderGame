import { useDispatch, useSelector } from "react-redux";
// import { orderCards,filterCards } from "../../redux/actions";
import Card from '../Card/card';

export default function Favorites() {
    const myFavorites = useSelector((state) => state.myFavorites); 

    const dispatch= useDispatch();

    // const handlerOrder=(event)=>{
    //     dispatch(orderCards(event.target.value))
    // }

    // const handlerFilter=(event)=>{
    //     dispatch(filterCards(event.target.value))
    // }

        return (
        <div style={{ display: "flex" }}>
        {/* <div>
            <select onClick={handlerOrder}>
            <option value="order" disabled="disabled">Order By</option>
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
            </select>
            <select onClick={handlerFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Unknown">Unknown</option>
            <option value="Genderless">Genderless</option>
            </select>
        </div> */}
        {myFavorites.map((elem) => (
            <Card
            name={elem.name}
            species={elem.species}
            gender={elem.gender}
            image={elem.image}
            id={elem.id}
            onClose={() => alert("Para eliminar toca el corazon")}
            />
        ))}
        </div>
    );
}