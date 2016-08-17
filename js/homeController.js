tweetApp.controller('homeController', function($scope, $http, $location){
	$scope.homePage = true;

	// $scope.$watch(function(){
	// 	return $location.path();
	// },
	// function(newPath){
	// 	console.log("The path changed. It is now " + newPath);
	// 	$scope.trump = "";
	// 	$scope.hillary = "";
	// 	$scope.home = "";
	// 	if (newPath == "/trump") {
	// 		$scope.trump = "disabled";
	// 	}
	// 	else if (newPath == "/hillary") {
	// 		$scope.trump = "disabled";
	// 	}
	// });


});
