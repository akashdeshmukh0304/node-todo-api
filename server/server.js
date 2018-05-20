var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose')
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

const {ObjectId} = require('mongodb');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	});
});

//post URLs
// app.post('/users', (req, res) => {
// 	var user = new User({
// 		email: req.body.email
// 	});
// 	user.save().then((doc) => {
// 		res.send(doc);
// 	}, (e) => {
// 		res.send(e);
// 	});
// });

app.get('/todos', (req, res) => {
	Todo.find().then((todos) => {
		res.send({todos});
	}, (e) => {
		res.status(400).send(e);
	});
});

app.get('/todos/:id', (req, res) => {
	var id = req.params.id;

	if (!ObjectId.isValid(id)) {
		res.status(404).send({
			error: 'Invalid object Id'
		});
	}
	Todo.findById(id).then((todo) => {
		if (!todo) {
			return res.status(404).send({
				error: 'No data found'
			});
		}
		res.send({todo});
	}).catch((e) => res.status(400).send());
});

app.listen(3000, () => {
	console.log('Started on port 3000');
});

module.exports = {app};
