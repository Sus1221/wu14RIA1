app.controller("searchController", ["$scope", "PropFactory" ,"$routeParams", "$location", function($scope, PropFactory, $routeParams, $location) {
  
  $scope.items = ['Villa','Lägenhet','Gård','Tomt']

/*
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
    console.log("$scope.properties: ", $scope.properties);
  });

  $scope.showSingleProp = function(name) {
    console.log("showSingleProp name inparameter", name);
    $location.url("/singleprop/" + name);
  };*/
}]);