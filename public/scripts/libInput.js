var app = angular.module('myMod');

app.controller('libInput', function($scope, $route, dbFactory, studentFactory, $location){

 var updatedStudent = studentFactory.returnStudent();

 //taking information from the form and when submit button is clicked it increments the book by one
 $scope.updateBooks = function(student) {

   studentFactory.exportTo(student);
   updatedStudent.booksread++;

   if (student.time === "30 minutes" || "One Hour" || "More than an hour") {
       updatedStudent.thirtymin = true;
   }
      if (student.time ===  "One Hour" || "More than an hour" && student.time !== "30 minutes") {
       updatedStudent.sixtymin = true;
   }

     if (student.place !== "At Home" || "At School" ) {
         updatedStudent.trip = true;
     }

     if (student.pagesread === "Somewhere between 50 - 100 pages") {
         updatedStudent.overfifty = true;
     }
      if (student.pagesread === "Somewhere between 100 - 200 pages") {
         updatedStudent.overfifty = true;
         updatedStudent.overonehundred = true;
     }
     if (student.pagesread === "200 or more pages") {
         updatedStudent.overfifty = true;
         updatedStudent.overonehundred = true;
         updatedStudent.overtwohundred = true;
     }

     //clears the bookTitleField of modal on 'submit'
    var clearField = document.getElementById("bookTitleField");
     clearField.value = '';


//myValue determines whether or not madLib output displays. true = yes false=no
     $scope.myValue = false;
     $scope.showAlert = function () {
       $scope.myValue = true;
     };

     $scope.hideAlert = function () {
       $scope.myValue = false;
     };

   dbFactory.updateBooksRead(updatedStudent).then(function() {
     $scope.showAlert();
     $location.path('/formOutput');
   });

 };

});
