var app=angular.module('xyz',['ngMessages']);

app.run(['$rootScope',function($rootScope){
	$rootScope.x=10;
	console.log('App Started');
}]);

app.controller('AbcController',['$scope',function($scope){
	
	$scope.obj={
		a:'cdcsd',
		e:'Hello'
	}
	 
	//$scope.contact={};
	$scope.myfun=function(){
		//$scope.contact.name='';
		//$scope.contact.phone='';
		$scope.contact={};
	}
	$scope.myfun2=function(){
		//var regex=/^[0-9]{10}$/;
		//if(regex.test($scope.contact.phone)){
		//	console.log($scope.contact);
		//}
		console.log($scope.contact);
	}
}]);