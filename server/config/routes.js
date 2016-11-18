console.log('backend routes have been loaded');
var friend = require('./../controllers/friends.js');

module.exports = function(app){
	app.post('/user/add', function(req, res){
		friend.add(req,res);
	});
	app.get('/users', function(req, res){
		friend.index(req, res);
	});
	app.get('/oneuser/:id', function(req, res){
		friend.showOne(req, res);
	});
	app.post('/oneuser/:id', function(req, res){
		// console.log('reached one user update');
		// console.log(req.params.id);
		// console.log(req.body);
		friend.update(req, res);
	});
	app.delete('/oneuser/delete/:id', function(req, res){
		// console.log('reached one user delete');
		friend.delete(req, res);
	});
};