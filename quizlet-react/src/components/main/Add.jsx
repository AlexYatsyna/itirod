import React, { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { authUser } from "../../db/auth-db";
import { db } from "../../db/quizlet-db";
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { Category } from "../../db/models";


export default function Add() {

    const [questionNew, setQuestion] = useState("");
    const [answerNew, setAnswer] = useState("");
    const [category, setCategory] = useState("");
    const navigate = useNavigate()

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const getCategories = async  () => {
        let query = collection(db.database, 'categories');
        let data = await getDocs(query);
        let temp = [];
            data.docs.map((el)=> {
            temp.push(new Category(el.id, el.data().name, el.data().description))
        })
        setCategories(temp);
        }

    getCategories();
    
    }, [])
  

    const addData = async (ref, data)  => {
        await addDoc(ref, data);
    }

    const submitAdd = (e) => {
        let query = collection(db.database, 'cards');   
        e.preventDefault();


        if(authUser.isAuthenticated){
            if(category !== "")
            {
                addData(query, {
                    question : questionNew,
                    answer : answerNew,
                    categoryID : category
                }).then(()=>{
                     navigate("/"); })
            }
            else{
                alert("Category cannot be empty ")
            }
        }
        else {
            alert("You are not authorized")
        }
        
    }

    return (

        <div className="form-container">
            <p className="form-container__title">Add new card</p>
            <form className="form" method="post">

                <div className="form-input">
                    <label className="form-input__label">Definition/Question</label>
                    <textarea className="form-input__field" id="input-question" cols="25" rows="3" value={questionNew} placeholder="Enter definition/question" onChange={(e) => setQuestion(e.target.value)}></textarea>
                </div>

                <div className="form-input">
                    <label  className="form-input__label">Answer</label>
                    <textarea className="form-input__field" id="input-answer" cols="25" rows="2" value={answerNew} placeholder="Enter answer for definition/question" onChange={(e) => setAnswer(e.target.value)}></textarea>
                </div>

                <div className="form-input">
                    <label  className="form-input__label">Select category</label>
                    <select  id="input-category" className="form-input__field" required value={category} onChange={(e) => setCategory(e.currentTarget.value)}>
                        <option value="">Select a category</option>    
                        {
                            categories.map((category) => {
                                return (
                                    <option key={category.id} value={category.id}>{category.name} </option>   
                                )
                            })
                        }
                    </select>
                </div>

                <div className="form-button">
                    <button type="button" onClick={submitAdd} className="form-button__submit">Add</button>
                </div>
            </form>
        </div>
    )
}
