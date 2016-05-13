var myApp = angular.module("myApp",['ngRoute']);

myApp.config(function($routeProvider, $locationProvider){
	$routeProvider.when('/', {
		templateUrl: 'portfolio/views/front.html',
		controller: 'myController'
	}).when('/technologies',{
		templateUrl: 'portfolio/views/technologies.html',
		controller: 'myController'
	}).when('/projects',{
		templateUrl: 'portfolio/views/projects.html',
		controller: 'myController'
	}).when('/contact',{
		templateUrl: 'portfolio/views/contact.html',
		controller: 'myController'
	})
});

myApp.controller("myController", function($scope,$location){
	$scope.message = "HELLO";
});