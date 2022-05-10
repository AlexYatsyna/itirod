import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authUser } from "../../db/auth-db";
import { db } from "../../db/quizlet-db";
import {  addDoc } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { NavLink } from "react-router-dom";



export default function Comment() {

    const [messageNew, setMessage] = useState("");
    const navigate = useNavigate()
  

    const addData = async (ref, data)  => {
        await addDoc(ref, data);
    }

    const submitAdd = (e) => {
        let query = collection(db.database, 'comments');   
        e.preventDefault();

        if(authUser.isAuthenticated){
            if(messageNew !== "")
            {
                addData(query, {
                    userID : authUser.currentUserID,
                    message : messageNew
                }).then(()=>{
                     navigate("/"); })
            }
            else{
                alert("Message cannot be empty ")
            }
        }
        else {
            alert("You are not authorized")
        }
        
    }

    return (

        <div className="form-container">
            <p className="form-container__title">Leave a comment</p>
            <form className="form" method="post">

                <div className="form-input">
                    <label  className="form-input__label">Your feedback</label>
                    <textarea className="form-input__field" required id="commentText" value={messageNew} onChange={(e) => setMessage(e.currentTarget.value)} cols="20" rows="10" placeholder="Enter your feedback"></textarea>
                </div>
                
                <div className="menu-list form-list">

                    <div className="comment-element">
                        <div className="form-button">
                            <NavLink to='/' className="form-button__submit">Cancel</NavLink>
                            {/* <a href="../index.html" className="form-button__submit" >Cancel</a> */}
                         </div>
                    </div>

                    <div className="comment-element">
                        <div className="form-button">
                            <button onClick={submitAdd} className="form-button__submit">Add</button>
                        </div>
                    </div>
                </div>


            </form>

        </div>
    )
}