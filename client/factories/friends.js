console.log('friend factory has been loaded');

app.factory('friendFactory', function($http){
	var factory = {};
	var friends = [];

	//this function takes in two parameters from the front-end controller
	//newUser is a named parameter that is referencing the first parameter
	//passed from the front-end controller(ie.$scope.newUser) & callback
	//is a named function parameter that is referencing the function(returned_data)
	//passed from the front-end controller
	factory.addFriend = function(newUser, callback){
		console.log('Passed to factory');
		console.log(newUser);
	//making a call to the back-end using $http which is a default method
	//of angular, it takes in at least two parameters: url, data, & config
	//.then is a promise callback which returns something after the call is
	//made in the back-end
		$http.post('/user/add', newUser).then(function(returned_data){
	// note that whatever is specified after the $http. NEEDS to MATCH the
	//routes in the back-end(routes.js file) if the route is a get,($http.get)	
			console.log(returned_data.data);
			if(returned_data){
				// friend = returned_data.data;
				callback(returned_data.data);
			}
			else{
				console.log('api call to backend database failed');
			}
		});
	};

	factory.allFriends = function(callback){
		$http.get('/users').then(function(returned_data){
			callback(returned_data.data);
		});
	};

	factory.oneFriend = function(friend_id, callback){
		$http.get('/oneuser/' + friend_id).then(function(returned_data){
			callback(returned_data.data);
		});
	};

	factory.updateFriend = function(friend, callback){
		console.log(friend);
		$http.post('/oneuser/' + friend._id, friend).then(function(returned_data){
			console.log(returned_data.data);
			callback(returned_data.data)
		});
	};

	factory.deleteFriend = function(friend_id){
		console.log(friend_id);
		$http.delete('/oneuser/delete/' + friend_id).then(function(returned_data){
			console.log(returned_data.data);
		});
	};

	return factory;
});
