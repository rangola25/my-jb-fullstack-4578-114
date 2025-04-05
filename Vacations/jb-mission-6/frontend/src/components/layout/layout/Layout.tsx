import { useContext } from 'react'
// import Login from '../../auth/login/Login'
// import Followers from '../../follows/followers/Followers'
// import Following from '../../follows/following/Following'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Routing from '../routing/Routing'
import './Layout.css'
import { AuthContext } from '../../auth/auth/Auth'
import RoutingLogin from '../routingLogin/RoutingLogin'

export default function Layout() {

    const { jwt } = useContext(AuthContext)!
    const isLoggedIn: boolean = !!jwt

    return (
        <div className='Layout'>

            {isLoggedIn && <>
                <header className='Header'>
                    <Header />                
                </header>                
                <main className='Routing'>
                    <Routing/>
                </main>
                <footer className='Footer'>
                    <Footer />
                </footer>
            </>}

            {!isLoggedIn && 
                <RoutingLogin />
            }

        </div>
    )
}