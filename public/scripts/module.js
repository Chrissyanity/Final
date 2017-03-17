var app = angular.module('myMod', ['ngRoute', 'ngAnimate']);


app.directive("headerDirective", function() {
    return {
        restrict: "EAMC",
        replace: false,
        templateUrl: "views/header.html"
    }
});

app.directive("footerDirective", function() {
    return {
        restrict: "EAMC",
        replace: false,
        templateUrl: "views/footer.html"
    }
});

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/intro', {
        templateUrl: '../views/intro.html'
    })
      .when('/trophyroom', {
        controller: 'dbCtrl',
        templateUrl: '../views/trophyroom.html'
    })

    .when('/formOutput', {
      controller: 'libOutput',
      templateUrl: '../views/formOutput.html'
    })

    .otherwise({redirectTo: '/intro'});

    $locationProvider.hashPrefix('');

});
