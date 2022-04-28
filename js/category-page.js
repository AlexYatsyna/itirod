var categoryId = getUrlParam("id");
let currentCard = 0;
let cardElements = [];

db.getCardsByCategory(categoryId).then( (element) =>{
    element.docs.forEach( card => {
        cardElements.push(card.data());
        fillDefenitionTable(card.data());
    });

    fillCard(cardElements[currentCard]);     
})

function fillCard(card){
    setParagrapgTextById("question", card.question);
    setParagrapgTextById("answer", card.answer);
    
}

function fillDefenitionTable(card){
    let defetionTable = document.getElementsByClassName("table-defenition")[0];
    let element = document.createElement("li");
    let spanElement = createSpan("table-item__category","Defenition:") ;

    spanElement.appendChild(createParagraph("defenition-text", card.question));
    spanElement.insertAdjacentText("beforeend", "Answer:");
    spanElement.appendChild(createParagraph("card-answer", card.answer));
    
    element.setAttribute("class", "table-item");
    element.appendChild(spanElement);
    defetionTable.appendChild(element);
}