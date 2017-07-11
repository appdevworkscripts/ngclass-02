var app=angular.module('mypp',[]);
//AIzaSyC4dCch-Hn4tiuhV7bD30VM5Am8fcbX7Wg
app.controller('XyzController',['$scope','$http',function($scope,$http){
	$scope.students=[
		{name:'Nadeem',roll:6,location:'Delhi'},
		{name:'Rahul',roll:3,location:'Kolkata'},
		{name:'Lalita',roll:2,location:'Gurgaon'},
		{name:'Umer',roll:7,location:'Noida'},
		{name:'Shobhit',roll:1,location:'New York'},
		{name:'Nitin',roll:9,location:'Agra'},
		{name:'Gaurav',roll:5,location:'Lucknow'},
		{name:'Mona',roll:4,location:'Patna'},
	];
	
	$scope.calc=function(){
		$http({
			url:'http://api.fixer.io/latest',
			params:{
				base:'INR',
				symbols:'USD,AUD'
			}
		}).then(function(resp){
			$scope.aud=resp.data.rates.AUD*$scope.inr;
			$scope.usd=resp.data.rates.USD*$scope.inr;
		})
	}
}]);