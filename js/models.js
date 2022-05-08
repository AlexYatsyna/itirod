class Category{
    constructor(name, description){
        this.name = name;
        this.description = description;
    }
}

class Card{
    constructor(question, answer, category){
        this.question = question;
        this.answer = answer;
        this.category = category;
    }
}

class Comment{
    constructor(user, message){
        this.user = user;
        this.message = message;
    }
}


const categories = [new Category('Sport','tenis, footbal, asd'),
 new Category('Language','english, spanish, italian'),
 new Category('Math', 'Arithmetic, Geometry, Algebra'),
 new Category('Culture and Art', 'History, Philosophy'),
 new Category('IT', 'Python, C#, C++ ...'),
 new Category('House', 'Rooms, Things ..')];

 const cardElements = [new Card("Which sport below requires the least cardiovascular fitness?\nA.\nrunning\nB.\nweight training\nC", "B.\nweight training", 1),
new Card("Vertex of a quadratic function (formula)", "f(x)=a(x-h)^2+k", 1),
new Card("The rate of change is the same on the entire graph.", "Constant rate of change", 1),
new Card("A function whose graph goes down (falls) as it is followed from left to right is said to be a ____.", "Decreasing function", 1),];

