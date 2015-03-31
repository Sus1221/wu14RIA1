//controller for homeview
app.controller("homeController", ["$scope", "Pages", "$sce", "PropFactory", function($scope, Pages, $sce, PropFactory) {
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

  $scope.showSinglePage = function(slug) {
    console.log("showSinglePage name inparameter", slug);
    //sets url-ending to a single page
    $location.url("/page/" + slug);
  };

  //when propFactory delivers broadcast
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

    //pageNo++; //get next page of results
    //PropFactory.find($routeParams, pageNo);
  });

  
}]);


    /* 
      angular protects us from "dangerous" HTML by converting it to a string

      if we want to show HTML from a string in DOM 
      we first need to tell angular that it can be trusted.
      
      this is done using the $sce service on the HTML string in JS
      and the ng-bind-html directive in the view
    */
    //$scope.trustedHtml = $sce.trustAsHtml(data[0].content);