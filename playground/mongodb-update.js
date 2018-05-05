// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to database server.')
	}
	console.log('Connected to Mongodb server.');

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('5aedf30cd80e4d1cb9727b82')
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5ae84dced9c9235ab5c322bf')
	}, {
		$set: {
			name: 'Akash'
		},
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});

	// db.close();
});	