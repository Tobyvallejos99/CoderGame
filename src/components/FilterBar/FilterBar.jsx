import { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideogames, orderName, resetVideogames, setPage } from "../../Redux/actions/actions";
import GenderFilter from "./genderFilter";
import RatingFilter from "./RatingFilter";

const FilterBar = () => {
    const dispatch = useDispatch();    
    const [orden, setOrden] = useState('');
    console.log(orden)

    const handlerNameOrder = (e) => {
        dispatch(orderName(e.target.value));        
        setOrden(`Ordenado ${e.target.value}`);
    }
    const handleReset = () => {        
        dispatch(resetVideogames());
        dispatch(getVideogames());
    }


    return(
        <div class="btn-group ">
            <select class="btn btn-secondary mx-2 rounded" onChange={handlerNameOrder}>
                <option value="base" hidden={true}>Display options</option>
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
            </select>
            <GenderFilter />
            <RatingFilter />
            <button class="btn btn-secondary mx-2 rounded " onClick={handleReset}>Reset</button>
        </div>
    )
}

export default FilterBar;