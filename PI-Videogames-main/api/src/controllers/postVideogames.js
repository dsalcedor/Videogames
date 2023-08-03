const { Videogame, Genre } = require("../db");

async function postVideogames(
  name,
  descripcion,
  plataformas,
  imagen,
  lanzamiento,
  rating,
  genres
) {
  //return "Aqui se crea un videojuego";

  if (
    !name ||
    !descripcion ||
    !plataformas ||
    !imagen ||
    !lanzamiento ||
    !rating ||
    !genres
  ) {
    throw Error("Faltan datos para crear el juego");
  }

  const juegoCreado = await Videogame.create({
    name,
    descripcion,
    plataformas,
    imagen,
    lanzamiento,
    rating,
  });

  const generos = await Genre.findAll({
    where: {
      name: genres,
    },
  });

  // console.log(generos)

  await juegoCreado.addGenres(generos);

  if (juegoCreado) {
    return juegoCreado;
  }

  throw Error("No se pudo crear el juego");
}

module.exports = postVideogames;
