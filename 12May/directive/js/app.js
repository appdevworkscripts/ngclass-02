var app=angular.module('mypp',[]);
//AIzaSyC4dCch-Hn4tiuhV7bD30VM5Am8fcbX7Wg
app.constant('gmapkey','AIzaSyC4dCch-Hn4tiuhV7bD30VM5Am8fcbX7Wg');
app.value('square',function(x){
	return x*x;
});
app.controller('XyzController',['$scope','$http','square',function($scope,$http,square){
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
	
	$scope.msg='This is custom message';
	$scope.xyz="Hello";
	console.log(square(9));
}]);


app.directive('myUser',[function(){
	return {
		replace:true,
		scope:{
			name:'@',
			msg:'@'
		},
		template:'<p>Hello <span ng-click="showMsg()">{{name}}</span> {{msg}} {{xyz}}</p>',
		controller:['$scope',function($scope){
			$scope.showMsg=function(){
				alert($scope.msg);
			}
		}]
	};	
}]);


app.directive('contact',[function(){
	return {
		restrict:'E',
		replace:true,
		
		scope:{
			obj:'='
		},
		templateUrl:'components/contact.html',
		controller:['$scope',function($scope){
			$scope.fun=function(){
				alert('location '+$scope.obj.location)
			}
		}]
	}
}]);



app.directive('myUser2',[function(){
	return {
		restrict:'A',
		scope:{
			obj:'='
		},
		template:'<p>Hello <span ng-click="showMsg()">{{obj.name}}</span> {{obj.msg}}</p><div></div>',
		controller:['$scope','gmapkey',function($scope,gmapkey){
			$scope.gmapkey=gmapkey;
			$scope.showMsg=function(){
				alert($scope.msg);
			}
		}]
	};	
}]);