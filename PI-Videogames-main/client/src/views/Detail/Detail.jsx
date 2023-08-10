import { useDispatch, useSelector } from "react-redux";
import { getVideogamesById } from "../../redux/actions";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Detail() {
  const { detailId } = useParams();
  console.log(detailId)
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getVideogamesById(detailId));
  }, [detailId]);
  
  const game = useSelector((state) => state.game);
  console.log(game)
  
  
  return (
    <div>
      <h1>{game.name}</h1>
      <h2>{game.rating}</h2>
    </div>
  );
}

export default Detail;
