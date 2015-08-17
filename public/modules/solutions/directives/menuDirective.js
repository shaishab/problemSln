'use strict';

angular.module('solutions').directive('menuDirective', ['$timeout',
	function ($timeout) {
		return {
			restrict: 'AE',
			replace: true,
			templateUrl: 'modules/solutions/views/menuTemplate/menu.html',
			link: function (scope, element, attrs) {
				console.log(element);
				scope.menu =[1,2,3];
				element.empty();
				element.append("<ul id='nav'></ul>");
				//console.log(element);
				//element.append("<li class='has-sub'><a href='#'>  <span>name</span></a></li>");
				$timeout(function() {
					for (var i = 0;i<scope.menu.length;i++){
						element.append("<li class='has-sub'><a href='#'>  <span>name"+i+"</span></a></li>");
					}
				},100);



			}
		};
	}
]);


