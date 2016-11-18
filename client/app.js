console.log('angular.js has been loaded');

var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/home', {
		templateUrl: 'partials/home.html'
	})
	.when('/friend/:id', {
		templateUrl: 'partials/show.html'
	})	
	.when('/friend/edit/:id', {
		templateUrl: 'partials/edit.html'
	})
	.otherwise({
		redirectTo: '/home'
	})
});