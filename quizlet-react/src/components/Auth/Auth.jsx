import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { authUser } from "../../db/auth-db";
import { ch } from "../header/MenuContainer";

export default function Auth() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const sgn = (e) => {
        e.preventDefault();
        if(!authUser.isAuthenticated){
            authUser.login(email, password).then( (us) =>{
                authUser.currentUserID=us.user.uid;
                authUser.isAuthenticated = true;
                ch();
                navigate("/");     
            }).catch( (e) =>{
                console.log(e);
                alert("Login is failed. Check your emain and password.")
                
            })
        }
        else {
            alert("You are already logged in")
        }
        
    }

    return (
        <div className="form-container">
            <p className="form-container__title">Sign in</p>
            <form className="form" method="post">

                <div className="form-input">
                    <label for="input-email" className="form-input__label">Email</label>
                    <input type="email"  className="form-input__field" id="input-email" value={email} onChange = {(e)=> setEmail(e.target.value)} />
                </div>

                <div className="form-input">
                    <label for="input-password" className="form-input__label">Password</label>
                    <input type="password" className="form-input__field" id="input-password" value={password} onChange = {(e)=> setPassword(e.target.value)}/>
                </div>

                <div className="form-button">
                    <button onClick={sgn} className="form-button__submit">Sign in</button>
                </div>
            </form>

            <div className="form">

                <div className="form-input">
                    <span className="form-input__label">No account? Just register ♡( ◡‿◡ ) </span>
                </div>
                
                <div className="form-button">
                    <NavLink to='/register' className="form-button__submit" >Register</NavLink>
                    {/* <a href="register.html" className="form-button__submit">Register</a> */}
                </div>

            </div>
        </div>
    )
}
