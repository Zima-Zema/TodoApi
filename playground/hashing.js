const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');


// var message = 'I am In Love With You';
// var hash = SHA256(message).toString();
// console.log(hash);


var data ={
    id:10
}
var token = jwt.sign(data,'123abc');
console.log(token);

var decode=jwt.verify(token,'123abc');
console.log(decode);


// var token = {
//     data,
//     hash:SHA256(JSON.stringify(data)+'somesecret').toString()
// }

// token.data.id = 5;
// token.hash=SHA256(JSON.stringify(token.data)).toString();
// var res=SHA256(JSON.stringify(token.data)+'somesecret').toString();

// if (res === token.hash) {
//     console.log('data was not change');
// }else{
//     console.log('Data Error');
// }

