var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://abdelazim:Admin.369@ds046027.mlab.com:46027/todoapp', {
    useMongoClient: true
});

// mongoose.connect('mongodb://todoAdmin:adminTodo@localhost:27017/todoapp', {
//     useMongoClient: true
// });

mongoose.connection.on('error',(err)=>{
    console.log(err);
})
module.exports={
    mongoose:mongoose
}