var express = require('express');
var bodyParser = require('body-parser');
var {mongoose} = require('./mongoose/mongoose');
var {Todo} = require('./models/todo');
var {Users} = require('./models/user');
var app = express();
app.use(bodyParser.json());
app.post('/users',(req,res)=>{
	var newUser = new Users({
		email:req.body.text
	});
	newUser.save().then((result)=>{
		res.send(result);
	},(err)=>{
		res.status(400).send(err);
	});
});
app.post('/todo',(req,res)=>{
	var todos = new Todo({
		text:req.body.text
	});
	todos.save().then((res)=>{
		res.send(res);
	},(err)=>{
		res.status(400).send(err);
	});
})
app.listen(4000,()=>{
	console.log("server is up and running");
})