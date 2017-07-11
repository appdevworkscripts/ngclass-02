var app=angular.module('myapp',[]);
app.controller('UserController',function($scope,$http){
	$scope.refresh=function(){
		$http({
			url:'api/alluser'
		}).then(function(response){
			console.log(response);
			$scope.users=response.data;
		},function(response){
			console.log(response);
		});
	}
	$scope.refresh();
	$scope.submitForm=function(){
		console.log($scope.user);
		$http({
			url:'api/user',
			method:'POST',
			data:$scope.user
		}).then(function(){
			$scope.refresh();
			alert('Successfully inserted');
			
			$scope.user={};
		},function(){
			alert('Something went wrong');
		})
		
	}
});