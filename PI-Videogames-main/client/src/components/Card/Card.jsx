export default function Card(props){
    // console.log(props.genres)
    return(
        <div>
            {/* <img src={props.imagen} alt={props.imagen} /> */}
            <h3>{props.name}</h3>
            <h3>{props.genres}</h3>
        </div>
    )
}