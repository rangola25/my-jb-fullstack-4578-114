import './Header.css'
import useUsername from '../../../hooks/useUsername'
import { useContext } from 'react'
import { AuthContext } from '../../auth/auth/Auth'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../../assets/images/logo.png'

export default function Header() {

    const isAdmin = localStorage.getItem('isAdmin') === 'true'; 

    const name = useUsername()

    const { logout } = useContext(AuthContext)!

    const navigate = useNavigate()

    function logMeOut() {
        logout()
        navigate(`/`)
    }

    return (
        <div className='headerContainer'>
            <div className='logo'>
                <img src={logo} />
            </div>  
            <div>
                    {isAdmin && <>
                        <nav className='navHeader'>
                        <NavLink to="/admin/vacations">Edit vacations</NavLink>
                        <NavLink to="/admin/new">New vacation</NavLink>
                        <NavLink to="/admin/report">Likes report</NavLink>
                        </nav>
                    </>}
            </div>          
            <div>
                Hello {name} | <button onClick={logMeOut}>logout</button>
            </div>
        </div>
    )
}