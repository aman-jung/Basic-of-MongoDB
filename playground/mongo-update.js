const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		return console.log(err);
	}
	db.collection('Personal Information').findOneAndUpdate({
		_id:new ObjectID('5b46e541198cb79a9b305981')},{
		$set:{name:'AmanKa'},$inc:{age:1}},
		{returnOriginal:false}).then((resolve)=>{
			console.log(JSON.stringify(resolve,undefined,2));
		},(reject)=>{
			console.log(reject);
		});
});