gaupoBlog.controller('HomeController', ['$scope', '$http', function($scope, $http) {
	$http.get('/api/blogs')
	.success(function(data) {
		$scope.blogs = data;
		console.log("Blogs", $scope.blogs);
	})
	.error(function (data) {
		console.log("Errors", data);
	});
}]);