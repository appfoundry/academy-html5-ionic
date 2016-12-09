angular.module('starter')
  .controller('mainController', [
      '$scope',
      '$state',
      '$cordovaCamera',
      '$cordovaSocialSharing',
      'Items',
      'Imgr',
      function ($scope, $state, $cordovaCamera,$cordovaSocialSharing, Items, Imgr) {
        $scope.items = Items.fetch();
        $scope.currentItem = {}
        
        $scope.shouldShowDelete = false;
        $scope.listCanSwipe = true;

        if( window.cordova ) {
          var options = {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: false,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 420,
            targetHeight: 420,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false,
            correctOrientation: false
          };

          this.camera = function(){
            $cordovaCamera.getPicture(options).then(function (imageData) {
              $scope.currentItem.image = 'data:image/jpeg;base64,' + imageData;
              $state.go('annotate');
            }, function (err) {
              console.log(err);
            });
          };

          this.share = function(item){
            $cordovaSocialSharing
              .share(item.description, "On my wishing list" , item.image, null) // Share via native share sheet
                .then(function(result) {
                  alert(result);
                }, function(err) {
                  // An error occured. Show a message to the user
                });
          };
        }
        else 
        {
          this.camera = function(){
            var randomImage =  Math.floor(Math.random() * 4) + 1;
            // Usage
            Imgr.transformUrl('img/' + randomImage + '.jpg', function(dataUri) {
                $scope.currentItem.image = dataUri;
            });
            
            $state.go('annotate');
          };

          this.share = function(item){
            alert('share!');
          };

        }

        this.removeItem = function( item ){
          Items.remove(item.guid);
        }

        $scope.resetCurrentItem = function(){
          $scope.currentItem = {
            description: '',
            title: '',
            image: ''
          };
        }

       

        $scope.$on('LocalStorageModule.notification.setitem', function () {
          $scope.items = Items.fetch();
        });

        $scope.$on('LocalStorageModule.notification.removeitem', function () {      
          $scope.items = Items.fetch();
        });
      


      
      }])