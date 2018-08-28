const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrybt = require('bcryptjs');

var password = "abc1234!";
bcrybt.genSalt(10).then(salt=>{
    bcrybt.hash(password,salt).then(hash=>{
        console.log("hash>>",hash);
        bcrybt.compare(password,hash).then(res=>{
            console.log("res>>",res);
            
        })
    })
})

// var message = 'I am In Love With You';
// var hash = SHA256(message).toString();
// console.log(hash);


// var data = {
//     id:4
// };
// var token = {
//     data,
//     hash:SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
// var resultHash= SHA256(JSON.stringify(token.data)+'somesecret').toString();
// if (resultHash === token.hash) {
//     console.log('Data was not changed');
// }else{
//     console.log("Data was changed");    
// }


// var data = {
//     id:15
// };

// var token = jwt.sign(data,"sec");
// console.log("token",token)

// var decode = jwt.verify(token,"sec");
// console.log("decode",decode);

