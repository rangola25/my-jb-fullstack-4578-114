// import { NavLink } from 'react-router-dom'
import './Header.css'
import useUsername from '../../../hooks/useUsername'
import { useContext } from 'react'
import { AuthContext } from '../../auth/auth/Auth'
import { NavLink, useNavigate } from 'react-router-dom'

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
            <div>
                Logo
            </div>  
            <div>
                <nav>
                    {isAdmin && <>
                        <NavLink to="/admin/vacations">Edit vacations</NavLink>
                        <NavLink to="/admin/new">New vacation</NavLink>
                        <NavLink to="/admin/report">Likes report</NavLink>
                    </>}

                    {/* {!isAdmin && 
                        <NavLink to="/vacations">Vacations</NavLink>    
                    } */}
                </nav>
            </div>          
            <div>
                Hello {name} | <button onClick={logMeOut}>logout</button>
            </div>
        </div>
    )
}