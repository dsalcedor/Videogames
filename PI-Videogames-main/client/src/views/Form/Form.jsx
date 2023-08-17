import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

function Form() {
  const genres = useSelector((state) => state.genres);

  const [form, setForm] = useState({
    name: "",
    imagen: "",
    descripcion: "",
    plataformas: [],
    genres: [],
    lanzamiento: "",
    rating: "",
    created: true,
  });

  const [error, setError] = useState({
    name: "",
    descripcion: "",
    rating: "",
    lanzamiento: "",
  });

  const validate = (form) => {};

  return (
    <div>
      <label>Genero: </label>
      <div>
        {genres.map((genre) => (
          <label>
            <input type="checkbox" name="genres" value={genre.id} />
            {genre.name}
          </label>
        ))}
      </div>
    </div>
  );
}

export default Form;
