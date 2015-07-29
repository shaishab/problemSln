'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('solutions').factory('Solutions', ['$resource',
	function($resource) {
		return $resource('solutions/:solutionId', {
			solutionId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
