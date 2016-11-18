console.log('friend model has been loaded');

var mongoose = require('mongoose');

var FriendSchema = mongoose.Schema({
	name: String
});

mongoose.model('Friend', FriendSchema);