var myApp = angular.module("myApp",['ngRoute']);

myApp.config(function($routeProvider, $locationProvider){
	$routeProvider.when('/', {
		templateUrl: 'portfolio/views/front.html',
		controller: 'myController'
	}).when('/technologies',{
		templateUrl: 'portfolio/views/technologies',
		controller: 'myController'
	}).when('/projects',{
		templateUrl: 'portfolio/views/projects',
		controller: 'myController'
	}).when('/contact',{
		templateUrl: 'portfolio/views/contact',
		controller: 'myController'
	})
});

myApp.controller("myController", function($scope,$location){
	$scope.message = "HELLO";
});