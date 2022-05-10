import React, {  useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { authUser } from "../../db/auth-db";
import { ch } from "../header/MenuContainer";

export default function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const navigate = useNavigate()

    const register = (e) => {
        e.preventDefault();
        
        if(password !== password2){
            alert("Password don't match!");
            return;
        }

        if(!authUser.isAuthenticated){

            authUser.register(email, password).then( (us) =>{
                authUser.currentUserID = us.user.uid;
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
        <div class="form-container">
            <p class="form-container__title">Register</p>
            <form class="form">

                <div class="form-input">
                    <label for="input-email" class="form-input__label">Email</label>
                    <input type="email" required class="form-input__field" id="input-email" value={email} onChange = {(e)=> setEmail(e.target.value)} />
                </div>

                <div class="form-input">
                    <label for="input-password" class="form-input__label">Password</label>
                    <input type="password" minLength='8' required class="form-input__field" id="input-password" value={password} onChange = {(e)=> setPassword(e.target.value)}/>
                </div>

                <div class="form-input">
                    <label for="input-password2" class="form-input__label">Confirm Password</label>
                    <input type="password" minLength='8' required class="form-input__field" id="input-password2" value={password2} onChange = {(e)=> setPassword2(e.target.value)}/>
                </div>

                <div class="form-button">
                    <button type="button" onClick={register} class="form-button__submit">Register</button>
                </div>
            </form>

            <div class="form">

                <div class="form-input">
                    <span class="form-input__label">Have account? Back to Sign in ♡(→_→) </span>
                </div>
                
                <div class="form-button">
                    {/* <a href="signin.html" class="form-button__submit">Sign in</a> */}
                    <NavLink to='/auth' className="form-button__submit" >Sign in</NavLink>
                </div>

            </div>

        </div>
    )
}
