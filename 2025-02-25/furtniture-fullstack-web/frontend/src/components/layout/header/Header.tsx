import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <div className='Header'>
            <div>
                Logo
            </div>  
            <div>
                <h1>IKEA Website</h1>
            </div>
            <div>
                <nav>
                    <NavLink to="/furniture">Furniture List</NavLink>
                    <NavLink to="/furniture/new">Add Furniture</NavLink>
                </nav>
            </div>          
        </div>
    )
}