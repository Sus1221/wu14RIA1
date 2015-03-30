//"ngTheme" home controller.
//dependent on $scope && WPService being injected to run

app.controller("homeController", ["$scope", "Pages", "$sce", "PropFactory", function($scope, Pages, $sce, PropFactory) {
  console.log("homeController alive!");

  PropFactory.find();

  Pages.get();

  // EXAMPLE LISTENER TO A $broadcast COMING FROM WPRest SERVICE!!!
  //listening for the "gotPageData" broadcast on $http success
  $scope.$on("gotPageData", function(event, data) {
    console.log("homeController on gotPageData: ", data);
    if (data.lenght === 0) {
      return;
    }
    $scope.pages = data;
    console.log("pages", $scope.pages);
  });

    $scope.showSinglePage = function(pageId) {
      console.log("showSinglePage name inparameter", pageId);
      $location.url("/page/" + pageId);
  };
  
}]);


    /* 
      angular protects us from "dangerous" HTML by converting it to a string

      if we want to show HTML from a string in DOM 
      we first need to tell angular that it can be trusted.
      
      this is done using the $sce service on the HTML string in JS
      and the ng-bind-html directive in the view
    */
    //$scope.trustedHtml = $sce.trustAsHtml(data[0].content);