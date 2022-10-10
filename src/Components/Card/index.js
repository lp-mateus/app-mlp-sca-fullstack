// CSS
import './Card.css';

function Card(props) {
    return(
        <div className='card-container'>
            <img src={props.image} alt="Icone de background" className='icon-resize'></img>
            <h1>{props.titulo}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default Card;
