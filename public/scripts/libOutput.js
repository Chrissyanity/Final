var app = angular.module('myMod');

//this function is for the madlibs tracking page
app.controller('libOutput', function($scope, dbFactory, readingFactory, studentFactory) {
//setting $scope.student to the input recieved from the "Log a new book" form
 $scope.student = readingFactory.importIn();
//setting $scope.maxPages depending on selectedStudent values from database
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
