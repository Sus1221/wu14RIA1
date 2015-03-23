//"ngTheme" controller.
app.controller("headerController", ["$scope", "$location", "SITE_INFO", "PropFactory", function($scope, $location, SITE_INFO, PropFactory) {
  console.log("headerController is alive!");
  $scope.partialDir = SITE_INFO.partials;


  $scope.search = function() {

	Property.find({s: $scope.searchWord});
  };

   //Property.find();
   console.log("headerController hej!");

}]);