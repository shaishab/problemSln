'use strict';

// Setting up route
angular.module('articles').config(['$stateProvider',
	function($stateProvider) {
		// Articles state routing
		$stateProvider.
		state('listSolutions', {
			url: '/solutions',
			templateUrl: 'modules/solutions/views/list-solutions.client.view.html'
		}).
		state('createSolutions', {
			url: '/solutions/create',
			templateUrl: 'modules/articles/views/create-solution.client.view.html'
		}).
		state('viewSolutions', {
			url: '/solutions/:articleId',
			templateUrl: 'modules/solutions/views/view-solution.client.view.html'
		}).
		state('editSolutions', {
			url: '/solutions/:articleId/edit',
			templateUrl: 'modules/solutions/views/edit-solution.client.view.html'
		});
	}
]);
