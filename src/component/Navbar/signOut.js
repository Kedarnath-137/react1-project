

import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import './SignOut.css'

function SignOut(){
    const navigate = useNavigate()
    const handleClick=()=>{
        signOut(auth).then(() =>{
            console.log('User signed out')
            navigate('/userauth')
        }).catch((err) =>{
            console.error('sign out error:',err);
        })
    }
    return(
        <div className="signout-container">
            <h2>Sign Out</h2>
            <label htmlFor="signoutButton" className="signout-label">Click the button to sign out:</label>
            <button onClick={handleClick} id='signoutButton' className="signout-button">sign out</button>
        </div>
    )
}

export default SignOut