console.log('backend controller loaded');
var mongoose = require('mongoose');

var Friend = mongoose.model('Friend');

module.exports = (function(){
	return{
		add: function(req, res){
			console.log('you have reached the backend controller!');
			var friend = new Friend(req.body);
			friend.save(function(error, result){
				console.log('you have saved the friend!');
				res.json(result);
			});
		},

		index: function(req, res){
			Friend.find({}, function(error, result){
				res.json(result);
			});
		},
		showOne: function(req, res){
			Friend.findOne({_id: req.params.id}, function(error, result){
				if(error){
					console.log('unable to find friend');
				}
				else {
					console.log('found the friend');
					res.json(result);
				}
			});
		},
		update: function(req, res){
			Friend.findOne({_id: req.params.id}, function(error, friend){
				if(error){
					console.log(error);
				}
				else{
					// console.log('found the friend for update!');
					console.log('New value should be: ' + req.body.name);
					friend.name = req.body.name;
					friend.save(function(error){
						res.json('friend was updated!');
					});
				}
			});
		},
		delete: function(req, res){
			Friend.remove({_id: req.params.id}, function(error, result){
				if(error){
					console.log(error);
				}
				else{
					console.log('user found and deleted');
					res.json('friend was deleted!');
				}
			});
		}
	};

})();