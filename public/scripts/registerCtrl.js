var app = angular.module('myMod');


//running the addStudent post request, and passing in the name that was provided in the register field
app.controller('registerCtrl', function($scope, $window, $animate, dbFactory) {

  $scope.register = function(){
    dbFactory.addStudent($scope.newStudent.studentname).then(function(){
//onclick of "click me" button, refreshes page
      $window.location.reload();
    });
  };
});
