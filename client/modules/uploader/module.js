var upload = angular.module('upload', [])

.controller('upload-ctrl', function($scope, uploadService) {
  uploadService.attachPlugin();
})

.directive('uploader', function() {
  return {
    restrict: 'E',
    templateUrl: './modules/uploader/template.html'
  };
});
