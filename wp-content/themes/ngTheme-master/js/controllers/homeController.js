//"ngTheme" home controller.
//dependent on $scope && WPService being injected to run

app.controller("homeController", ["$scope", "Pages", "$sce", "Property", function($scope, Pages, $sce, Property) {
  console.log("homeController alive!");
<<<<<<< HEAD
  

  
=======
>>>>>>> 49616ea37fee2e7927e1f4b981a24fa5de685882

  //get all pages
  Pages.get();

  // EXAMPLE LISTENER TO A $broadcast COMING FROM WPRest SERVICE!!!
  //listening for the "gotPageData" broadcast on $http success
  $scope.$on("gotPageData", function(event, data) {
    console.log("homeController on gotPageData: ", data);

    /* 
      angular protects us from "dangerous" HTML by converting it to a string

      if we want to show HTML from a string in DOM 
      we first need to tell angular that it can be trusted.
      
      this is done using the $sce service on the HTML string in JS
      and the ng-bind-html directive in the view
    */
    //$scope.trustedHtml = $sce.trustAsHtml(data[0].content);
  });
  
}]);