var app=angular.module('promiseApp',[]);

app.controller('pc',['$scope','$q','$http',function($scope,$q,$http){
	var square=function(num){
		return num*num;
	}
	
	var asyncSquare=function(num){
		setTimeout(function(){
			console.log('Calculated');
			return num*num;
		},1000);
	}
	
	var promisedSquare=function(num){
		return $q(function(resolve,reject){
			if(num<0){
				reject('Please pass only +ve numbers');
			}
			
			setTimeout(function(){
				console.log('Calculated');
				resolve(num*num);
			},1000);
		});
	}
	
	
	
	$scope.calc=function(){
		//$scope.result=square($scope.num);
		//$scope.result=asyncSquare($scope.num);
		promisedSquare($scope.num).then(function(res){
			$scope.result=res;
		},function(res){
			$scope.result=res;
		});
		
		
	}
}]);