const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
	bcrypt.hash(password, salt, (err, hash) => {
		console.log(hash);
	});
});

// var hashedPassword = '$2a$10$S8SG7OOLhB0IIVib4ad38.J6XXLgamko0aa74ECI5TVtojydbDtsS';
// bcrypt.compare('sdvds', hashedPassword, (err, res) => {
// 	console.log(res);
// });

// var data = {
// 	id: 10
// };

// var token = jwt.sign(data , 'Imnumbe4');
// console.log(token);

// var decoded = jwt.verify(token,  'Imnumbe4');
// console.log(decoded);

// var message = 'I am number 3';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`hash: ${hash}`);

// var data = {
// 	id: 4
// };
// var token = {
// 	data,
// 	hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// } 

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHash === token.hash) {
// 	console.log('Data wasnt manipulated');
// } else {
// 	console.log('Data was manipulated');
// }