import axios from "axios";
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_GENRES = "GET_GENRES";
export const FILTER_VIDEOGAMES = "FILTER_VIDEOGAMES";
export const FILTER_BY_GENRE = "FILTER_BY_GENRE";
export const SEARCH_VIDEOGAMES = "SEARCH_VIDEOGAMES";
export const GET_BY_NAME = "GET_BY_NAME";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const CREATE_GAME = "CREATE_GAME";
export const ORDER_RATING = "ORDER_RATING";
export const RESET_VIDEOGAMES = "RESET_VIDEOGAMES";
export const SET_PAGE = "SET_PAGE";
export const BUY_COIN = "BUY_COIN";

export const POST_USER = "POST_USER";
export const CREATE_USER = "CREARE_USER";
export const LOGUIN_USER = "LOGUIN_USER";

export const ADD_FAV = "ADD_FAV";
export const DELETE_FAV = "DELETE_FAV";

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
    type: "GET_BY_NAME",
    payload,
  };
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

export const postUser = (payload, token) => {
  return async (dispatch) => {
    const info = await axios.post(
      "http://localhost:3001/user/register",
      payload,
      token
    );
    console.log(info);
    return {
      type: POST_USER,
      payload,
    };
  };
};

export const postGame = (payload, token) => {
  return async (dispatch) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const info = await axios.post(
      "http://localhost:3001/videogames",
      payload,
      config
    );
    return info;
  };
};

// export const postGame = (payload) => {
//   return async (dispatch) => {
//     const info = await axios.post("http://localhost:3001/videogames", payload);
//     console.log(info);
//     return info;
//   };
// };

export const setPage = (payload) => {
  return {
    type: SET_PAGE,
    payload,
  };
};

export const buyCoin = (payload) => {
  return async (dispatch) => {
    const buy = await axios.post(
      "http://localhost:3001/create-checkout-session",
      payload
    );
    console.log(payload, "hola");
    return buy;
  };
};

export const loguinUser = (payload) => {
  return {
    type: LOGUIN_USER,
    payload,
  };
};

export const addFav = (videogame) => {
  return { type: ADD_FAV, payload: videogame };
};

export const deleteFav = (id) => {
  return { type: DELETE_FAV, payload: id };
};
