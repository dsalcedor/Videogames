import axios from 'axios'
import {
    GET_VIDEOGAMES,
    GET_VIDEOGAMES_BY_ID,
    GET_VIDEOGAMES_BY_NAME,
    POST_GAME
} from './actionTypes'

export function getVideogames() {
    return async function (dispatch) {
        const response = await axios.get('http://localhost:3001/videogames')
        const games = response.data

        dispatch({
            type: GET_VIDEOGAMES,
            payload: games
        })
    }
}

export function getVideogamesByName(name) {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/videogames?name=${name}`)
        const games = response.data

        if (!Array.isArray(games) || games === null) {
            getVideogames();
        }

        dispatch({
            type: GET_VIDEOGAMES_BY_NAME,
            payload: games
        })
    }
}

export function getVideogamesById(id){
    return async function (dispatch) {
        const response = axios.get(`http://localhost:3001/videogames/${id}`);
        const games = response.data;

        dispatch({
            type: GET_VIDEOGAMES_BY_ID,
            payload: games
        })
    }
}

export function postVideogames(newVideogame){
    return (dispatch) => {
        axios.post('http://localhost:3001/videogames', newVideogame)
        .then(res=>{
            alert('Se creo con exito');
            dispatch({
                type: POST_GAME,
                payload: newVideogame
            });
            dispatch(getVideogames());
        })
        .catch(error=>{
            alert(error.response.data.error)
        })
    }
}