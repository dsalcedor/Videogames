const axios = require("axios");
const { urlGenre } = require("../helpers/urls");
require("dotenv").config;
const { API_KEY } = process.env;
const { Genre } = require("../db");

const URL = `${urlGenre}?key=${API_KEY}`;

async function getGenres() {
  //return "Aqui se ven los generos";

  const genresBDD = await Genre.findAll();

  if (genresBDD.length === 0) {
    const { data } = await axios.get(URL);

    const arrayGenres = data.results.map((genre) => genre.name);

    await Promise.all(
      arrayGenres.map((genre) => Genre.create({ name: genre }))
    );

    return arrayGenres;
  }

  return genresBDD.map(genre => genre.name)
}

module.exports = getGenres;
