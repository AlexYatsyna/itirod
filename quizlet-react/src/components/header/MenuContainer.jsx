import React from 'react';
import { NavLink } from 'react-router-dom';
import { authUser } from '../../db/auth-db';

export const ch = () =>{

    let signElement = document.getElementById("signin-btn");
    let registerElement = document.getElementById("register-btn");
    let logoutElement = document.getElementById("logout-btn");

    signElement.classList.toggle("hide", authUser.isAuthenticated);
    registerElement.classList.toggle("hide", authUser.isAuthenticated);
    logoutElement.classList.toggle("hide", !authUser.isAuthenticated);

}

export const MenuContainer = () => {


    const showBtns = async (e) => {
 
        if(authUser.isAuthenticated)
        {
            console.log(authUser.currentUserID)
            await authUser.logout();
            authUser.isAuthenticated = !authUser.isAuthenticated;
            authUser.currentUserID = "";
            ch();
        }
        else{
            alert("You are not authorized")
        }

    }

    return (
        <div className="header-item">
            <nav className="menu">
                    <div className="menu-list">
    
                                <div className="menu-list__item menu-list__item-border" id="signin-btn">
                                    <NavLink to='/auth' className="menu-list__item-text">Sign in</NavLink>
                                    {/* <a href='' className="menu-list__item-text" >Sign in</a> */}
                                </div>

                                <div className="menu-list__item menu-list__item-border " id="register-btn">
                                    <NavLink to='/register' className="menu-list__item-text">Register</NavLink>
                                    {/* <a href='' className="menu-list__item-text">Register</a> */}
                                </div>

                                <div className="menu-list__item-logout hide" id="logout-btn">
                                    <NavLink to='/' onClick={showBtns}>Logout</NavLink>
                                    {/* <a >Logout</a> */}
                                </div>

                    </div>
                
            </nav>
        </div>
    )
}
