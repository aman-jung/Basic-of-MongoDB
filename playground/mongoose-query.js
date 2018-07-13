var {mongoose} = require('./../server/mongoose/mongoose');
var {Todo} = require('./../server/models/todo');
var {Users} = require('./../server/models/user');
var id = '6b4769bf86bb80a80e1feea7';
Users.findById(id).then((resp)=>{
	if(!resp){
		return console.log("Id not found");
	}
	console.log(resp);
},(e)=>{console.log(e)});
// var id = '6b478c343be0ef0c1dd67624';
// Todo.find({
// 	_id:id}).then((res)=>{
// 		if(!res){
// 			return console.log("error found");		
// 		}
// 		console.log(res);
// 	});
// 	Todo.findOne({
// 		_id:id
// 	}).then((ress)=>{
// 		if(!ress){
// 			return console.log("error found");		
// 		}
// 		console.log(ress);
// 	});
// 	Todo.findById({
// 		_id:id
// 	}).then((resp)=>{
// 		if(!resp){
// 			return console.log("error found");		
// 		}
// 		console.log(resp);
// 	});