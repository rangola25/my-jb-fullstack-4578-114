import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <div className='Header'>
            <div>
                Logo
                {/* <img src="../../assets/images/logo.jpg" /> */}
            </div>  
            <div>
                <nav>
                    {/* we don't want to use <a> tags for inner app navigation 
                    as it breaks SPA!!! */}
                    {/* <a href="/profile">profile</a>
                    <a href="/feed">feed</a> */}

                    {/* we can use <Link> instead */}
                    {/* <Link to="/profile">profile</Link>
                    <Link to="/feed">feed</Link> */}

                    {/* but the best option is NavLink */}
                    <NavLink to="/profile">Profile</NavLink>
                    <NavLink to="/feed">Feed</NavLink>
                    <NavLink to="/search">Search</NavLink>
                </nav>
            </div>          
        </div>
    )
}