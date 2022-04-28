fillSelectField();

function submitAdd(){
    let inpQuestion = document.getElementById("input-question").value;
    let inpAnswer = document.getElementById("input-answer").value;
    let selectedCategoryID = document.getElementById("input-category").value;
    let errors = validateForm(inpQuestion, inpAnswer, selectedCategoryID);
    
    if(errors === 0 ){
        let newCard = new Card(inpQuestion, inpAnswer, selectedCategoryID);
        db.addCard(newCard).then( (card) => {
            location.href = "../index.html";
        });    
    }
}

function submitUpdate(){
    let id = "example";
    let inpQuestion = document.getElementById("input-question").value;
    let inpAnswer = document.getElementById("input-answer").value;
    let selectedCategoryID = document.getElementById("input-category").value;
    let errors = validateForm(inpQuestion,inpAnswer,selectedCategoryID);

    if(errors === 0){
        let newCard = new Card(inpQuestion, inpAnswer, selectedCategoryID);
        db.updateCard(id, newCard).then( (card) => {
            location.href = "../index.html";
        });
    } 
}

function deleteCard(){
    let id = "example";
    db.deleteCard(id).then((card) => {
        console.log("Card with id:"+id+"deleted");
    });
}

function validateForm(question, answer, category){
    let errors = 0;
    if(question === ""){
        errors += 1;
        alert("The field \"Question\" cannot be empty!");
    }

    if(answer === ""){
        errors += 1;
        alert("The field \"Answer\" cannot be empty!");
    }

    if(category === ""){
        errors += 1;
        alert("You must select a category for the question!")
    }

    if(authUser.currentUserID == null)
    {
        errors += 1;
        alert("You must be logged in to add a card")
    }

    return errors;
}

function fillSelectField(){
    db.getCategories().then((snapshot) => {
        createSelectOptions("input-category", snapshot.docs);
    })

   
}