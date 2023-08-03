const { Videogame, Genre } = require("../db");
const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const { urlVideogames } = require("../helpers/urls");

async function getVideogamesById(id, source) {
  // return `Aqui se ve el videjuego con id: ${id}`;

  if (source === "BDD") {
    const gameById = await Videogame.findByPk(id, {
      include: {
        model: Genre,
        attributes: ["name"],
      },
    });

    const arrGenres = gameById.Genres.map((genre) => genre.name);

    return {
      id: gameById.id,
      name: gameById.name,
      descripcion: gameById.descripcion,
      plataformas: gameById.plataformas,
      imagen: gameById.imagen,
      lanzamiento: gameById.lanzamiento,
      rating: gameById.rating,
      genres: arrGenres,
      created: gameById.created
    };
  } else {
    const { data } = await axios.get(`${urlVideogames}/${id}?key=${API_KEY}`);

    return {
      id: data.id,
      name: data.name,
      descripcion: data.description,
      plataformas: data.platforms.map((platform) => platform.platform.name),
      imagen: data.background_image,
      lanzamiento: data.released,
      rating: data.rating,
      genres: data.genres.map((genre) => genre.name),
      created: false,
    };
  }
}

module.exports = getVideogamesById;
