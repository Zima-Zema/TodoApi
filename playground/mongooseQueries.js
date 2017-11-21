const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

var id = "5a0c842f0b30ce2cf00d89c0";
var uId = "5a0c9983201f480b609e53af33";

if (!ObjectID.isValid(id)) {
    console.log('id is not valid');
}

if (ObjectID.isValid(uId)) {
    User.findById(uId).then((user) => {
        if (!user) {
            return console.log('Record Not Found');
        }
        console.log("User", user);
    }).catch((e) => console.log(e.CastError));
} else {
    console.log("User is Not Valid");
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log("Todos", todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log("Todo", todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Record Not Found');
//     }
//     console.log("Todo", todo);
// }).catch((e) => console.log(e))
