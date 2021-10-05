import React, { useState } from 'react'
import "./Login.css";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { login } from "./features/userSlice";

const Login = () => {
    
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email , password)
        .then(userAuth =>{
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoUrl: userAuth.user.photoURL,
            }))
        }).catch((error) => alert(error));
    };

    const register = () => {
        if (!name) {
            return alert("Please enter a full name");

        }

        auth.createUserWithEmailAndPassword(email , password)
        .then((userAuth) =>{
            userAuth.user.updateProfile({
                displayname: name,
                photUrl: profilePic,
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic,
                }));
            })
        }).catch(error => alert(error));
    }
    return (
        <div className="login">
            <img src="https://techcrunch.com/wp-content/uploads/2012/11/linkedin-logo.png" alt="" />
            <form>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Full Name" />
                <input value={profilePic} onChange = {(e) => setProfilePic(e.target.value)} type="text" placeholder="Profile picture url(optional)" />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                <input value = {password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member ?{" "}
                <span className="login__register" onClick={register}>Register Now</span>

            </p>
        </div>
    )
}

export default Login
