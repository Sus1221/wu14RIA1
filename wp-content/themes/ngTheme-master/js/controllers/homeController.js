//controller for homeview
app.controller("homeController", ["$scope", "Pages", "$sce", "PropFactory", "$location", "$routeParams", 
  function($scope, Pages, $sce, PropFactory, $location, $routeParams) {
  console.log("homeController alive!");

  //get all properties from PropFactory
  PropFactory.find();

  //get all pages from PageFactory
  Pages.get();

  //listening for the "gotPageData" broadcast on $http success in pageFactory
  $scope.$on("gotPageData", function(event, data) {
    console.log("homeController on gotPageData: ", data);
    //if no data is recieved
    if (data.length === 0) {
      //exit
      return;
    }
    //put data on $scope
    $scope.pages = data;
    console.log("pages", $scope.pages);
  });

  //when showOnePage is 
  $scope.showSinglePage = function(slug) {
    console.log("showSinglePage name inparameter", slug);
    //sets url-ending to a single page
    $location.url("/page/" + slug);
  };

  //when propFactory delivers broadcast
  var pageNo = 1;
  $scope.$on("foundProperty", function(event, data) {
    console.log("listening to propfactory broadcast in homeController");
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

  //Changes url, adds name of single property
  $scope.showSingleProp = function(name) {
    console.log("showSingleProp name inparameter", name);
    $location.url("/singleprop/" + name);
  };

}]);