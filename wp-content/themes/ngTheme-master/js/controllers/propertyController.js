//controller for posts of category "fastigheter" = properties
app.controller("propertyController", ["$scope", "PropFactory" ,"$routeParams", "$location", function($scope, PropFactory, $routeParams, $location) {
  console.log("propertyController is alive! params: ", $routeParams);

  //Array values for selectbox in filterbox
  $scope.propTypes = ['Villa','Lägenhet','Gård','Tomt'];
  //template filter obj. to fill search parameters with
   $scope.propFilters = {
        priceRange: [],
        type: {
          "lägenhet": true,
          "hus": true,
          "gård": true,
          "tomt": true
        }
      };

  //set initial pageNumber to 1, (pagenumber here meaning page from WP-DB delivering 10 items at a time)
  var pageNo = 1;
  //get pages according to current url
  PropFactory.find($routeParams, pageNo);
 
  //listens to broadcast from PropFactory
  $scope.$on("foundProperty", function(event, data) {
    console.log("propertyController on foundProperty: ", data);
    //if no data is recieved
    if (data.length === 0) {
      console.log("No data");
      //exit
      return;
    }
    //put recieved data on $scope
    $scope.properties = data;
    console.log("$scope.properties: ", $scope.properties);

    pageNo++; //get next page of results
    PropFactory.find($routeParams, pageNo);
  });

  //Changes url, adds name of one property
  $scope.showSingleProp = function(name) {
    console.log("showSingleProp name inparameter", name);
    $location.url("/singleprop/" + name);
  };

  //when filterReset is requested
  $scope.resetFilter = function() {
    //empty template filter obj.
    $scope.propFilters = {
      priceRange: [],
      type: {
        "lägenhet": true,
        "hus": true,
        "gård": true,
        "tomt": true
      }
    };
    //and empty another value on scope
    $scope.citySearch.facts.city = "";
  };

}]);