const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

var id = "5a30390d8f0b660014844295";
var uId = "5a0c9983201f480b609e53af33";

// if (!ObjectID.isValid(id)) {
//     console.log('id is not valid');
// }

if (ObjectID.isValid(id)) {
    Todo.findByIdAndRemove(id).then((doc)=>console.log(doc)).catch((e) => console.log(e))
} else {
    console.log("User is Not Valid");
}
// Todo.remove({}).then((result)=>{
//     console.log(result);
// })
// Todo.findOneAndRemove()
