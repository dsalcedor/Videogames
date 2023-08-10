import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Card from "../Card/Card";
import {
  getVideogames,
  getVideogamesByName,
  getVideogamesById,
} from "../../redux/actions";

export default function CardsContainer() {
  const dispatch = useDispatch();
  const videoGames = useSelector((state) => state.videoGames);

  const [page, setPage] = useState(1);
  const itemsPerPage = 15;
  //   const totalPages = Math.ceil(filteredGames?.length / itemsPerPage);

  return (
    <div>
      {videoGames.map((game) => (
        <Card
          key={game.id}
          id={game.id}
          name={game.name}
          imagen={game.imagen}
          rating={game.rating}
          lanzamiento={game.lanzamiento}
          descripcion={game.descripcion}
          genres={game.genres}
          created={game.created}
        />
      ))}
    </div>
  );
}
