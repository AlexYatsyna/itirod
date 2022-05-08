fillSelectField()

function submitAdd(){
    let inpQuestion = document.getElementById("input-question").value;
    let inpAnswer = document.getElementById("input-answer").value;
    let selectedCategory = document.getElementById("input-category").value;
    let errors = validateForm(inpQuestion,inpAnswer,selectedCategory);
    
    if(errors === 0){
        alert("Successful!")
        //TODO: add to db firebase;
    }

}

function submitUpdate(){
    let inpQuestion = document.getElementById("input-question").value;
    let inpAnswer = document.getElementById("input-answer").value;
    let selectedCategory = document.getElementById("input-category").value;
    let errors = validateForm(inpQuestion,inpAnswer,selectedCategory);

    if(errors === 0){
        alert("Successful!")
        //TODO: update in db firebase, delete also with db;
    } 
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

    return errors;
}

function fillSelectField(){
    createSelectOptions("input-category", categories);
}