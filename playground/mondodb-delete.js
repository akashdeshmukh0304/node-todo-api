// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server.', err);
	}
	console.log('Connected to MongoDB server.')

	//delete many
	// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// });

	// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// });

	// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
	// 	console.log(result);
	// });

	// db.collection('Users').deleteMany({name: 'Akash'}).then((result) => {
	// 	console.log(result);
	// });

	// db.collection('Users').deleteOne({name: 'Mike'}).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndDelete({_id: new ObjectID('5aeb5c3fcaa493141f2e04f0')}).then((result) => {
		console.log(result);
	})

	// db.close();
});