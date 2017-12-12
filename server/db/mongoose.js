var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://blackflower225:Alph@159@ds046027.mlab.com:46027/todoapp', {
    useMongoClient: true
});

module.exports={
    mongoose:mongoose
}