import Furniture from '../../../models/furniture/Furniture';
import './Card.css'

interface CardProps {
    furniture: Furniture,
}
export default function FurnitureCard(props: CardProps): JSX.Element {

    const {
        name,
        dimensions,
        color,
        price,
    } = props.furniture;

    return (
        <div className='Card'>
            <h4>{name}</h4>
            <p>Dimensions: {dimensions}</p>
            <p>Color: {color}</p>
            <p>price: ${price}</p>
        </div>
    )
}