app.controller("propertyController", ["$scope", "PropFactory" ,"$routeParams", function($scope, PropFactory, $routeParams) {
  console.log("propertyController is alive! params: ", $routeParams);
 
  PropFactory.find($routeParams);
 
  //broadcast is coming from Property factory 
  $scope.$on("foundProperty", function(event, data) {
    console.log("propertyController on foundProperty: ", data);
    if (data.length === 0) {
      console.log("No data ");
      return;
    }
    $scope.property = data;
  });
}]);