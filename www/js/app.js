// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

angular.module('af-notifier', ['ionic','LocalStorageModule'])

.config( function(localStorageServiceProvider){
  localStorageServiceProvider
    .setPrefix('af-notifier');
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('main', [
  '$scope', 
  '$ionicModal', 
  'localStorageService', 
  function($scope, $ionicModal, localStorageService){

  //initialise the notifiers scope with an empty array
  $scope.notifications = [];

  //initialise the task scope with an empty object
  $scope.notification = {}

  $ionicModal.fromTemplateUrl('new-notification-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then( function(modal){
    $scope.newNotification = modal;
  });

  $scope.openNotificationModal = function () {
    $scope.newNotification.show();
  };

  $scope.closeNotificationModal = function () {
    $scope.newNotification.hide();
  };

  $scope.getNotifications = function() {
    // fetches all notifications from local Storage
  }
  $scope.createNotification = function() {
    // creates a new notification
  }

  $scope.removeNotification = function() {
    // removes a notification
  }
}]);