const MongoClient = require('mongodb').MongoClient;
//const ObjectID = require('mongodb').ObjectID;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		return console.log(`Error: ${err}`);
	}
	db.collection('Personal Information').find(/*{
		_id:new ObjectID('5b4602859e48f31bd8379596')
	}*/).toArray().then((resolve)=>{
		console.log("Personal Information");
		console.log(JSON.stringify(resolve,undefined,2));
	},(Error)=>{
		console.log(`Error: ${Error}`);
	});
	db.collection('Personal Information').find().count().then((result)=>{
		console.log(`NUmber of count is: ${result}`);
	},(reject)=>{
		console.log(`REjected : ${reject}`);
	});
	//db.close(); it will throw an error
});