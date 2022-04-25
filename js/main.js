for(category of categories){
    addTableElement(category.name, category.description);
}


function addTableElement(categoryName, categoryDescription){
    let categoryTable = document.getElementsByClassName("table")[0];
    let element = document.createElement("li");
    let lnk = createLink("table-item__category", "html/category.html");
    let ctgrName = createParagraph("category-form__name", categoryName);
    let ctgrDescr = createParagraph("category-form__description", categoryDescription);

    element.setAttribute("class", "table-item");
    
    lnk.appendChild(ctgrName);
    lnk.appendChild(ctgrDescr);
    element.appendChild(lnk);
    categoryTable.appendChild(element);
}
