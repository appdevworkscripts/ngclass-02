var express=require('express');
var app=express();
var PORT=8000;
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
mongoose.connect('mongodb://user:paass@ds155490.mlab.com:55490/zenwaysregister');

var User=mongoose.model('user',mongoose.Schema({
	name:{type:String},
	password:{type:String}
}));

app.use(bodyParser.json());



app.get('/api/alluser',(req,res)=>{
	User.find({},(err,users)=>{
		res.send(err||users);
	});
});

app.post('/api/user',(req,res)=>{
	var user=new User(req.body);
	user.save((err,_user)=>{
		res.send(err||_user);
	});
});
app.use(express.static('public'));



app.listen(PORT,(err)=>{
	console.log(err||'Running at '+PORT);
});