import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, filterByGenre, setPage } from "../../Redux/actions/actions";

const GenderFilter = () => {
    const dispatch = useDispatch();    
    const allGenres = useSelector((state) => state.allGenres);

    useEffect(()=>{
        if(!allGenres.length) {
            dispatch(getGenres());            
        }
    }, []);

    const handleGenre = (e) => {
      dispatch(setPage(1));
        dispatch(filterByGenre(e.target.value));      
    }

    return(
        <select class=" btn btn-secondary mx-2 rounded" name="genres" id="genres" onChange={handleGenre}>
          <option value="base" hidden={true}>
            Gender
          </option>
          {allGenres?.map((obj, index) => {
            return (
              <option value={obj.name} key={index}>
                {obj.name}
              </option>
            );
          })}
        </select>
    )
}

export default GenderFilter;