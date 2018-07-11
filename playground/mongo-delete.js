const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if (err){
		return console.log(err);
	}
	console.log("connected");
	// db.collection('Personal Information').deleteOne({name:'Aman Jung Karki'}).then((result)=>{
	// 	console.log(result);
	// },(err)=>{
	// 	console.log(err);
	// });
	db.collection('Personal Information').findOneAndDelete({_id:new ObjectID('5b4653a74aa40d415ac7a8e1')}).then((result)=>{
	//findOneAndDelete deletes the specific item plus returns the object
	console.log(result);
},(err)=>{
	console.log(err);
});
});
	// db.collection('Personal Information').deleteMany({name:'Dithin Devaiah'}).then((result)=>{
	// 	console.log(result);
	// },(err)=>{
	// 	console.log(err);
	// });
	//db.close();
