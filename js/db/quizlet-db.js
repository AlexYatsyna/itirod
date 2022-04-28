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
        firebase.initializeApp(firebaseConfig);
        this.database = firebase.firestore();
      }

      async addCategory(category){
        return this.database.collection("categories").withConverter(categoryConverter).add(category);
      }

      async addCard(card){
        return this.database.collection("cards").withConverter(cardConverter).add(card);
      }

      async addComment(comment){
        return this.database.collection("comments").withConverter(commentConverter).add(comment);
      }

      async updateCategory(id, category){
        return this.database.collection("categories").doc(id).update({
          name: category.name,
          description: category.description, 
        });
      }

      async updateCard(id, card){
        return this.database.collection("cards").doc(id).update({
          question: card.question,
          answer: card.answer,
          categoryID: card.categoryID,  
        });
      }

      async updateComment(id, comment){
        return this.database.collection("comments").doc(id).update({
          message: comment.message,
          userID: comment.userID,
        });
      }

      async deleteCategory(id){
        return this.database.collection("categories").doc(id).delete();
      }

      async deleteCard(id){
        return this.database.collection("cards").doc(id).delete();
      }

      async deleteComment(id){
        return this.database.collection("comments").doc(id).delete();
      }

      async getCategories(){
        return this.database.collection("categories").withConverter(categoryConverter).orderBy("name").get();
      }

      async getCardsByCategory(categoryID){
        return this.database.collection("cards").withConverter(cardConverter).where("categoryID", "==", categoryID).get();
      }

      async getComments(){
        return this.database.collection("comments").withConverter(commentConverter).get();
      }

      async getCommentById(commentID){
        return this.database.collection("comments").withConverter(commentConverter).where("id", "==", commentID).get();
      }
  }

  const db = new DBUtils();