import {initializeApp}  from "firebase/app";
import { getFirestore} from '@firebase/firestore';
import { addDoc, collection, getDocs , updateDoc, doc, deleteDoc, query, where} from 'firebase/firestore';
// import { categoryConverter, cardConverter, commentConverter } from "./models";
// import { collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD-FspqbnAywYcuxgYeDYVAryO_PpdzFBM",
    authDomain: "quizlet-project-univer.firebaseapp.com",
    projectId: "quizlet-project-univer",
    storageBucket: "quizlet-project-univer.appspot.com",
    messagingSenderId: "598372917605",
    appId: "1:598372917605:web:f6c1c3ff38ce107bf5c18c",
    measurementId: "G-8ME54R8D69"
  };

  class DBUtils{
      constructor(){
        this.app = initializeApp(firebaseConfig);
        this.database = getFirestore(this.app);
        // firebase.initializeApp(firebaseConfig);
        // this.database = firebase.firestore();
      }

      async addCategory(category){
        let ref = collection(this.database, 'categories'); 
        return await addDoc(ref,{
                  name : category.name,
                  description : category.description
        });
        // return this.database.collection("categories").withConverter(categoryConverter).add(category);
      }

      async addCard(card){
        let ref = collection(this.database, 'cards'); 
        return await addDoc(ref,{
                    question : card.question,
                    answer : card.answer,
                    categoryID: card.categoryID
        });
        // return this.database.collection("cards").withConverter(cardConverter).add(card);
      }

      async addComment(comment){
        let ref = collection(this.database, 'comments'); 
        return await addDoc(ref,{
                    userID : comment.userID,
                    message : comment.message
        });
        // return this.database.collection("comments").withConverter(commentConverter).add(comment);
      }

      async updateCategory(id, category){
        let currentDoc = doc(this.database, "categories", id);
        return await updateDoc(currentDoc,{
          name: category.name,
          description: category.description, 
        });
        // return this.database.collection("categories").doc(id).update({
        //   name: category.name,
        //   description: category.description, 
        // });
      }

      async updateCard(id, card){

        let currentDoc = doc(this.database, "cards", id);
        return await updateDoc(currentDoc,{
          question: card.question,
          answer: card.answer,
          categoryID: card.categoryID,  
        });

        // return this.database.collection("cards").doc(id).update({
        //   question: card.question,
        //   answer: card.answer,
        //   categoryID: card.categoryID,  
        // });
      }

      async updateComment(id, comment){

        let currentDoc = doc(this.database, "comments", id);
        return await updateDoc(currentDoc,{
          message: comment.message,
          userID: comment.userID,
        });

        // return this.database.collection("comments").doc(id).update({
        //   message: comment.message,
        //   userID: comment.userID,
        // });
      }

      async deleteCategory(id){
        let currentDoc = doc(this.database, "categories", id);
        return await deleteDoc(currentDoc);
        // return this.database.collection("categories").doc(id).delete();
      }

      async deleteCard(id){
        let currentDoc = doc(this.database, "cards", id);
        return await deleteDoc(currentDoc);
        // return this.database.collection("cards").doc(id).delete();
      }

      async deleteComment(id){
        let currentDoc = doc(this.database, "comments", id);
        return await deleteDoc(currentDoc);
        // return this.database.collection("comments").doc(id).delete();
      }

      async getCategories(){
        // return this.database.collection("categories").withConverter(categoryConverter).orderBy("name").get();
        const coll = collection(this.database, "categories");
        const data = await getDocs(coll);
        return  data;
      }

      async getCardsByCategory(categoryID){
        let queryRef = collection(db.database, 'cards');
        let q = query(queryRef, where( 'categoryID', '==', categoryID));
        return await getDocs(q)
        // return this.database.collection("cards").withConverter(cardConverter).where("categoryID", "==", categoryID).get();
      }

      async getComments(){
        let query = collection(db.database, 'comments');
        return await getDocs(query);
        // return this.database.collection("comments").withConverter(commentConverter).get();
      }
  }

  export const db = new DBUtils();