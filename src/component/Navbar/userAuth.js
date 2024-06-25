

import React,{useState} from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import './UserAuth.css'
function UserAuth(){

    const navigate= useNavigate()
    const [data, setData] = useState({
        email:'',
        password:'',
    })

    const [error, setError]= useState('');

    const {email, password} =data;

    const changeHandler = (e) =>{
        setData({...data, [e.target.name]:e.target.value})
        // console.log(data);
        setError('') // clear error when user starts typing
    }

    const signUp = (e) =>{
        e.preventDefault();
        if(!email ||!password){
            setError('both email and password are requried')
            return;
        }
        createUserWithEmailAndPassword(auth,email,password)
        .then(user=>{
            console.log(user)
            navigate('/')
        })
        .catch(err =>{
            console.log(err)
            setError(err.message)
         })
     

    }
    const signIn = (e) =>{
        e.preventDefault();
        if(!email || !password){
            setError('Both email and password are requried')
            return;
        }
        signInWithEmailAndPassword(auth,email,password)
        .then((user) => {
            console.log(user);
            navigate('/')
        })
        .catch((err) => {
            console.log(err);
            setError(err.message)
        })
       
    }
    
    return(
        <div className="auth-container">
            <center>
                <form autoComplete="off" className="auth-form">
                    <h2>Authentication</h2>
                    {error && <p className="error-message">{error}</p>}
                    <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} placeholder="email" onChange={changeHandler}></input>
                    </div>
                    <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} placeholder="password" onChange={changeHandler}></input>
                    </div>
                    <div className="button-group">
                    <button onClick={signIn} className="auth-button">sign In</button>
                    <button onClick={signUp} className="auth-button">sign Up</button>
                    </div> 
                </form>
            </center>
        </div>
    )
}

export default UserAuth;