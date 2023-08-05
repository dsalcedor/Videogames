import CardsContainer from '../../components/CardsContainer'

function Home() {

  // const [games, setGames] = useState([])

  // useEffect(() => {
  //   axios.get('localhost:3001/videogames')
  //   .then(res=>res.json)
  //   .then(data=> {
  //     setGames([...games, data])
  //   }) 
  // }, [])

  return (
    <div>
      <CardsContainer />
    </div>
  );
}

export default Home;
