const card = document.querySelector('.content-button__card');
const lButton = document.querySelector('.content-button.content-lbutton');
const rButton = document.querySelector('.content-button.content-rbutton');
let isSwitched = false;

card.addEventListener("click", flipCard);
lButton.addEventListener("click", prevCard);
rButton.addEventListener("click", nextCard);

function flipCard() {
    if(isSwitched)
        isSwitched = false;
    else
        isSwitched = true;
    this.classList.toggle("flip");
}

function nextCard(){
    if(currentCard < cardElements.length - 1){
        currentCard++;
        if(isSwitched)
            card.click();
        fillCard(cardElements[currentCard]);
    }
}

function prevCard(){
    if(currentCard >= 1 && cardElements.length > 0)
    {
        currentCard = currentCard - 1;
        if(isSwitched)
            card.click();
        fillCard(cardElements[currentCard]);
    }
}