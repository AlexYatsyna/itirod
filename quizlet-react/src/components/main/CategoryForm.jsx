import { getDocs, query, where, collection } from 'firebase/firestore';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import left from '../../images/left-arrow.png'
import right from '../../images/right-arrow.png'
import { db } from "../../db/quizlet-db";
import { Card } from '../../db/models';

export default function CategoryForm() {

    const questionElement = document.getElementById('question');
    const answerElement = document.getElementById('answer');
    const mainCard = document.getElementById('main-card');
    const params = useParams();
    const categoryId = params.id;
    const [cards, setCard] = useState([]);
    let index = 0;
    let isSwitched = false;

    useEffect(() => {     
        const getCards = async  () => {

          let queryRef = collection(db.database, 'cards');
          let q = query(queryRef, where( 'categoryID', '==', categoryId));
          let data = await getDocs(q)
          
          
          let temp = [];
            data.docs.map((el)=> {
              temp.push(new Card(el.id, el.data().question, el.data().answer, el.data().categoryID));
          })
          setCard(temp);
        }
        getCards();
        // console.log(cards)

    },[]);

    const setMainCard = () => {
        if(cards.length !== 0){
            questionElement.innerText = cards[index].question;
            answerElement.innerText = cards[index].answer;
        }    
    }
    
    const flipCard = () => {
        if(isSwitched)
            isSwitched = false;
        else
            isSwitched = true;
        mainCard.classList.toggle("flip");
    }

    const nextCard = () => {
        if(index < cards.length - 1){
            index++;
            if(isSwitched)
                mainCard.click();
            setMainCard(cards[index]);
        }
    }

    const prevCard = () => {
        if(index >= 1 && cards.length > 0){
            index -= 1;
            if(isSwitched)
                mainCard.click();
            setMainCard(cards[index]);
        }
    }
    setMainCard();
          
    return (
        <>
            <div className="content">
                <div className="content-item">
                    <button onClick={prevCard} className="content-button content-lbutton" >
                        <img src={left} alt=""/>
                    </button>
                </div>

                <div className="content-item">
                    <button className="content-button__card" id = 'main-card' onClick={flipCard}>
                        <div className="content-button__front">
                            <p className="category-form__description" id="question">
                            </p>
                        </div>

                        <div className="content-button__back">
                            <p className="category-form__back-answer" id="answer"></p>
                        </div>
                    </button>
                </div>

                <div className="content-item">
                    <button onClick={nextCard} className="content-button content-rbutton" type="button">
                        <img src={right} alt=""/>
                    </button>
                </div>
                
            </div>
            
            <br/>
            <hr className="footer-hr"/>
            <hr className="footer-hr"/>
            <br/>

            <span className="form-input__label2">
                Scroll down to view terms from the module ╭[ ᴼᴼ ౪ ᴼᴼ]╮ 
            </span>

            <ul className="table-defenition">
                {
                    cards.map((el)=>{
                       return( <li className="table-item" id = {el.id} key = {el.id}>
                            <span className="table-item__category">
                                Defenition:
                                    <p className="defenition-text">{el.question}</p>
                                Answer:        
                                    <p className="card-answer" >
                                        {el.answer}
                                    </p>
                            </span>
                        </li>)
                    })
                }
            </ul>
        </> 
    )
}
