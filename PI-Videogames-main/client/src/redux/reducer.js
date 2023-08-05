import {
  GET_VIDEOGAMES,
  GET_VIDEOGAMES_BY_NAME,
  POST_GAME
} from './actionTypes';

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default rootReducer;
