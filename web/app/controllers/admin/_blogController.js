gaupoBlog.controller('AdminBlogController', ['$scope', '$http', function($scope, $http) {
	$scope.blog = {};	
	$scope.create = function(blog) {		
		$http.post('/api/blogs', blog)
		.success(function (data){
			console.log("Create Blog", data);
		})
		.error(function (data) {			
		});
	};	
}])