//"ngTheme" controller.
app.controller("headerController", ["$scope", "$location", "SITE_INFO", "PropFactory", function($scope, $location, SITE_INFO, PropFactory) {
  console.log("headerController is alive!");
  $scope.partialDir = SITE_INFO.partials;

  //hugos exempel på fortsatt utveckling av vad som händer när man klickar på meny-item
  $scope.goTo = function(path) {
	$location.url(path);
  };

  $scope.search = function() {
	//change location.url to include our searchword
	//this makes the right controller run
	$location.url("/searchresult?s=" + $scope.searchWord);

  };


  //Property.find();
  console.log("headerController hej!");

}]);