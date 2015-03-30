//"ngTheme" controller.
app.controller("headerController", ["$scope", "$location", "SITE_INFO", "Menus", "PropFactory", function($scope, $location, SITE_INFO, Menus, PropFactory) {
  $scope.partialDir = SITE_INFO.partials;
  console.log("headerController is alive!");
  Menus.get(12);

  //path to go to is sent in and then executed in this function
  $scope.goTo = function(path) {
	$location.url(path);
  };

  $scope.search = function() {
  	//change location.url to include our searchword
  	//this makes the right controllerrun
    var locationUrl = "/searchresult";
    if ($scope.searchWord) {
      locationUrl += "?s=" + $scope.searchWord;
    }
  	$location.url(locationUrl);

  };

  //Property.find();
  console.log("headerController hej!");

}]);