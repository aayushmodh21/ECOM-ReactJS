import React, { useState } from 'react'
import './Login.css'
import { Link } from '@material-ui/core'
import { auth2 } from 'firebase';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import firebase from 'firebase'

function Login() {

    const history = useHistory();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = event => {
        event.preventDefault();  // this stops refresh

        //login logic
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then((auth2) => {
                //logged in, redirect to homepage
                history.push('/');
            })
            .catch(e => alert(e.message))

    }

    const register = event => {
        event.preventDefault();  // this stops refresh

        //register logic
        firebase.auth().createUserWithEmailAndPassword(email,password)
            .then((auth2) => {
                //create a user, logged in, redirect to homepage
                history.push('/');
            })
            .catch(e => alert(e.message))
        
    }

    return (
        <div className="login">

            <Link to="/">
                <img className="login__logo" src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="logo" ></img>
            </Link>

            <div className="login__container">

                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
                </form>

                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
            
            </div>

        </div>
    )
}

export default Login
