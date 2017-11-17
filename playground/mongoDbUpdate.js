//const mongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log(err);
    }
    console.log('Connected to MongoDB server');
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5a05b6a9cf9b580b1080e5e4")
    // }, {
    //         $set: {
    //             completed: true
    //         }
    //     }, {
    //         returnOriginal: false
    //     }).then((res) => {
    //         console.log(res);
    //     });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5a05b894e246382950f054aa")
    }, {
            $set: {
                name: "Abdelazim"
            },
            $inc: {
                age: 2
            }
        }, {
            returnOriginal: false
        }).then((res) => {
            console.log(res);
        });
    db.close();

});