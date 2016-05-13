var myApp = angular.module("myApp",['ngRoute']);

myApp.config(function($routeProvider, $locationProvider){
	$routeProvider.when('/', {
		templateUrl: 'views/front.html',
		controller: 'myController'
	}).when('/technologies',{
		templateUrl: 'views/technologies',
		controller: 'myController'
	}).when('/projects',{
		templateUrl: 'views/projects',
		controller: 'myController'
	})
});

myApp.controller("myController", function($scope,$location){
	$scope.message = "HELLO";
});