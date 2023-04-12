import axios from "axios";
import { getAll } from "../reducer/getGameSlice.js";

export const getVideoGames = () => {
  return async (dispatch) => {
    const res = await axios.get(
      "https://api.rawg.io/api/genres?key=f1604d8ab749472fafc5267341014b22"
    );
    return dispatch(getAll(res.data));
  };
};
