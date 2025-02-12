import { useForm } from 'react-hook-form'
import './Login.css'
import LoginModel from '../../../models/user/Login'
import SignUpModel from '../../../models/user/SignUp'
import auth from '../../../services/auth'
import { useContext, useState } from 'react'
import { AuthContext } from '../auth/Auth'
import logo from './../../../assets/images/logog.png'

export default function Login(): JSX.Element {

    const { register, handleSubmit } = useForm<LoginModel>()

    const { register: registerSignUp, handleSubmit: handleSubmitSignUp } = useForm<SignUpModel>(); 

    const { newLogin } = useContext(AuthContext)!

    const [signUp, setSignUp] = useState(false);

    async function submit(login: LoginModel) {
        const jwt = await auth.login(login)
        newLogin(jwt)
        window.location.reload()
    }

    function toggleSignUp() {
        setSignUp(!signUp);
    }

    async function newUser(signUp: SignUpModel) {
        const jwt = await auth.signUp(signUp)
        newLogin(jwt)
    }

    return (
        <div className='LoginOrSignUp'>
            <div className='logo'>
                <img src={logo} />
            </div>
            <div className='Login'>
                    {!signUp && <>
                        <h1>Login in</h1>
                    <form onSubmit={handleSubmit(submit)}>
                        <input placeholder='Username' {...register('username')} />
                        <br />
                        <input placeholder='Password' type="password" {...register('password')} />
                        <br />
                        <button>Login</button>
                        <br />
                    </form>
                        <button onClick={toggleSignUp}>Click here to Sign up</button>
                    </>}
                </div>
                    <div className='SignUp'>
                    {signUp && <>
                        <h1>Sign up</h1>
                    <form onSubmit={handleSubmitSignUp(newUser)} >
                        <input placeholder='Name' {...registerSignUp('name')} />
                        <br />
                        <input placeholder='Username' {...registerSignUp('username')} />
                        <br />
                        <input placeholder='Password' type="password" {...registerSignUp('password')} />
                        <br />
                        <button>Sign up</button>
                        <br />
                    </form>
                        <button onClick={toggleSignUp}>Click here to login in</button>
                    </>}
                </div>
            </div>
    )
}