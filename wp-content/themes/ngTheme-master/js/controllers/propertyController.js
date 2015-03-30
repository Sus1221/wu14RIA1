app.controller("propertyController", ["$scope", "PropFactory" ,"$routeParams", "$location", function($scope, PropFactory, $routeParams, $location) {
  console.log("propertyController is alive! params: ", $routeParams);

  //Array values for selectbox
  $scope.items = ['Villa','Lägenhet','Gård','Tomt']

  //var pageNo = 1;
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

    //pageNo++; //get next page of results
    //PropFactory.find($routeParams, pageNo);
  });

  $scope.showSingleProp = function(name) {
    console.log("showSingleProp name inparameter", name);
    $location.url("/singleprop/" + name);
  };
}]);