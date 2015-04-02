//controller for footer
app.controller("footerController", ["$scope","$modal", "SITE_INFO",
	function($scope, $modal, SITE_INFO) {
  console.log("footerController is alive!");

  //showing modal
  $scope.modalShow = function(){
  	console.log("showing");

  	var modalInstance = $modal.open({
  		templateUrl : SITE_INFO.partials + "views/modal.html",
  		controller: "contactController",
  		backdrop: true
  	});
  }
}]);
