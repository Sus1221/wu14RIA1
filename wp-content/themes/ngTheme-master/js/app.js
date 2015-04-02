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
    .when("/pages/till-salu", {
      templateUrl: SITE_INFO.partials+"views/searchresult.html",
      controller: "propertyController"
    })
    //showing data from WP-page about company
    .when("/pages/om-sellforce", {
      templateUrl: SITE_INFO.partials+"views/about.html",
      controller: "homeController"
    })
    .when("/pages/:name", {
      templateUrl: SITE_INFO.partials+"views/page.html",
      controller: "pageController"
    })
    //showing table of all searchresults
    .when("/searchresult", {
      templateUrl: SITE_INFO.partials+"views/searchresult.html",
      controller: "propertyController"
    })
    //showing all data of one property
    .when("/singleprop/:name", {
      templateUrl: SITE_INFO.partials+"views/singleprop.html",
      controller: "propertyController"
    })
    .when("/contact",{
      templateUrl: SITE_INFO.partials+"views/modal.html",
    })
    //showing article by broker
    .when("/brokerwords.html", {
      templateUrl: SITE_INFO.partials+"views/brokerwords.html",
      controller: "pageController"
    })
    .otherwise({
      redirectTo: "/"
    });

  $locationProvider.html5Mode(true);
}])
.constant('SITE_INFO', myLocalized)
.constant('API_ROUTE', "wp-json");