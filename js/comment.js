function submitComment(){
    let comment = document.getElementById("commentText").value;

    if(comment === ""){
        alert("The field cannot be empty!")
    }
    else{
        alert("Successful!")
        //TODO: add to db
    }
}

function updateComment(){
    let comment = document.getElementById("commentText").value;

    if(comment === ""){
        //TODO: delete
    }
    else{
        alert("Successful!")
        //TODO: update in db
    }
}