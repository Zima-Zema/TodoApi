//const mongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');
var obj = new ObjectID();
console.log(obj);
//destructuring
// var user = { name: 'alpha', age: 25 };
// var {name} = user;
// console.log(name);
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log(err);
    }
    console.log('Connected to MongoDB server');
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     complete: false
    // }, (err, res) => {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'fatma',
    //     age: 24,
    //     location: 'cairo'
    // }, (err, res) => {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     console.log(JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2));
    // });

    db.close();

});