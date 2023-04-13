import { useState } from "react";
import { useDispatch } from "react-redux";
import { orderName } from "../../Redux/actions/actions";
import SearchBar from "../SearchBar/SearchBar";

const FilterBar = () => {
    const dispatch = useDispatch();
    const [orden, setOrden] = useState('');

    const handlerNameOrder = (e) => {
        dispatch(orderName(e.target.value));
        setOrden(`Ordenado ${e.target.value}`);
    }


    return(
        <div>
            <select onChange={handlerNameOrder}>
                <option value="base" hidden={true}>
                --Display options
                </option>
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
            </select>
            <SearchBar />
        </div>
    )
}

export default FilterBar;