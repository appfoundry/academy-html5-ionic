angular.module('starter')
  .factory('Items', ['localStorageService', function (localStorageService) {
    return {
      set: function (object) {

        var guid = function () {
          function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1);
          }
          return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
        }

        var guid = guid();
        return localStorageService.set(guid, object);
      },
      get: function (key) {
        return localStorageService.get(key);
      },
      remove: function (key) {
        return localStorageService.remove(key);
      },
      clear: function () {
        return localStorageService.clearAll();
      },
      fetch: function (key) {
        var
          keys = localStorageService.keys(),
          keyMapper = function (key) {
            var item = localStorageService.get(key);
            item.guid = key;
            return item;
          };
        return keys.map(keyMapper);
      }
    }
  }]);
 