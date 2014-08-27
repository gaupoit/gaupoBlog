/**
* gaupoBlog Module
*
* Description
*/
var gaupoBlog = angular.module('gaupo_App', ['ngRoute', 'ngSanitize'])
.config(['$routeProvider',function($routeProvider) {
	// $routeProvider.when('/', {
	// 	templateUrl: '/html/index.html',
	// 	controller: 'HomeController'
	// });

	$routeProvider.when('/', {
		templateUrl: '/html/blogs.html',
		controller: 'BlogsController'
	});

	$routeProvider.when('/admin/blog', {
		templateUrl: '/html/blogadmin.html',
		controller: 'AdminBlogController'
	});

	$routeProvider.when('/blog/:blogId', {
		templateUrl: '/html/blogdetails.html',
		controller: 'BlogsController'
	});

}])