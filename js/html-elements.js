
function createParagraph(styleClass, text){
    let paragraph = document.createElement("p");

    paragraph.setAttribute("class", styleClass);
    paragraph.innerText = text;

    return paragraph;
}

function createLink(styleClass, link, text = ""){
    let lnk = document.createElement("a");
    
    lnk.setAttribute("class", styleClass);
    lnk.setAttribute("href", link);
    lnk.innerText = text;

    return lnk;
}

function setParagrapgTextById(id, text){
    let paragraph = document.getElementById(id);
    paragraph.innerText = text;

}

function createSpan(styleClass, text){
    let span = document.createElement("span");

    span.setAttribute("class", styleClass);
    span.innerText = text;

    return span;
}

function createSelectOptions(id, data){
    let selectElement = document.getElementById(id);

    for(item of data){
        selectElement.appendChild(createOption(item.id, item.data().name));
    }
}

function createOption(value, text){
    let option = document.createElement("option");
    
    option.setAttribute("value",value);
    option.innerText = text;

    return option;
}

function createArticle(styleClass, text=""){
    let article = document.createElement("article");

    article.setAttribute("class", styleClass);
    article.innerText = text;

    return article;
}