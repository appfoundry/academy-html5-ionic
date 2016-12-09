angular.module('starter')
  .factory('Imgr', [function () {
      var image = new Image();
      image.setAttribute('crossOrigin', 'anonymous');

      return {
        transformUrl(url, callback) {
            image.onload = function () {
                var canvas = document.createElement('canvas');
                canvas.width = this.naturalWidth; // or 'width' if you want a special/scaled size
                canvas.height = this.naturalHeight; // or 'height' if you want a special/scaled size

                 canvas.getContext('2d').drawImage(this, 0, 0);

                // Get raw image data
                callback(canvas.toDataURL('image/png').replace(/^data:image\/(png|jpg);base64,/, ''));

                // ... or get as Data URI
                callback(canvas.toDataURL('image/png'));
            };

            image.src = url;
        }
      }
  }]);