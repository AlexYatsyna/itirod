const searchInput = document.querySelector(".menu-list__search-input");
let cardsForHide = document.querySelectorAll(".table-item")

searchInput.addEventListener("input", e =>{
    const value = e.target.value.toLowerCase();
    cardsForHide.forEach(item => {
        const isVisible = item.firstChild.firstChild.textContent.toLowerCase().includes(value);
        item.classList.toggle("hide", !isVisible);
    })
})