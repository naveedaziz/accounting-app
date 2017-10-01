var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
   $routeProvider
      .when("/", {
         templateUrl: "partials/home.html"
      })
      .when("/red", {
         templateUrl: "red.htm"
      })
      .when("/green", {
         templateUrl: "green.htm"
      })
      .when("/blue", {
         templateUrl: "blue.htm"
      });
});