var jwt=require('jsonwebtoken');
var secret='abcd';
var obj={
    _id:1000
}


var token=jwt.sign(obj,secret);

console.log(token);

jwt.verify(token,'uiop',function(error,decoded){
    console.log(error);
});