gaupoBlog.controller('BlogsController', ['$scope', '$http', '$route', '$routeParams',
    function($scope, $http, $route, $routeParams) {
        $scope.$route = $route;
        $scope.$routeParams = $routeParams;       

        if ($scope.$routeParams.blogId) {
            var blogId = $scope.$routeParams.blogId;
            $http.get('api/blogs/' + blogId)
                .success(function(data) {
                    $scope.blog = data;
                    $scope.$broadcast('dataLoaded');
                })
                .error(function(data) {

                });
        } else {
            $http.get('/api/blogs')
                .success(function(data) {
                    $scope.blogs = data;
                })
                .error(function(data) {
                    console.log("Errors", data);
                });
        }
          $scope.$on('$includeContentLoaded', function(){
    					alert('loaded');    					
  					});
    }
]);
