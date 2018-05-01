// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server.', err);
	}
	console.log('Connected to MongoDB server.')

	// db.collection('Todos').find({
	// 	_id: new ObjectID('5ae84b9132b7225a07bb39e5')
	// }).toArray().then((docs) => {
	// 	console.log('Records found');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable to fetch data', err);
	// });

	// db.collection('Todos').find().count().then((count) => {
	// 	console.log(`Todos count: ${count}`);
	// }, (err) => {
	// 	console.log('Unable to fetch data', err);
	// });

	db.collection('Users').find({
		name: 'Mike'
	}).toArray().then((docs) => {
		console.log('Results found');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch data', err);
	});

	// db.close();
});