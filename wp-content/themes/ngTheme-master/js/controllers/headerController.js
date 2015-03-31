//controller for header
app.controller("headerController", ["$scope", "$location", "SITE_INFO", "Menus", "PropFactory", function($scope, $location, SITE_INFO, Menus, PropFactory) {
  // $scope.partialDir = SITE_INFO.partials;
  console.log("headerController is alive!");

  //get menuItems from menufactory.js

  Menus.get(12);
  $scope.$on("gotMenuLinks", function(event, data){
  	$scope.menuLinks = data.items;

  })
  //path to go to is sent in and then executed in this function
  $scope.goTo = function(path) {
    $location.url(path);
  };

  $scope.search = function() {
    //change location.url to include our searchword; this makes the right controllerrun
    var locationUrl = "/searchresult";
    //if a searchWord is found in input field
    if ($scope.searchWord) {
      //add it as a search parameter to locationUrl
      locationUrl += "?s=" + $scope.searchWord;
    }
    //set url-ending e.g. go to it
    $location.url(locationUrl);

  };

  //Property.find();
  console.log("headerController hej!");

}]);