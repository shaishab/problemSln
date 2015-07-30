'use strict';

// Articles controller
angular.module('solutions').controller('SolutionsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Solutions',
	function($scope, $stateParams, $location, Authentication, Solutions) {
		$scope.authentication = Authentication;

		$scope.dropdownList = function() {
			$scope.users =[
				{id: 11, name: 'shaishab'},
				{id: 12, name: 'roy'},
				{id: 13, name: 'palash'},
				{id: 14, name: 'biplab'}
			];
			$scope.usr ={};
			$scope.selectedUser = $scope.users[1];
		};


	}
]);
