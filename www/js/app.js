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
.constant("NOTIFICATION",{
    SCHEMA: {
      id: Date.now(),
      timing: 1,
      title: "",
      content: ""
    },
    KEY: "notification"
})
.controller('main', [
  '$scope', 
  '$ionicModal', 
  'localStorageService',
  'NOTIFICATION',
  function($scope, $ionicModal, localStorageService, NOTIFICATION){
    var _self = this;    

    //initialise the notifiers scope with an empty array
    $scope.notifications = [];

    //initialise the task scope with an empty object / copy not equal ;)
    $scope.notification = angular.extend({}, NOTIFICATION.SCHEMA);

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
      if (localStorageService.get(NOTIFICATION.KEY)) {
        $scope.notifications = localStorageService.get(NOTIFICATION.KEY);
      } else {
        $scope.notifications = [];
      }
    }

    $scope.createNotification = function() {
      // creates a new notification

      // ID needs altering before saving
      $scope.notification.id = Date.now();
      $scope.notifications.push($scope.notification);

      localStorageService.set(NOTIFICATION.KEY, $scope.notifications);
      $scope.notification = angular.extend({}, NOTIFICATION.SCHEMA);

      //close new task modal
      $scope.closeNotificationModal();
    }

    $scope.removeNotification = function(index) {
      // removes a notification
      $scope.notifications.splice(index, 1);
      localStorageService.set(_self.notificationsKey, $scope.notifications);
    }

}]);