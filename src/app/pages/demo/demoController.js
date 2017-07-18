(function () {
  'use strict';

  angular.module('BlurAdmin.pages')
      .controller('demoController', ctrl);

  /** @ngInject */
  function ctrl($scope, NgTableParams) {
      var self = this;
      var simpleList = [{name: "Emre", age: 21, money: 6465},{name: "Mehmet", age: 21, money: 6465},{name: "dsgf", age: 25, money: 78}, {name: "tyut", age: 21, money: 65}];
      var originalData = angular.copy(simpleList);

      $scope.cinsiyetler=["Bay","Bayan"];



      $scope.tableParams = new NgTableParams({}, {
          dataset: angular.copy(simpleList)
      });

      $scope.del = del;
      $scope.ekle=ekle;
      //////////

      function del(row) {
          var table = $scope.tableParams.settings().dataset;
          console.log(table);
          console.log(row);

          var i = table.indexOf(row);
          table.splice(i,1);
          $scope.tableParams.reload();
      }


    function ekle() {
        var table = $scope.tableParams.settings().dataset;
        var a = {
            yeni: true
        }
        table.unshift(a);
        $scope.tableParams.reload();

    }
  }

})();

