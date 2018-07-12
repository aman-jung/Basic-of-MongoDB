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
	todos.save().then((resp)=>{
		res.send(resp);
	},(err)=>{
		res.status(400).send(err);
	});
});
app.get('/todo',(req,res)=>{
	Todo.find().then((result)=>{
		res.send({result});
	},(err)=>{
		res.status(400).send(err);
	});
});
app.listen(5000,()=>{
	console.log("server is up and running");
});