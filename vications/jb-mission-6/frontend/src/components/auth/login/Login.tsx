import { useForm } from 'react-hook-form'
import './Login.css'
import LoginModel from '../../../models/user/Login'
import auth from '../../../services/auth'
import { useContext, useState } from 'react'
import { AuthContext } from '../auth/Auth'
import SignUpModel from '../../../models/user/SignUp'
import { useNavigate } from 'react-router-dom'

export default function Login(): JSX.Element {

    const { register, handleSubmit } = useForm<LoginModel>()

    const { register: registerSignUp, handleSubmit: handleSubmitSignUp , formState} = useForm<SignUpModel>(); 

    const { newLogin } = useContext(AuthContext)!

    const [signUp, setSignUp] = useState(false);

    async function submit(login: LoginModel) {
        try {
            const jwt = await auth.login(login)
            newLogin(jwt.jwt)
            if (jwt.isAdmin === true) {
                navigate(`/admin/vacations`)
            } else {
                navigate(`/vacations`)
            }
        } catch(e) {
            alert(e)
        }
    }

    function toggleSignUp() {
        setSignUp(!signUp);
    }

    const navigate = useNavigate() 

    async function newUser(signUp: SignUpModel) {
        try{
        const jwt = await auth.signUp(signUp)
        newLogin(jwt)
        navigate(`/vacations`)
        } catch(e) {
            alert(e)
        }
    }

    return (
        <div className='LoginContainer'>
            <div className='Login'>
                {!signUp && <>
                <form onSubmit={handleSubmit(submit)}>
                <h1 className='loginHead'>Login</h1>

                <label>Email</label>
                <input {...register('email',  { 
                required: {
                        value: true,
                        message: 'You must provide an email'
                    }
                })} />
                <span className='error'>{formState.errors.email?.message}</span>

                <label>Password</label>
                <input type="password" {...register('password',  { 
                required: {
                        value: true,
                        message: 'You must provide a password'
                    }
                })} />
                <span className='error'>{formState.errors.password?.message}</span>


                <button className='loginButton'>Login</button>
                <p>don't have account?</p>
                </form>
                <button className='loginOrRegister' onClick={toggleSignUp}>register now</button>
                </>}

                {signUp && <>
                <form onSubmit={handleSubmitSignUp(newUser)} >
                <h1 className='loginHead'>Register</h1>
                <label>First name</label>
                <input {...registerSignUp('firstName',  { 
                required: {
                        value: true,
                        message: 'You must provide a first name'
                    }
                })} />
                <span className='error'>{formState.errors.firstName?.message}</span>

                <label>Last name</label>
                <input {...registerSignUp('lastName',  { 
                required: {
                        value: true,
                        message: 'You must provide a last name'
                    }
                })} />
                <span className='error'>{formState.errors.email?.message}</span>

                <label>Email</label>
                <input {...registerSignUp('email',  { 
                required: {
                        value: true,
                        message: 'You must provide a email'
                    }
                })} />
                <span className='error'>{formState.errors.email?.message}</span>

                <label>Password</label>
                <input type="password" {...registerSignUp('password',  { 
                required: {
                        value: true,
                        message: 'You must provide a password'
                    },
                    minLength: {
                        value: 4,
                        message: 'Password must be at least 4 chars'
                    }
                })} />
                <span className='error'>{formState.errors.password?.message}</span>

                <button className='loginButton'>Login</button>     
                <p>already a member?</p>
                </form>
                <button className='loginOrRegister' onClick={toggleSignUp}>login</button>
                </>}
            </div>
        </div>
    )
}