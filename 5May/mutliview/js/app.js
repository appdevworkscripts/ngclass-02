var app=angular.module('myapp',['ngRoute','ngMessages']);

app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
	$routeProvider.when('/',{
		templateUrl:'views/home.html',
		controller:'AbcController'
	});
	
	$routeProvider.when('/aboutus',{
		templateUrl:'views/about.txt',
		controller:'AbcController'
	});
	
	$routeProvider.when('/contactus',{
		templateUrl:'views/contactus.html',
		controller:'AbcController'
	});
	$locationProvider.html5Mode(true);
	console.log('Config function called');
}]);

app.run(['$rootScope',function($rootScope){
	console.log('Run Function Called');
}]);


app.controller('AbcController',['$scope','$rootScope',function($scope,$rootScope){
	console.log('controller called');
}]);