const searchInput = document.querySelector(".menu-list__search-input");

searchInput.addEventListener("input", e =>{
    let cardsForHide = document.querySelectorAll(".table-item")
    const value = e.target.value.toLowerCase();
    cardsForHide.forEach(item => {
        const isVisible = item.firstChild.firstChild.textContent.toLowerCase().includes(value);
        item.classList.toggle("hide", !isVisible);
    })
})