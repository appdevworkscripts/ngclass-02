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
		controller:'ContactController'
	});
	$routeProvider.when('/promise',{
		templateUrl:'views/promise.html',
		controller:'PromiseController'
	});
	$locationProvider.html5Mode(true); // For removing # from url
	console.log('Config function called');
}]);

app.run(['$rootScope',function($rootScope){
	console.log('Run Function Called');
}]);


app.controller('AbcController',['$scope','$rootScope',function($scope,$rootScope){
	console.log('controller called');
}]);

app.controller('ContactController',['$scope','$location','$rootScope',function($scope,$location,$rootScope){
	$scope.myfun2=function(){
		console.log($scope.contact);
		$rootScope.contact=$scope.contact;
		$location.path('/aboutus');
	}
}]);



app.controller('PromiseController',['$scope','$q','$http',function($scope,$q,$http){
	$scope.state=1;
	var square=function(num){
		setTimeout(function(){
			console.log('Calculated');
			return num*num;
		},1000);
	}
	
	
	var promisedSquare=function(num){
		return $q(function(resolve,reject){
			console.log('Call started');
			
			if(num<0){
				reject('Number should be +ve');
			}else{
				setTimeout(function(){
					console.log('Calculated');
					var returnValue=num*num;
					resolve(returnValue);
				},1000);
			}
			
		});
	}
	
	$scope.calc=function(){
		
		$scope.state=2;
		//console.log(square($scope.num));
		promisedSquare($scope.num).then(function(response){
			console.log(response);
		},function(response){
			console.log(response);
		})
		$http({
			url:'http://api.fixer.io/latest'
		}).then(function(response){
			$scope.state=3;
			console.log(response);
			$scope.USD=response.data.rates.USD;
			$scope.INR=response.data.rates.INR;
		},function(response){
			console.log(response);
		});
		
	}
}]);