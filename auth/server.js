var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var secret = "ABC123";
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post('/login', function (req, res) {
    if (req.body.username == 'abc' && req.body.password == 'xyz') {
        var obj = {
            username: req.body.username
        }
        var token = jwt.sign(obj, secret);
        var responseObj = {
            token: token
        }
        res.send(responseObj);
    } else {
        res.send({
            error: 'invalid user'
        })
    }
})


/*
app.get('/listoftasks', function (req, res) {
    //jwt.verify()
    console.log(req.headers.token)
    jwt.verify(req.headers.token, secret, function (err, decoded) {
        if (err) {
            res.send({
                error: 'Token was not verified'
            })
        } else {
            var data = ['A', 'B', 'C'];
            res.send(data);
        }

    })


});
*/


function jwtVerify(req, res, next) {
    jwt.verify(req.headers.token, secret, function (err, decoded) {
        if (err) {
            res.send({
                error: 'Token was not verified'
            })
        } else {
            next();
        }
    })
}
app.get('/listoftasks', jwtVerify, function (req, res) {
    var data = ['A', 'B', 'C'];
    res.send(data);
});

app.get('/anotherlist', jwtVerify, function (req, res) {
    var data = [1, 2, 3, 4, 5];
    res.send(data);
})

app.listen(8080, function (err) {
    console.log(err || "running");
})