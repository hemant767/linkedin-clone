import React from 'react'
import "./Login.css"
const loginToApp = () => {}
const Login = () => {

    const register = () => {

    }
    return (
        <div className="login">
            <img src="https://techcrunch.com/wp-content/uploads/2012/11/linkedin-logo.png" alt="" />
            <form>
                <input type="text" placeholder="Full Name" />
                <input type="text" placeholder="Profile picture url(optional)" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member ?
                <span className="login__register" onClick={register}>Register Now</span>

            </p>
        </div>
    )
}

export default Login
