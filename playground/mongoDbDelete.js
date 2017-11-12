//const mongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log(err);
    }
    console.log('Connected to MongoDB server');
    // deleteMany
    // db.collection('Todos').deleteMany({text : "eat the lanch"}).then((res)=>{
    //     console.log(res);
    // })
    // db.collection('Users').deleteMany({ name : "Andrew" }).then((res) => {
    //     console.log(res.result);
    // })

    //deleteOne
    // db.collection('Todos').deleteOne({ text: "eat the lanch" }).then((res) => {
    //     console.log(res);
    // })

    // db.collection('Users').deleteOne({age : 30}).then((res)=>{
    //     console.log(res.result);
    // })

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({ text: "eat the lanch" }).then((res)=>{
    //     console.log(res);
    // })

    db.collection('Users').findOneAndDelete({ 
        _id: new ObjectID("5a08aef7ab977ab77e4a22fb") 
    }).then((res) => {
        console.log(res)
    })


    db.close();

});