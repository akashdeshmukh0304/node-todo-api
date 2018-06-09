var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.createConnection(process.env.MONGODB_URI, {
	useMongoClient: true
});

module.exports = {mongoose};