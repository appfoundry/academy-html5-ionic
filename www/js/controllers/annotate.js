angular.module('starter')
  .controller('annotationController', [
    '$scope',
    '$state',
    'Items',
    function ($scope, $state, Items) {

    this.submit = function () {
      if ($scope.currentItem.description !== "" && $scope.currentItem.title !== "") {
        Items.set($scope.currentItem);

        $scope.resetCurrentItem();

        $state.go('home');
      }
    }
  }]);