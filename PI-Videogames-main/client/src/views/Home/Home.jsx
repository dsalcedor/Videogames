import CardsContainer from '../../components/CardsContainer/CardsContainer'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getGenres, getVideogames } from '../../redux/actions';

function Home() {

  const dispatch = useDispatch();


  useEffect(()=>{
    dispatch(getVideogames())
  }, [dispatch])

  useEffect(()=>{
    dispatch(getGenres())
  }, [dispatch])


  return (
    <div>
      <CardsContainer />
    </div>
  );
}

export default Home;
