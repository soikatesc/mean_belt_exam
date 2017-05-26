var app = angular.module('app', ['ngRoute', 'ngCookies'])

console.log('loading config file....')

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'partials/login_user.html',
		controller: 'UsersController as UC'
	})
	.when('/register', {
		templateUrl: 'partials/registration_user.html',
		controller: 'UsersController as UC'
	})
	.when('/dashboard', {
		templateUrl: 'partials/dashboard.html',
		controller: 'UsersController as UC'

	})
	.when('/user/:id', {
		templateUrl: 'partials/user_profile.html',
		controller: 'UsersController as UC'

	})
	.otherwise({
		redirectTo: '/'
	})
})