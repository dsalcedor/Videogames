import {
  GET_VIDEOGAMES,
  GET_VIDEOGAMES_BY_NAME,
  GET_VIDEOGAMES_BY_ID,
  GET_GENRES,
  SOURCE_FILTER,
  GENRE_FILTER,
  ORDER_BY_NAME,
  ORDER_BY_RATING,
  POST_GAME,
} from "./actionTypes";
import { genreFilter } from "./actions";

const initialState = {
  videoGames: [],
  genres: [],
  filteredGames: [],
  game: [],
  genreFilter: "",
  orderBy: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videoGames: action.payload,
      };

    case GET_VIDEOGAMES_BY_NAME:
      return {
        ...state,
        filteredGames: action.payload,
      };

    case GET_VIDEOGAMES_BY_ID:
      return {
        ...state,
        game: action.payload,
      };

    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };

    case SOURCE_FILTER:
      let filtered = [];

      if (action.payload === "true") {
        filtered = state.videoGames.filter((game) => game.created === true);
      } else if (action.payload === "false") {
        filtered = state.videoGames.filter((game) => game.created === false);
      } else if (action.payload === "ALL") {
        filtered = [...state.videoGames];
      }

      return {
        ...state,
        filteredGames: filtered,
      };

    case GENRE_FILTER:
      let filteredGenres = [];
      if (action.payload !== "ALL") {
        filteredGenres = state.videoGames.filter((game) =>
          game.genres.includes(action.payload)
        );
      } else {
        filteredGenres = [...state.videoGames];
      }

      return {
        ...state,
        filteredGames: filteredGenres,
      };

    case ORDER_BY_NAME:
      let temp = state.filteredGames;

      if (temp && temp.length < 1) {
        temp = state.videoGames;
      }

      const sorted = temp.sort((a, b) => {
        if (action.payload === "Ascendente") {
          return a.name.localeCompare(b.name); //Retorna en orden ascendente A-Z
        } else {
          return b.name.localeCompare(a.name); //Retorna en orden descendente Z-A
        }
      });

      return {
        ...state,
        filteredGames: sorted,
      };

    case ORDER_BY_RATING:
      const asc = action.payload === 'Ascendente'
      const sortedGames = [...state.filteredGames].sort((a, b) => {
        if(asc){
          return a.rating - b.rating  //ascendente
        }else{
          return b.rating - a.rating  //descendente
        }
      })

      return {
        ...state,
        filteredGames: sortedGames
      }

    case POST_GAME:
      return {
        ...state,
        videoGames: [...state.videoGames, action.payload],
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
