import React, { useState, useEffect  } from 'react'
import FunctionalityContainer from './FunctionalityContainer';
import CategoryContainer from './CategoryContainer';
import CommentContainer from './CommentContainer';
import { collection, getDocs } from 'firebase/firestore';
import { Category, Comment } from '../../db/models';
import { db } from '../../db/quizlet-db';


export default function Main() {

  const [categories, setCategories] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // const data = db.getCategories();
    
    const getCategories = async  () => {
      let query = collection(db.database, 'categories');
      let data = await getDocs(query);
      let temp = [];
        data.docs.map((el)=> {
          temp.push(new Category(el.id, el.data().name, el.data().description))
      })
      setCategories(temp);
      
      }

    const getComments = async  () => {
      let query = collection(db.database, 'comments');
      let data = await getDocs(query);
      let temp = [];
        data.docs.map((el)=> {
          temp.push(new Comment(el.id, el.data().userID, el.data().message))
      })
      setComments(temp)
      }
      


        // const observer = onSnapshot(query ,querySnapshot => {
        
        //     let changes = querySnapshot.docChanges();
        //     // setCategories(changes.docs.map((el) => {
        //     //     new Category(el.doc.id, el.doc.data().name, el.doc.data().description);
        //     // }))
        //     let old = [...categories];
        //     let currentData = [...categories];
        //     changes.forEach( el => {
        //         if(el.type == "added"){
        //             // addTableElement(element.doc)
        //             currentData.push(new Category(el.doc.id, el.doc.data().name, el.doc.data().description));
        //             // console.log(el.doc.data().name); 
        //         }
        //         else if(el.type == "removed"){
        //             categories.filter(function(categories){
        //                 return !(categories.id == el.doc.id);
        //             });
        //             // console.log('removed');
        //             //   deleteTableElement(element.doc.id);
        //         }

        //     })
        //     setCategories(Array.from(new Set(old.concat(currentData))));

        //     console.log(categories);
        // })
    getComments();
    getCategories();

    
  }, [])

  return (
    <main>
      <FunctionalityContainer />
      <CategoryContainer data = {categories} />
      <CommentContainer data = {comments} />
    </main>
  )
}
