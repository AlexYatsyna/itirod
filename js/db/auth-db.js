class authDB{
    constructor(){
        this.auth = firebase.auth();
        this.currentUserID = null;
        this.isAuthenticated = false;
    }

    async register(email, password) {
        return this.auth.createUserWithEmailAndPassword(email, password);
    }

    async login(email, password){
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    async logout(){
        return this.auth.signOut();
    }

    getUserID(){       
        return this.currentUserID;
    }
}

const authUser = new authDB();
authUser.auth.onAuthStateChanged( (user) => {
    if (user){
        authUser.isAuthenticated = true;
        authUser.currentUserID = user.uid;     
        showAuthBtns();
    }
    else{
        authUser.isAuthenticated = false;
        authUser.currentUserID = null;
        showAuthBtns();
    }
})

showAuthBtns();
function showAuthBtns(){
    let signElement = document.getElementById("signin-btn");
    let registerElement = document.getElementById("register-btn");
    let logoutElement = document.getElementById("logout-btn");

    signElement.classList.toggle("hide", authUser.isAuthenticated);
    registerElement.classList.toggle("hide", authUser.isAuthenticated);
    logoutElement.classList.toggle("hide", !authUser.isAuthenticated);
}

function getUrlParam(param) {
    let queryString = location.search;
    let urlParams = new URLSearchParams(queryString);
    let value = urlParams.get(param);
    return value;
  }