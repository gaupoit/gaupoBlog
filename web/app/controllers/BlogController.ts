/// <reference path="../../types/angular.d.ts" />
/// <reference path="../../types/angular-route.d.ts" />

import Blog = require("models/Blog");
import BlogService = require("services/BlogService");


interface BlogControllerScope extends ng.IScope {
	blog : Blog;
	blogs : Blog;
	blogService: BlogService;	
	$route : any;
	$routeParams: BlogControllerRouteParams;
}

interface BlogControllerRouteParams {
	blogId : string;
}

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

