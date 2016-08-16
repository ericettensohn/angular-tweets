var tweetApp = angular.module('tweetApp', ['ngRoute']);

tweetApp.directive('tweetHello', function(){
	return {
		restrict: 'E', //E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: "views/hello.html"
	}
});

tweetApp.directive("helloAttr", function(){
	return {
		restrict: 'A',
		template: 'I am an attribute'
	}
})

tweetApp.directive("helloClass", function(){
	return {
		restrict: 'C',
		template: 'I am a class'
	}
})

tweetApp.directive('turnMeBlue', function() {
	return {
		link: function($scope, element, attrs) {
			element.bind('mouseenter', function(){
				element.css('color', $scope.myColor)
				console.log(attrs);
			})
			element.bind('mouseleave', function() {
				element.css('color', 'black')
			})


		}
	}
})

