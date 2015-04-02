//controller for header
app.controller("headerController", ["$scope", "$location", "SITE_INFO", "Menus", "PropFactory", function($scope, $location, SITE_INFO, Menus, PropFactory) {
  $scope.partialDir = SITE_INFO.partials;
  console.log("headerController is alive!");

  $scope.isCollapsed = true;

  //Rolls in and out menu when button is closed
  $scope.collapseNav = function() {
    $scope.isCollapsed = !$scope.isCollapsed;
  };

  //get menuItems from menufactory.js
  Menus.get(12);

  //when right broadcast is done
  $scope.$on("gotMenuLinks", function(event, data){
    //put data on $scope
    $scope.menuLinks = data.items;
  });

  //path to go to is sent in and then executed in this function
  $scope.goTo = function(path) {
    $location.url(path);
  };

  //when freesearch-field is used
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

  console.log("headerController hej!");

}]);