const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5afcf840a2e51ba619a7b4ac11';

// if (!ObjectId.isValid(id)) {
// 	console.log('Id not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if (!todo) {
// 		return console.log('Id not found');
// 	}
// 	console.log('Find By Id', todo);
// }).catch((e) => console.log(e)) ;

var userId = '5aef522834911b821cef3e49';

User.findById(userId).then((user) => {
	if (!user) {
		return console.log('User not found');
	}
	console.log('User found', user);
}).catch((e) => console.log(e));