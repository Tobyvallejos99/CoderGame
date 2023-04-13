import {
  GET_VIDEOGAMES,
  GET_GENRES,
  FILTER_VIDEOGAMES,
  FILTER_BY_GENRE,
  SEARCH_VIDEOGAMES,
  GET_BY_NAME
} from "../actions/actions";

const initialState = {
  allVideogames: [],
  allGenres: [],
  renderedVideogames: [],
  toFilterByVideogames: [],
  toFilterByGenre: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        allVideogames: [...action.payload],
        renderedVideogames: [...action.payload],
      };

    case GET_BY_NAME:
      const game = state.allVideogames;
      const filteredName = game.filter((el) => el.name.toLowerCase().includes(action.payload.toLowerCase()));
      return {
        ...state,
        renderedVideogames: filteredName
      }

      case 'ORDER_BY_NAME':
        console.log(action.payload)
        // let order = action.payload === 'asc' ?
        //     state.allVideogames.sort((a,b) => {
        //         if(a.name > b.name) return 1;
        //         if(b.name > a.name) return -1;
        //         return 0;
        //     }) :
        //     state.allVideogames.sort((a,b) => {
        //         if(a.name > b.name) return -1;
        //         if(b.name > a.name) return 1;
        //         return 0;
        //     })
        // return{
        //     ...state,
        //     renderedVideogames: order
        // };
        if (action.payload === "asc") {
          const copyRenderedVideogames = [
            ...state.renderedVideogames.sort((videogame1, videogame2) => {
              return videogame1.name.charCodeAt() - videogame2.name.charCodeAt();
            }),
          ];
          const copyToFilterByVideogames = [
            ...state.toFilterByVideogames.sort((videogame1, videogame2) => {
              return videogame1.name.charCodeAt() - videogame2.name.charCodeAt();
            }),
          ];
          const copyToFilterByGenre = [
            ...state.toFilterByGenre.sort((videogame1, videogame2) => {
              return videogame1.name.charCodeAt() - videogame2.name.charCodeAt();
            }),
          ];
          return {
            ...state,
            renderedVideogames: [...copyRenderedVideogames],
            toFilterByVideogames: [...copyToFilterByVideogames],
            toFilterByGenre: [...copyToFilterByGenre],
          };
        } else {
          const copyRenderedVideogames = [
            ...state.renderedVideogames.sort((videogame1, videogame2) => {
              return videogame2.name.charCodeAt() - videogame1.name.charCodeAt();
            }),
          ];
          const copyToFilterByVideogames = [
            ...state.toFilterByVideogames.sort((videogame1, videogame2) => {
              return videogame2.name.charCodeAt() - videogame1.name.charCodeAt();
            }),
          ];
          const copyToFilterByGenre = [
            ...state.toFilterByGenre.sort((videogame1, videogame2) => {
              return videogame2.name.charCodeAt() - videogame1.name.charCodeAt();
            }),
          ];
          return {
            ...state,
            renderedVideogames: [...copyRenderedVideogames],
            toFilterByVideogames: [...copyToFilterByVideogames],
            toFilterByGenre: [...copyToFilterByGenre],
          };
        }

    case GET_GENRES:
      return {
        ...state,
        allGenres: [...action.payload],
      };
    case FILTER_VIDEOGAMES:
      if (action.payload === "apiVideogames") {
        if (state.toFilterByGenre.length) {
          const copyToFilterByVideogamesApi = [
            ...state.toFilterByVideogames.filter(
              (videogame) => typeof videogame.id === "number"
            ),
          ];
          return {
            ...state,
            renderedVideogames: [...copyToFilterByVideogamesApi],
            toFilterByGenre: [...copyToFilterByVideogamesApi],
          };
        } else {
          const copyAllVideogamesApi = [
            ...state.allVideogames.filter(
              (videogame) => typeof videogame.id === "number"
            ),
          ];
          return {
            ...state,
            renderedVideogames: [...copyAllVideogamesApi],
            toFilterByVideogames: [...state.allVideogames],
            toFilterByGenre: [...copyAllVideogamesApi],
          };
        }
      } else {
        if (state.toFilterByGenre.length) {

          const copyToFilterByVideogamesDb = [
            ...state.toFilterByVideogames.filter(
              (videogame) => typeof videogame.id !== "number"
            ),
          ];
          return {
            ...state,
            renderedVideogames: [...copyToFilterByVideogamesDb],
            toFilterByGenre: [...copyToFilterByVideogamesDb],
          };
        } else {

          const copyAllVideogamesDb = [
            ...state.allVideogames.filter(
              (videogame) => typeof videogame.id !== "number"
            ),
          ];
          return {
            ...state,
            renderedVideogames: [...copyAllVideogamesDb],
            toFilterByVideogames: [...state.allVideogames],
            toFilterByGenre: [...copyAllVideogamesDb],
          };
        }
      }
    case FILTER_BY_GENRE:
      if (state.toFilterByVideogames.length) {
        const copyToFilterByGenre = [
          ...state.toFilterByGenre.filter((videogame) => {
            return videogame.genres.some((obj) => obj.name === action.payload);
          }),
        ];
        return {
          ...state,
          renderedVideogames: [...copyToFilterByGenre],
          toFilterByVideogames: [...copyToFilterByGenre],
        };
      } else {
        const copyAllVideogames = [
          ...state.allVideogames.filter((videogame) => {
            return videogame.genres.some((obj) => obj.name === action.payload);
          }),
        ];
        return {
          ...state,
          renderedVideogames: [...copyAllVideogames],
          toFilterByGenre: [...state.allVideogames],
          toFilterByVideogames: [...copyAllVideogames],
        };
      }

    case SEARCH_VIDEOGAMES:
      return {
        ...state,
        renderedVideogames: [...action.payload],
        toFilterByVideogames: [...action.payload],
        toFilterByGenre: [...action.payload],
      };
    default:
      return { ...state };
  }
}