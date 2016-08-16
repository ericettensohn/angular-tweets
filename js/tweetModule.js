var tweetApp = angular.module('tweetApp', ['ngRoute', 'ngAnimate']);



tweetApp.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'views/home.html',
		controller: 'tweetController'
	})
	// $routeProvider.when('/:searchTerm', {
	// 	templateUrl: 'views/home.html',
	// 	controller: 'tweetController'
	// })
	$routeProvider.when('/trump', {
		templateUrl: 'views/home.html',
		controller: 'tweetController'
	})
	$routeProvider.when('/hillary', {
		templateUrl: 'views/hillary.html',
		controller: 'hillaryController'
	})
	$routeProvider.otherwise('/');
});


// tweetApp.factory('myFactory', function(){
//     var factory = {};

//     factory.getVar = function(){
//         return this.variable;
//     }

//     factory.setVar = function(data){
//         this.variable = data;
//     }
//     
//     return factory;
// });

// tweetApp.controller('MainController', function($scope, myFactory){
//     myFactory.setVar("this is a variable");
// });

// tweetApp.controller('AnotherController', function($scope, myFactory){
//     console.log(myFactory.getVar());
//     // "this is a variable"
// })