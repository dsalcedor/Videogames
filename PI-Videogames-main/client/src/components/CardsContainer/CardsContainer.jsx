import { useSelector } from "react-redux";
import { useState } from "react";
import Card from "../Card/Card";

import style from "./CardsContainer.module.css";

export default function CardsContainer() {
  const videoGames = useSelector((state) => state.videoGames);
  const filteredGames = useSelector((state) => state.filteredGames);

  const [page, setPage] = useState(1);
  const itemsPerPage = 15;

  return (
    <div className={style.container}>
      {filteredGames.length !== 0
        ? filteredGames.map((game) => (
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
          ))
        : videoGames.map((game) => (
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
