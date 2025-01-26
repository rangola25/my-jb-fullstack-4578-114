import Details from '../details/Details'
import Header from '../header/Header'
import Skills from '../skills/Skills'
import './Structure.css'

export default function Structure(): JSX.Element {
    return (
        <div>
           <Header />
           <div  className='Structure'>
           <Details />
           <Skills />
           </div>
        </div>
    )
}