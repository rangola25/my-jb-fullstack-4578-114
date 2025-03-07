import Present from '../../../models/present/Present'
import giftsService from '../../../services/auth-aware/Gifts'
import './present.css'

interface PresentProps {
    present: Present
    removePresent(code: string): void
}

export default function Card(props: PresentProps): JSX.Element {

    const {
        code,
        presentName,
        presentDescription,
        price,
        discount
    } = props.present

    async function deleteMe() {
        try {
            await giftsService.remove(code)
            props.removePresent(code)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className="present">
            <h3>{presentName}</h3>
            <p>{presentDescription}</p>
            <p>Price: ${price}</p>
            <p>Discount: {discount}%</p>
            <div className='delete'>
                <button onClick={deleteMe}>delete</button>
            </div>
        </div>
    );
}