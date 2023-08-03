const getVideogames = require("../controllers/getVideogames");
const getVideogamesById = require("../controllers/getVideogamesById");
const postVideogames = require("../controllers/postVideogames");

async function getVideogamesHandler(req, res) {
  try {
    const { name } = req.query;

    const videogames = await getVideogames(name);
    res.status(200).send(videogames);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getVideogamesByIdHandler(req, res) {
  try {
    const { idVideogame } = req.params;

    const source = isNaN(idVideogame) ? "BDD" : "API";

    const videogameById = await getVideogamesById(idVideogame, source);
    res.status(200).json(videogameById);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function postVideogamesHandler(req, res) {
  const {
    name,
    descripcion,
    plataformas,
    imagen,
    lanzamiento,
    rating,
    genres,
  } = req.body;

  try {
    const createdVideogame = await postVideogames(
      name,
      descripcion,
      plataformas,
      imagen,
      lanzamiento,
      rating,
      genres
    );
    res.status(200).json(createdVideogame);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

module.exports = {
  getVideogamesHandler,
  getVideogamesByIdHandler,
  postVideogamesHandler,
};
