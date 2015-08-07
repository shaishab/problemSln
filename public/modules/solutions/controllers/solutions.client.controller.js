'use strict';

// Articles controller
angular.module('solutions').controller('SolutionsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Solutions',
	function($scope, $stateParams, $location, Authentication, Solutions) {
		$scope.authentication = Authentication;

		$scope.dropdownList = function() {
			$scope.selectedDist={};
			$scope.users =[
				{id: 11, name: 'shaishab'},
				{id: 12, name: 'roy'},
				{id: 13, name: 'palash'},
				{id: 14, name: 'biplab'}
			];
			$scope.usr ={};
			$scope.selectedUser = $scope.users[1];

			$scope.districts = [
				{id: 1, name: 'Dhaka'},
				{id: 2, name: 'Goplaganj'},
				{id: 3, name: 'Faridpur'}
			];

			$scope.thanas = [
				{id: 1, name: 'Mirpur', dId: 1},
				{id: 2, name: 'Uttra', dId: 1},
				{id: 3, name: 'Shahabag', dId: 1},
				{id: 4, name: 'Kotalipara', dId: 2},
				{id: 5, name: 'Kashiani', dId: 2},
				{id: 6, name: 'Moksedpur', dId: 2},
				{id: 7, name: 'Vanga', dId: 3},
				{id: 8, name: 'faridpur', dId: 3}
			];
			$scope.filterExpression = function(thana) {
				return (thana.dId === $scope.selectedDist.id );
			};
			$scope.vm ={};
			$scope.newQuestion ={};
			$scope.vm.questionsPositions = [12,14];
			$scope.newQuestion.positionOnSurvey = $scope.vm.questionsPositions[0];
		};
	}
]);



