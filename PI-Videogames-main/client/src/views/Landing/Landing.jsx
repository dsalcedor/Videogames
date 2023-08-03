import { Link } from "react-router-dom";
import style from "./Landing.module.css";

function Landing() {
  return (
    <div>
      <h1>Bienvenido a mi sitio de juegos</h1>
      <Link to="/home">Adelante</Link>
    </div>
  );
}

export default Landing;
