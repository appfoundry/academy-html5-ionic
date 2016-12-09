angular.module('starter')
    .controller('detailController', ['$scope','$stateParams','Items', function($scope,$stateParams,Items){
        $scope.item = Items.get($stateParams.itemId);
    }]);