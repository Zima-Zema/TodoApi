var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://abdelazim:Admin.369@ds046027.mlab.com:46027/todoapp', {
    useMongoClient: true
});

module.exports={
    mongoose:mongoose
}