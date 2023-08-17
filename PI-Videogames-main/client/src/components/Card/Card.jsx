import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  const genres = props.genres.join("\n");

  return (
    <Link to={`/detail/${props.id}`}>
      <div className={style.container}>
        <h3>{props.name}</h3>
        {/* <h3>{props.genres}</h3> */}
        <div>
          {genres.split("\n").map((genre, index) => (
            <p key={index}>{genre}</p>
          ))}
        </div>
        <img src={props.imagen} alt={props.imagen} className={style.image} />
      </div>
    </Link>
  );
}
