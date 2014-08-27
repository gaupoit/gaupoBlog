/// <reference path="../../types/angular.d.ts" />
/// <reference path="../../types/angular-route.d.ts" />
define(["require", "exports"], function(require, exports) {
});
// gaupoBlog.controller('BlogController',
//     function($scope : BlogControllerScope, $http: ng.IHttpService, $route: any, $routeParams : BlogControllerRouteParams) {
//         $scope.$route = $route;
//         $scope.$routeParams = $routeParams;
//         $scope.blogService = new BlogService($http);
//         if ($scope.$routeParams.blogId) {
//             var blogId = $scope.$routeParams.blogId;
// 			$scope.blogService.getById(blogId, function(data){
//         			$scope.blog = data;
//                     $scope.$broadcast('dataLoaded');
// 				}, function (error) {
// 					console.log("Error", error);
// 			});
//         } else {
// 			$scope.blogService.getAll(function (data) {
// 					$scope.blogs = data;
// 				}, function (error){
// 				console.log("Error", error);
// 			});
//         }
//           $scope.$on('$includeContentLoaded', function(){
//     					alert('loaded');
//   					});
//     }
// );
