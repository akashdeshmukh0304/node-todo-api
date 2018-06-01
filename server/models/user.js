const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		trim: true,
		minlength: 1,
		unique: true,
		validate: {
			validator: validator.isEmail,
			message: '{VALUE} is not a valid email'
		}
	},
	password: {
		required: true,
		type: String,
		minlength: 6
	},
	tokens: [{
		access: {
			required: true,
			type: String
		},
		token: {
			required: true,
			type: String
		}
	}]
});

userSchema.methods.toJSON = function() {
	var user = this;
	var userObject = user.toObject();
	return _.pick(userObject, ['_id', 'email']);
}

userSchema.methods.generateAuthToken = function() {
	var user = this;
	var access = 'auth';
	var token = jwt.sign({id: user._id.toHexString(), access}, 'abc123').toString();

	// user.tokens.push({access, token});
	user.tokens = user.tokens.concat([{access, token}]);
	return user.save().then(() => {
		return token;
	})
}

var User = mongoose.model('User', userSchema);

module.exports = {User};