//"ngTheme" controller.
<<<<<<< HEAD
app.controller("headerController", ["$scope", "$location", "SITE_INFO","PropFactory", function($scope, $location, SITE_INFO, PropFactory) {
  console.log("headerController is alive!");
  $scope.partialDir = SITE_INFO.partials;
  PropFactory.find();
=======
app.controller("headerController", ["$scope", "$location", "SITE_INFO", "Property", function($scope, $location, SITE_INFO, Property) {
  console.log("headerController is alive!");
  $scope.partialDir = SITE_INFO.partials;


	$scope.hittePou = function (){
		console.log("hejhopp: ", $scope.searchWord);
	};
	
   //Property.find();
   console.log("headerController hej!");

>>>>>>> 49616ea37fee2e7927e1f4b981a24fa5de685882
}]);