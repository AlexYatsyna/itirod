var commentId = getUrlParam("id");

function submitComment(){
    let comment = document.getElementById("commentText").value;

    if(comment === ""){
        alert("The field cannot be empty!")
    }
    else if(authUser.currentUserID === null)
    {
        alert("You must be logged in to add a comment")
    }
    else{
        let newComment = new Comment(authUser.currentUserID, comment);
        db.addComment(newComment).then( () => {
            location.href = "../index.html";    
        });
    }
}

function updateComment(){
    let commentText = document.getElementById("commentText").value;
    let comment = null;

    db.getCommentById(commentId).then( (commentDoc) =>{
        comment = commentDoc.data();
    });

    if(commentText === "" && comment.userID === authUser.currentUserID){
        db.deleteComment(commentId);      
    }
    else{
        if(comment.userID === authUser.currentUserID){
            db.updateComment(commentId, new Comment(authUser.currentUserID, commentText));
        }
    }
}