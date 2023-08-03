const getGenres = require("../controllers/getGenres");

async function getGenresHandler(req, res) {
  try {
    const genres = await getGenres();
    res.status(202).json(genres);
  } catch (error) {
    res.status(502).json({ error: error.message });
  }
}

module.exports = getGenresHandler;
