app.controller("propertyController", ["$scope", "PropFactory" ,"$routeParams", "$location", function($scope, PropFactory, $routeParams, $location) {
  console.log("propertyController is alive! params: ", $routeParams);
  
  PropFactory.find($routeParams);
 
  //broadcast is coming from Property factory 
  $scope.$on("foundProperty", function(event, data) {
    console.log("propertyController on foundProperty: ", data);
    if (data.length === 0) {
      console.log("No data ");
      return;
    }
    $scope.properties = data;
  });

  $scope.showSingleProp = function(path) {
    console.log("showSingleProp path inparameter", path);
    $location.url("/singleprop/"+path);
  };
}]);