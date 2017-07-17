(function () {
  'use strict';

  angular.module('BlurAdmin.pages')
      .controller('demoController', ctrl);

  /** @ngInject */
  function ctrl($scope) {
	  var data = [{name: "Moroni", age: 50} /*,*/];
	  $scope.tableParams = new NgTableParams({}, { dataset: data});
	  $scope.foo = "bar";
  }

})();

