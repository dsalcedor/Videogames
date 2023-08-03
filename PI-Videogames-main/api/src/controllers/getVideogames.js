const axios = require("axios");
const { Op } = require("sequelize");
require("dotenv").config();
const { API_KEY } = process.env;
const { urlVideogames } = require("../helpers/urls");
const { Videogame, Genre } = require("../db");

const URL = `${urlVideogames}?key=${API_KEY}`;

async function getVideogames(name) {
  if (!name) {
    // return "Aqui se ven todos los videojuegos";
    //             BDD

    const gamesBDD = await Videogame.findAll({
      include: {
        model: Genre,
        attributes: ["name"],
      },
    });


    const allBDDVideogames = gamesBDD.map((game) => {
      const arrGenres = game.Genres.map((genre) => genre.name);

      return {
        id: game.id,
        name: game.name,
        descripcion: game.descripcion,
        plataformas: game.plataformas,
        imagen: game.imagen,
        lanzamiento: game.lanzamiento,
        rating: game.rating,
        genres: arrGenres,
        created: game.created
      };
    });

    //             API

    const { data } = await axios.get(URL, {
      params: {
        number: 100,
      },
    });

    const allVideogamesApi = data.results.map((game) => {
      return {
        id: game.id,
        name: game.name,
        descripcion: game.description,
        plataformas: game.platforms.map((platform) => platform.platform.name),
        imagen: game.background_image,
        lanzamiento: game.released,
        rating: game.rating,
        genres: game.genres.map((genre) => genre.name),
        created: false
      };
    });

    return [...allBDDVideogames, ...allVideogamesApi];
  } else {
    // return `Aqui se ven los videojuegos con la palabra ${name}`;
    //                      BDD

    const lowercaseName = name.toLowerCase()

    const gamesByNameBDD = await Videogame.findAll({
      where: {
        name: {
          [Op.iLike]: `%${lowercaseName}%`
        }
      },
      include: {
        model: Genre,
        attributes: ["name"],
      },
    });

    const allBDDVideogames = gamesByNameBDD.map((game) => {
      const arrGenres = game.Genres.map((genre) => genre.name);

      return {
        id: game.id,
        name: game.name,
        descripcion: game.descripcion,
        plataformas: game.plataformas,
        imagen: game.imagen,
        lanzamiento: game.lanzamiento,
        rating: game.rating,
        genres: arrGenres,
        created: game.created
      };
    });

    //                  API

    const {data} = await axios.get(`${URL}&search=${lowercaseName}`, {
      params: {
        number: 100
      }
    })

    const allVideogamesApi = data.results.map((game) => {
      return {
        id: game.id,
        name: game.name,
        descripcion: game.description,
        plataformas: game.platforms.map((platform) => platform.platform.name),
        imagen: game.background_image,
        lanzamiento: game.released,
        rating: game.rating,
        genres: game.genres.map((genre) => genre.name),
        created: false
      };
    });

    return [...allBDDVideogames, ...allVideogamesApi];

  }
}

module.exports = getVideogames;
