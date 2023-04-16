import { useDispatch } from "react-redux";
import { orderRating } from "../../Redux/actions/actions";

const RatingFilter = () => {
    const dispatch = useDispatch();

    const handleRating = (e) => {
        dispatch(orderRating(e.target.value));
      };
    return(
        <div>
            <select class="btn btn-secondary mx-2" name="rating" id="rating" onChange={handleRating}>
          <option value="base" hidden={true}>
            Rating
          </option>
          <option value="upward">1-5</option>
          <option value="downward">5-1</option>
        </select>
        </div>
    )
}

export default RatingFilter;