//"ngTheme" controller.
app.controller("headerController", ["$scope", "$location", "SITE_INFO", function($scope, $location, SITE_INFO) {
  console.log("headerController is alive!");
  $scope.partialDir = SITE_INFO.partials;

}]);