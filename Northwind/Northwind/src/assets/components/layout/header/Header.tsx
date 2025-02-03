import './Header.css'

export default function Header() {

    return (
        <div className='Header'>
            <div className='logo'>
                logo
            </div>           
            <div className='helloName'>
                hello
                {/* Hello {name} | <button onClick={logMeOut}>logout</button> */}
            </div>
        </div>
    )
}