//app declaration and dependency injection
var app = angular.module("ngTheme", ["ngRoute", "ui.bootstrap"]);
//app config
app.config(["$routeProvider", "$locationProvider", "SITE_INFO", function($routeProvider, $locationProvider, SITE_INFO) {
  //route config
  $routeProvider
    .when("/", {
      templateUrl: SITE_INFO.partials+"views/home.html",
      controller: "homeController"
    })
    .when("/searchresult", {
      templateUrl: SITE_INFO.partials+"views/searchresult.html",
      controller: "propertyController"
    })
    .when("/singleprop/:name", {
      templateUrl: SITE_INFO.partials+"views/singleprop.html",
      controller: "propertyController"
    })
    .otherwise({
      redirectTo: "/"
    });

  $locationProvider.html5Mode(true);
}])
.constant('SITE_INFO', myLocalized)
.constant('API_ROUTE', "wp-json");