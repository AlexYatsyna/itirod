let logoutElement = document.getElementById("logout-btn");
logoutElement.addEventListener("click", () => {
    authUser.logout();
})