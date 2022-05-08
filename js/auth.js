function submitLogin(){
    let email = document.getElementById("input-email").value;
    let password = document.getElementById("input-password").value;
    let errors = 0;

    if(!validateEmail(email)){
        alert("Invalid email address!");
        errors += 1;
    }

    if(!validatePassword(password)){
        alert("Password must be more than 8 characters!");
        errors += 1;
    }

    if(errors === 0){
        authUser.login(email, password).then( () =>{
            location.href = "../index.html";
        }).catch( (e) =>{
            console.log(e);
            alert("Login is failed. Check your emain and password.")
        })
    }

}

function validateEmail(email){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return true;
    }
    else{
        return false;  
    }

}

function validatePassword(password){
    if(password === "" || password.length < 8){
        return false;
    }
    else{
        return true;
    }
}

function submitRegister(){
    let email = document.getElementById("input-email").value;
    let password = document.getElementById("input-password").value;
    let password2 = document.getElementById("input-password2").value;
    let errors = 0;

    if(!validateEmail(email)){
        alert("Invalid email address!");
        errors += 1;
    }

    if(!validatePassword(password)){
        alert("Password must be more than 8 characters!");
        errors += 1;
    }
    else if(!(password === password2)){
        alert("Password don't match!")
        errors += 1;
    }

    if(errors === 0){
        authUser.register(email, password).then( () =>{
            location.href = "../index.html";
        }).catch( (e) =>{
            console.log(e);
            alert("Account already exists.")
        })
    }
}