/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function(){
	'use strict';

	angular.module('BlurAdmin.pages.demo', [])
		.config(routeConfig);

	/** @ngInject */
	function routeConfig($stateProvider){
		$stateProvider
			.state('demo', {
				url: '/demo',
				templateUrl: 'app/pages/demo/demo.html',
				controllerAs: 'demoController',
				title: 'demo',
				sidebarMeta: {
					icon: 'ion-android-home',
					order: 0,
				},
			});
	}

})();
