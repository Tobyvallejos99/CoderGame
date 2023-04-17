import axios from "axios";
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_GENRES = "GET_GENRES";
export const FILTER_VIDEOGAMES = "FILTER_VIDEOGAMES";
export const FILTER_BY_GENRE = "FILTER_BY_GENRE";
export const SEARCH_VIDEOGAMES = "SEARCH_VIDEOGAMES";
export const GET_BY_NAME = "GET_BY_NAME";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export  const  CREATE_GAME = "CREATE_GAME"
export const ORDER_RATING = "ORDER_RATING";
export const RESET_VIDEOGAMES = "RESET_VIDEOGAMES";
export const SET_PAGE = "SET_PAGE";

export const getVideogames = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/videogames");
      console.log(response);
      dispatch({ type: GET_VIDEOGAMES, payload: response.data });
    } catch (error) {
      return window.alert(
        "No se pudo hacer el pedido de videojuegos al servidor"
      );
    }
  };
};

export const getGameByName = (payload) => {
  return {
    type: 'GET_BY_NAME',
    payload
  }
};

export const resetVideogames = () => {
  return { type: RESET_VIDEOGAMES };
  };

export const getGenres = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/genres");
      dispatch({ type: GET_GENRES, payload: response.data });
    } catch (error) {
      return window.alert("No se pudo hacer el pedido de géneros al servidor");
    }
  };
};

export const orderRating = (value) => {
  return { type: ORDER_RATING, payload: value };
};

export const filterVideogames = (value) => {
  return { type: FILTER_VIDEOGAMES, payload: value };
};

export const filterByGenre = (value) => {
  return { type: FILTER_BY_GENRE, payload: value };
};

export const orderName = (payload) => {
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
};

export const searchVideogames = (value) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/videogames?name=${value}`);
      dispatch({ type: SEARCH_VIDEOGAMES, payload: response.data });
    } catch (error) {
      return window.alert("No hay resultados que coinsidan con la busqueda");
    }
  };
};

export const postGame = (payload) => {
  return async (dispatch) => {
    const info = await axios.post("http://localhost:3001/videogames", payload);
    console.log(info);
    return info;
  };
};

export const setPage = (payload) => {
  return {
    type: SET_PAGE,
    payload,
  };
};
