//"ngTheme" controller.
app.controller("headerController", ["$scope", "$location", "SITE_INFO", "Property", function($scope, $location, SITE_INFO, Property) {
  console.log("headerController is alive!");
  $scope.partialDir = SITE_INFO.partials;


	$scope.hittePou = function (){
		console.log("hejhopp: ", $scope.searchWord);
	};
	
   //Property.find();
   console.log("headerController hej!");

}]);