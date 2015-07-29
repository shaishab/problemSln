'use strict';

// Configuring the Articles module
angular.module('solutions').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Solutions', 'solutions', 'dropdown', '/solutions(/create)?');
		Menus.addSubMenuItem('topbar', 'solutions', 'List Solutions', 'solutions');
		Menus.addSubMenuItem('topbar', 'solutions', 'New Solutions', 'solutions/create');
	}
]);
