import { NavLink } from 'react-router-dom'
import './Header.css'
import logo from '../../../assets/images/logoT.png';

export default function Header() {
    return (
        <div className='Header'>
        <div>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
        </div>
        <h1>צומת ספרים</h1> 
        <nav>
                <NavLink 
                    to="/home" 
                    className={({ isActive }) => (isActive ? "active" : "")} 
                    end
                >
                    Home
                </NavLink>
                <NavLink 
                    to="/books" 
                    className={({ isActive }) => (isActive ? "active" : "")} 
                    end
                >
                    Books
                </NavLink>
                <NavLink 
                    to="/books/new" 
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    Add book
                </NavLink>
            </nav>
    </div>
    );
}