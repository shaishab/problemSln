'use strict';

// Setting up route
angular.module('articles').config(['$stateProvider',
	function($stateProvider) {
		// Articles state routing
		$stateProvider.
		state('listSolutions', {
			url: '/solutions',
			templateUrl: 'modules/solutions/views/index-solutions.client.view.html'
		}).
		state('showDropdownList', {
			url: '/solutions/dropdownList',
			templateUrl: 'modules/solutions/views/dropdown-list.html'
		}).
		state('showMenuPage', {
			url: '/solutions/menu',
			templateUrl: 'modules/solutions/views/menu-page.html'
		});
	}
]);
