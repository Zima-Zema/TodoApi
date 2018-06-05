var mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'User Emile number required'],
        trim: true,
        minlength: 5,
        unique:true,
        validate: {
            validator:(val)=> validator.isEmail(val),
            message: '{VALUE} is not a valid Email Address!'
          },
         
    },
    password: {
        type:String,
        required:[true, 'User Password number required'],
        trim: true,
        minlength: 6,
    },
    tokens:[{
        access:{
            type:String,
            required:true,  
        },
        token:{
            type:String,
            required:true,  
        }
    }]
});

UserSchema.methods.toJSON = function () {
    var userObj = this.toObject();
    return _.pick(userObj,['_id','email']);
}
UserSchema.methods.generateAuthToken = function () {
    var user = this;
    var access = 'auth';
    var token = jwt.sign({
        _id:user._id.toHexString(),
        access:access
    },'abc123').toString();
    user.tokens.push({
        access:access,
        token:token
    });
    return user.save().then(()=>{
        return token;
    })
};

UserSchema.statics.findByToken = function (token) {
    var decoded;
    try {
        decoded = jwt.verify(token,"abc123");
    } catch (error) {
        return Promise.reject();
    }
    return this.findOne({
        '_id':decoded._id,
        'tokens.token':token,
        'tokens.access':'auth'
    })
}

var User = mongoose.model('User', UserSchema);

module.exports = { User };