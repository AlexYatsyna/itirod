export class Category{
    constructor(id, name, description){
        this.id = id;
        this.name = name;
        this.description = description;
    } 
}

// export const categoryConverter = {
//     toFirestore: (category) => {
//         return {
//             name : category.name,
//             description : category.description,
//         };
//     },
//     fromFirestore: (snapshot, options) => {
//         const data = snapshot.data(options);
//         return new Category(data.name, data.description);
//     }
// }

export class Card{
    constructor(id, question, answer, categoryID){
        this.id = id;
        this.question = question;
        this.answer = answer;
        this.categoryID = categoryID;
    }
}

// export const cardConverter = {
//     toFirestore: (card) => {
//         return {
//             question : card.question,
//             answer : card.answer,
//             categoryID : card.categoryID,
//         };
//     },
//     fromFirestore: (snapshot, options) => {
//         const data = snapshot.data(options);
//         return new Card(data.question, data.answer, data.categoryID);
//     }
// }

export class Comment{
    constructor(id, userID, message){
        this.id = id;
        this.userID = userID;
        this.message = message;
    }
}

// export const commentConverter = {
//     toFirestore: (comment) => {
//         return {
//             message : comment.message,
//             userID : comment.userID,
//         };
//     },
//     fromFirestore: (snapshot, options) => {
//         const data = snapshot.data(options);
//         return new Comment(data.userID, data.message);
//     }
// }


// const categories = [new Category('Sport','tenis, footbal, ...'),
//  new Category('Language','english, spanish, italian'),
//  new Category('Math', 'Arithmetic, Geometry, Algebra'),
//  new Category('Culture and Art', 'History, Philosophy'),
//  new Category('IT', 'Python, C#, C++ ...'),
//  new Category('House', 'Rooms, Things ..')];

//  const cardElements = [new Card("Which sport below requires the least cardiovascular fitness?\nA.\nrunning\nB.\nweight training\nC", "B.\nweight training", 1),
// new Card("Vertex of a quadratic function (formula)", "f(x)=a(x-h)^2+k", 1),
// new Card("The rate of change is the same on the entire graph.", "Constant rate of change", 1),
// new Card("A function whose graph goes down (falls) as it is followed from left to right is said to be a ____.", "Decreasing function", 1),];

