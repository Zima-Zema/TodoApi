var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');
var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');
var {authenticate} = require('./middleware/auth');
var _ = require('lodash');

var app = express();
app.use(cors());
app.set('view engine', 'ejs')


const port = process.env.PORT || 3000;
app.use(bodyParser.json());
////////////////////////////////////////////////////
//Todos endPoints
app.post('/todos', (req, res) => {
    console.log(req.body);
    var todo = new Todo({
        text: req.body.text,
        completedAt: req.body.completedAt,
        completed: req.body.completed
    }).save().then((doc) => {
        res.status(201).send(doc);
    }, (err) => {
        res.status(400).send(err);
    });

});
app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        console.log(todos)
        res.status(200).send({ todos });
    }, (err) => {
        res.status(400).send(err);
    })
});
app.get('/todos/:id', (req, res) => {
    let id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send({});
        }
        return res.status(200).send({ todo });

    }, (err) => {
        return res.status(400).send();
    }).catch((e) => res.status(400).send())
});
app.put('/todos/:id', (req, res) => {
    let id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    let body = _.pick(req.body, ['text', 'completed']);
    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    }
    else {
        body.completed = false;
        body.completedAt = null;
    }
    Todo.findOneAndUpdate({ _id: new ObjectID(id) }, {
        $set: body

    }, { new: true }, (err, todo) => {
        if (err) {
            return res.status(403).send({});
        }
        if (!todo) {
            return res.status(404).send({});
        }
        res.status(200).send({ todo });
    });

});
app.patch('/todos/:id', (req, res) => {
    let id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    let body = _.pick(req.body, ['text', 'completed']);
    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    }
    else {
        body.completed = false;
        body.completedAt = null;
    }
    Todo.findOneAndUpdate({ _id: new ObjectID(id) }, { $set: body }, { new: true }).then((todo) => {
        if (!todo) {
            return res.status(404).send({});
        }
        res.status(200).send({ todo });
    }).catch((err) => {
        return res.status(400).send({});
    });

});
app.delete('/todos/:id', (req, res) => {
    let id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            return res.status(404).send({});
        }
        res.status(200).send({ todo })
    }, (err) => res.status(400).send()).catch((e) => res.status(400).send())
});
//end Todos endPoints
////////////////////////////////////////////////////

////////////////////////////////////////////////////
//Users endPoints
app.post('/users', (req, res) => {
    
    var body = _.pick(req.body,['email','password']);
    var user = new User(body);

    user.save().then(() => {    
        return user.generateAuthToken();
        //res.status(201).send(user);
    }, (err) => {
        console.log("SaveError",err);
        res.status(400).send(err);

    }).then((token)=>{
        res.status(201).header('x-auth',token).send(user);
    },(err)=>{
        console.log("tokenError",err);
        res.status(400).send(err);
    }).catch((e)=>{
        console.log("exception",e);
        res.status(400).send(e);
    })

});

app.post('/users/login',(req,res)=>{
    var body = _.pick(req.body,['email','password']);
    User.findByCredentials(body.email,body.password).then((user)=>{
        user.generateAuthToken().then((token)=>{
            res.header('x-auth',token).send(user);
        })
    }).catch((ex)=>{
        res.status(400).send();
    })
})

app.get('/users/me',authenticate,(req,res)=>{
    res.send(req.user);
})

//end Users endPoints
///////////////////////////////////////////////////
app.get("/", (req, resp) => {
    resp.render("index");
});
app.listen(port, () => {
    console.log('Started on port ' + port + '');
});
