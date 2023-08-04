import { useEffect, useState } from "react";
import axios from 'axios'

function Home() {

  const [games, setGames] = useState([])

  useEffect(() => {
    axios.get('localhost:3001/videogames')
    .then(res=>res.json)
    .then(data=> {
      setGames([...games, data])
    }) 
  }, [])

  return (
    <div>
      <h1>Esta es la vista Home</h1>
    </div>
  );
}

export default Home;
