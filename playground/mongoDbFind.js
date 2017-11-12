//const mongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log(err);
    }
    console.log('Connected to MongoDB server');
    // db.collection('Todos').find({
    //     _id: new ObjectID("5a0882a8ab977ab77e4a1ecb"),
    // }).toArray().then((data) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(data, undefined, 2));
    // }, (error) => {

    // })


    // db.collection('Todos').find({}).count().then((count) => {
    //     console.log(count);
    // }, (error) => {

    // })

    db.collection('Users').find({
        age:24,
    }).toArray().then((data) => {
        console.log(JSON.stringify(data, undefined, 2));
    }, (error) => {

    })
    db.close();

});