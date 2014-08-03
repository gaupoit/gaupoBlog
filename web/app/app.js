/**
* gaupoBlog Module
*
* Description
*/
var gaupoBlog = angular.module('gaupo_App', ['ngRoute'])
.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: '/html/index.html',
		controller: 'HomeController'
	});
}])