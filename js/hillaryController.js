tweetApp.controller('hillaryController', function($scope, $http, $location, $routeParams){

    $scope.pageClass = 'page-hillary';

	$http({
    	method: 'GET',
    	url: 'http://digitalcrafts.com/students/twitter/hashtag.php?user=true&hash=hillary'
    }).then(function successFunction(tweetData){
    	$scope.tweets = tweetData.data.statuses;
    	$scope.tweets.user_profile
    	console.log(tweetData.data.statuses)
    }, function failureFunction(tweetData){

    });

    // $scope.getTimeSincePost = function() {
    // 	tweets.
    // }

});