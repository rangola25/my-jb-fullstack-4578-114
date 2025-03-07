import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {

    return (
        <div className='Header'>
            <div>
                <nav>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/gifts">Gifts</NavLink>
                    <NavLink to="/new">New</NavLink>
                </nav>
                <h1>Gift Shop</h1>
            </div>          
        </div>
    )
}