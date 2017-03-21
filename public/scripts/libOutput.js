var app = angular.module('myMod');

//this function is for the madlibs tracking page
app.controller('libOutput', function($scope, dbFactory, readingFactory, studentFactory) {
  $scope.student = readingFactory.importIn();

  console.log($scope.selectedStudent);

  if ($scope.selectedStudent.overfifty === true){
    $scope.maxPages = "Over 50 pages";
  }

  if($scope.selectedStudent.overonehundred === true){
    $scope.maxPages = "Over 100 pages";
  }

  if($scope.selectedStudent.overtwohundred === true){
    $scope.maxPages = "Over 200 pages";
  }

  if($scope.selectedStudent.overfifty === false){
    $scope.maxPages = "None yet. Get Reading!";
  }

});
