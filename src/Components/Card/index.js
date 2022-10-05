// CSS
import './Card.css';

function Card(props) {
    return(
        <div className='card-container'>
            <h3>{props.titulo}</h3>
            <p>lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor</p>
        </div>
    )
}

export default Card;
