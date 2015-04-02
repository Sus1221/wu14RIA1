//controller for footer
app.controller("pageController", ["$scope", "SITE_INFO", "Pages", "$routeParams",
	function($scope, SITE_INFO, Pages, $routeParams) {
  console.log("pageController is alive!");
  console.log("routeP", $routeParams);
  //get all pages from PageFactory

  Pages.findBySlug($routeParams.name);

  //listening for the "gotPageData" broadcast on $http success in pageFactory
  $scope.$on("gotPageData", function(event, data) {
    console.log("homeController on gotPageData: ", data);
    //if no data is recieved
    if (data.length === 0) {
      //exit
      return;
    }
    //put data on $scope
    $scope.page = data;
    console.log("pages", $scope.page);
  });
}]);
