import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

function NavBar() {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/form">Create</Link>
      <SearchBar />
    </div>
  );
}

export default NavBar;
