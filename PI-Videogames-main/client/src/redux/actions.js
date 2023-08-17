import axios from "axios";
import {
  GET_VIDEOGAMES,
  GET_VIDEOGAMES_BY_ID,
  GET_VIDEOGAMES_BY_NAME,
  GET_GENRES,
  SOURCE_FILTER,
  GENRE_FILTER,
  ORDER_BY_NAME,
  ORDER_BY_RATING,
  POST_GAME,
} from "./actionTypes";

export function getVideogames() {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/videogames");
    const games = response.data;

    dispatch({
      type: GET_VIDEOGAMES,
      payload: games,
    });
  };
}

export function getVideogamesByName(name) {
  return async function (dispatch) {
    const response = await axios.get(
      `http://localhost:3001/videogames?name=${name}`
    );
    const games = response.data;

    if (!Array.isArray(games) || games === null) {
      getVideogames();
    }

    dispatch({
      type: GET_VIDEOGAMES_BY_NAME,
      payload: games,
    });
  };
}

export function getVideogamesById(detailId) {
  return async function (dispatch) {
    const response = await axios.get(
      `http://localhost:3001/videogames/${detailId}`
    );
    const games = response.data;

    dispatch({
      type: GET_VIDEOGAMES_BY_ID,
      payload: games,
    });
  };
}

export function getGenres() {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/genres");
    const genres = response.data.map(genre => (
      {
        name:genre
      }
    ))

    // console.log(response.data)

    dispatch({
      type: GET_GENRES,
      payload: genres,
    });
  };
}

export function sourceFilter(value) {
  return {
    type: SOURCE_FILTER,
    payload: value,
  };
}

export function genreFilter(value) {
  return {
    type: GENRE_FILTER,
    payload: value,
  };
}

export function orderByName(order) {
  return {
    type: ORDER_BY_NAME,
    payload: order,
  };
}

export function orderByRating(order) {
  return {
    type: ORDER_BY_RATING,
    payload: order,
  };
}

export function postVideogames(newVideogame) {
  return (dispatch) => {
    axios
      .post("http://localhost:3001/videogames", newVideogame)
      .then((res) => {
        alert("Se creo con exito");
        dispatch({
          type: POST_GAME,
          payload: newVideogame,
        });
        dispatch(getVideogames());
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  };
}
