import { NavLink } from 'react-router-dom'
import './Header.css'
import useUsername from '../../../hooks/useUsername'
import { useContext } from 'react'
import { AuthContext } from '../../auth/auth/Auth'
import logo from '../../../assets/images/logog.png'

export default function Header() {

    const name = useUsername()

    const { logout } = useContext(AuthContext)!

    function logMeOut() {
        logout()
    }

    return (
        <div className='Header'>
            <div className='logo'>
                <img src={logo} />
            </div>  
            <div>
                <nav className='nav'>
                    <NavLink to="/profile">Profile</NavLink>
                    <NavLink to="/feed">Feed</NavLink>
                    <NavLink to="/search">Search</NavLink>
                </nav>
            </div>          
            <div className='helloName'>
                Hello {name} | <button onClick={logMeOut}>logout</button>
            </div>
        </div>
    )
}