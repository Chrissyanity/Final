var app = angular.module('myMod');

app.controller('dbCtrl', function($scope, $rootScope, dbFactory) {
    // Runs factory and gets all students from DB. Adds students to .students array. RootScope is acessible by all controllers
    dbFactory.getStudent().then(function() {
        $rootScope.students = dbFactory.update();
        console.log("$rootScope.students=" + $rootScope.students);
    });



});
