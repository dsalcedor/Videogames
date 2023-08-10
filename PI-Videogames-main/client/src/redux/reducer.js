import {
  GET_VIDEOGAMES,
  GET_VIDEOGAMES_BY_NAME,
  GET_VIDEOGAMES_BY_ID,
  POST_GAME,
} from "./actionTypes";

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

    case POST_GAME:
      return {
        ...state,
        videoGames: [...state.videoGames, action.payload``],
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
