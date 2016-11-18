console.log('friend controller has been loaded');

app.controller('friendsController', function($scope, friendFactory, $routeParams, $location){
	$scope.friend
	$scope.newUser = {};
	// $scope.friends = [];

	//this is for loading all friends on the first partial html which is 
	//essentially the front page
	friendFactory.allFriends(function(returned_data){
		// console.log(returned_data);
		$scope.friends = returned_data;
	});

	//declare a function for handling adding of a friend and it's accessible to 
	//any partial html that is bound to the friendsController
	$scope.addFriend = function(){
		// console.log('add friend form was clicked!');
		// console.log($scope.newUser);

	//addFriend is a method inside of the object called friendFactory and
	//it takes in two parameters: one that is data from the front end and 
	//the other is to pass information back to the controller(callback)
		friendFactory.addFriend($scope.newUser, function(returned_data){
			console.log(returned_data);
			$scope.friends.push(returned_data);
		});
	};

	//this is for handling the show, edit, update and delete features
	//this features should ONLY work when there is an object id passed in from
	//the url routing(handled by app.js file)
	if($routeParams){
		friendFactory.oneFriend($routeParams.id, function(returned_data){
			console.log(returned_data);
			$scope.oneFriend = returned_data;
		});
		$scope.updateFriend = function(){
			// console.log('update friend button was clicked!');
			friendFactory.updateFriend($scope.oneFriend, function(returned_data){
				$scope.message = returned_data;
			});
		};

		$scope.deleteFriend = function(idx, friend_id){
			// console.log(idx);
			// console.log('delete friend button was clicked');
			friendFactory.deleteFriend(friend_id);
		//splice function takes an index number and how many to remove
			$scope.friends.splice(idx,1);	
		};

	}

});