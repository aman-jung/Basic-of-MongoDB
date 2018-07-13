var {mongoose} = require('./../server/mongoose/mongoose');
var {Todo} = require('./../server/models/todo');
// Todo.remove({}).then((res)=>{
// 	console.log(res);
// },(err)=>{
// 	console.log(err);
// });
// Todo.findOneAndRemove({_id:'5b4899db158f8f3c15f27323'}).then((result)=>{
// 	console.log(result);
// },(err)=>{
// 	console.log(err);
// });
Todo.findByIdAndRemove('5b489cf8f1b398c0201f8819').then((result)=>{
	console.log(result);
},(err)=>{
	console.log(err);
})