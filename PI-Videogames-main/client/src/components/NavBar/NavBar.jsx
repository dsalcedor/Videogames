import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { genreFilter, sourceFilter, orderByName, orderByRating } from "../../redux/actions";

function NavBar() {
  const dispatch = useDispatch();

  const genres = useSelector((state) => state.genres);

  const handleSourceFilter = (event) => {
    const source = event.target.value;
    dispatch(sourceFilter(source));
  };

  const handleGenreFilter = (event) => {
    const genero = event.target.value
    dispatch(genreFilter(genero))
  };

  const handleNameOrder = (event) => {
    const name = event.target.value
    dispatch(orderByName(name))
  }

  const handleRatingOrder = (event) => {
    const rating = event.target.value
    dispatch(orderByRating(rating))
  }

  return (
    <div>
      <select onChange={handleSourceFilter}>
        <option disabled selected>
          Origen
        </option>
        <option value="ALL">Todos</option>
        <option value="true">Creados</option>
        <option value="false">No Creados</option>
      </select>
      <select onChange={handleGenreFilter}>
        <option disabled selected>
          Genero
        </option>
        <option value="ALL">Todos</option>
        {genres.map((genre) => (
          <option value={genre.name}>{genre.name}</option>
        ))}
      </select>
      <select onChange={handleNameOrder}>
        <option disabled selected>
          Nombre
        </option>
        <option value="Ascendente">A-Z</option>
        <option value="Descendente">Z-A</option>
      </select>
      <select onChange={handleRatingOrder}>
        <option disabled selected>
          Rating
        </option>
        <option value="Ascendente">Mayor</option>
        <option value="Descendente">Menor</option>
      </select>
      <Link to="/home">Home</Link>
      <Link to="/form">Crear</Link>
      <SearchBar />
    </div>
  );
}

export default NavBar;
