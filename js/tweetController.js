tweetApp.controller('tweetController', function($scope, $http, $location, $routeParams){

    $scope.pageClass = 'page-home';

    if($routeParams.searchTerm) {
        var searchTerm = $routeParams.searchTerm
    }
    else {
        var searchTerm = 'trump';
    }

	$http({
    	method: 'GET',
    	url: 'http://digitalcrafts.com/students/twitter/hashtag.php?user=true&hash=trump'
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