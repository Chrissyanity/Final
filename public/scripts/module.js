var app = angular.module('myMod', ['ngRoute', 'ngAnimate']);



//directives for header and footer, templateUrl indicates which partial to display
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
//app.config runs routing for index page, sets  ng-view based on page
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/intro', {
        templateUrl: '../views/intro.html'
    })
      .when('/trophyroom', {
        controller: 'trophyController',
        templateUrl: '../views/trophyroom.html'
    })

    .when('/formOutput', {
      controller: 'updateCtrl',
      templateUrl: '../views/formOutput.html'
    })
//redirects to intro
    .otherwise({redirectTo: '/intro'});
//makes links work with hash codes in the server. required for routing. 
    $locationProvider.hashPrefix('');

});
