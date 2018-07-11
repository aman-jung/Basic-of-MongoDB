const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		return console.log("Unable to connect to server");
	}
	// db.collection('Todo').insertOne({
	// 	text:'Aman',
	// 	paragraph:'karki'
	// },(err,result)=>{
	// 	if(err){
	// 		return console.log("Error occured",err);
	// 	}
	// 	console.log(JSON.stringify(result.ops,undefined,2));
	// });
	db.collection('Personal Information').insertOne({
		name:"Aman Jung Karki",
		Age:23,
		location:"yelanachahali"
	},(err,result)=>{
		if(err){
			return console.log("error:",err);
		}
		console.log("connected");
		console.log(JSON.stringify(result.ops,undefined,2));//results.ops[0]._id.getTimestamp(),undefined,2));
	});
	db.close();
});