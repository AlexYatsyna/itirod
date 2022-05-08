db.database.collection("categories").orderBy("name").onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(element => {
      if(element.type == "added"){
        addTableElement(element.doc) 
      }
      else if(element.type == "removed"){
          deleteTableElement(element.doc.id);
      }
    });
})

db.database.collection("comments").orderBy("userID").onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(element => {
      if(element.type == "added"){
        addCommentElement(element.doc) 
      }
      else if(element.type == "removed"){
        deleteCommentElement(element.doc.id);
      }
    });
})

function deleteTableElement(id){
    let categoryTable = document.getElementsByClassName("table")[0];
    let li = document.getElementById(id);

    categoryTable.removeChild(li);
}

function addTableElement(docElement){
    let category = docElement.data();
    let categoryTable = document.getElementsByClassName("table")[0];
    let element = document.createElement("li");
    let lnk = createLink("table-item__category", "html/category.html?id="+docElement.id);
    let ctgrName = createParagraph("category-form__name", category.name);
    let ctgrDescr = createParagraph("category-form__description", category.description);

    element.setAttribute("id", docElement.id)
    element.setAttribute("class", "table-item");
    
    lnk.appendChild(ctgrName);
    lnk.appendChild(ctgrDescr);
    element.appendChild(lnk);
    categoryTable.appendChild(element);
}

function deleteCommentElement(id){
    let commentsTable = document.getElementById("comments-table");
    let li = document.getElementById(id);

    commentsTable.removeChild(li);
}

function addCommentElement(docElement){
    let comment = docElement.data();
    let commentsTable = document.getElementById("comments-table");
    let element = document.createElement("li");
    let article = createArticle("comment-card");
    let userName = createParagraph("comment-card__name", "User email"); //comment.userID); 
    let mess = createParagraph("comment-card__text", comment.message);

    element.setAttribute("id", docElement.id);
    element.setAttribute("class", "comment-element");
    
    article.appendChild(userName);
    article.appendChild(mess);
    element.appendChild(article);
    commentsTable.appendChild(element);
}


