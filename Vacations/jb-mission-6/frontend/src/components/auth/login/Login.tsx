import { useForm } from 'react-hook-form'
import './Login.css'
import LoginModel from '../../../models/user/Login'
import auth from '../../../services/auth'
import { useContext, useState } from 'react'
import { AuthContext } from '../auth/Auth'
import SignUpModel from '../../../models/user/SignUp'
import { useNavigate } from 'react-router-dom'

export default function Login(): JSX.Element {

    const { register, handleSubmit, formState } = useForm<LoginModel>()

    const { register: registerSignUp, handleSubmit: handleSubmitSignUp, formState: formStateSignUp } = useForm<SignUpModel>(); 

    const { newLogin } = useContext(AuthContext)!

    const [signUp, setSignUp] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
        setErrorMessage(null); // Clear any previous error message when toggling the form
    }

    const navigate = useNavigate() 

    async function newUser(signUp: SignUpModel) {
        try {
            const jwt = await auth.signUp(signUp)
            newLogin(jwt)
            navigate(`/vacations`)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch(e: any) {
            if (e.response && e.response.status === 400) {
                setErrorMessage('The email is already used.')
            } else {
                setErrorMessage('An error occurred. Please try again later.');
            }
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
                {errorMessage && <p className='error'>{errorMessage}</p>}
                <label>First name</label>
                <input {...registerSignUp('firstName',  { 
                required: {
                        value: true,
                        message: 'You must provide a first name'
                    }
                })} />
                <span className='error'>{formStateSignUp.errors.firstName?.message}</span>

                <label>Last name</label>
                <input {...registerSignUp('lastName',  { 
                required: {
                        value: true,
                        message: 'You must provide a last name'
                    }
                })} />
                <span className='error'>{formStateSignUp.errors.lastName?.message}</span>

                <label>Email</label>
                <input {...registerSignUp('email',  { 
                required: {
                        value: true,
                        message: 'You must provide an email'
                    }
                })} />
                <span className='error'>{formStateSignUp.errors.email?.message}</span>

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
                <span className='error'>{formStateSignUp.errors.password?.message}</span>

                <button className='loginButton'>Register</button>     
                <p>already a member?</p>
                </form>
                <button className='loginOrRegister' onClick={toggleSignUp}>login</button>
                </>}
            </div>
        </div>
    )
}