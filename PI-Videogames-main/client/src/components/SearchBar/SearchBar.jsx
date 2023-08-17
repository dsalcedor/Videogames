import { useDispatch } from "react-redux";
import { getVideogamesByName } from "../../redux/actions";
import { useState } from "react";

export default function SearchBar() {
  const [nameSearch, setNameSearch] = useState("");

  const dispatch = useDispatch();

  const handleSearch = (event) => {
    const nameSearch = event.target.value;
    event.preventDefault();
    setNameSearch(nameSearch);
  };

  const handleSearchButton = () => {
    dispatch(getVideogamesByName(nameSearch));
    setNameSearch("");
  };

  return (
    <div>
      <input
        placeholder="Que juego quiere buscar..."
        type="text"
        value={nameSearch}
        onChange={handleSearch}
      />
      <button onClick={handleSearchButton}>Buscar</button>
    </div>
  );
}
