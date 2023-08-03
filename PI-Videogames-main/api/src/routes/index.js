const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const {
  getVideogamesHandler,
  getVideogamesByIdHandler,
  postVideogamesHandler,
} = require("../handlers/gameHandlers");

const getGenresHandler = require("../handlers/genreHandlers");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/videogames", getVideogamesHandler);

router.get("/videogames/:idVideogame", getVideogamesByIdHandler);

router.post("/videogames", postVideogamesHandler);

router.get("/genres", getGenresHandler);

module.exports = router;
