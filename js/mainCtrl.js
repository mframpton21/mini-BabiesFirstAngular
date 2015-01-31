var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope) {
	$scope.friends = ['Tyler', 'Michael', 'Bryan', 'Robert', 'Justin', 'Allan'];
	// $scope.friends = [
	// 	{
	// 		"name": "Tyler"
	// 	},
	// 	{
	// 		"name": "Michael"
	// 	} ,
	// 	{
	// 		"name": "Bryan"
	// 	},
	// 	{
	// 		"name": "Robert"
	// 	},
	// 	{
	// 		"name": "Justin"
	// 	},
	// 	{
	// 		"name": "Allan"
	// 	}
	// ];
});
