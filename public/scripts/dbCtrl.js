var app = angular.module('myMod');

app.controller('dbCtrl', function($scope, $rootScope, dbFactory) {
    // Gets all the rows from DB
    dbFactory.getStudent().then(function() {
        $rootScope.students = dbFactory.update();
        console.log("$rootScope.students=" + $rootScope.students);
    });
    
    
    
});





