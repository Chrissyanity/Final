var app = angular.module('myMod');

app.controller('libInput', function($scope, dbFactory, readingFactory, studentFactory, $location){

  var updatedStudent = studentFactory.returnStudent();


  //taking information from the form and when submit button is clicked it increments the book by one
  $scope.updateBooks = function(student) {
      console.log(student);
    readingFactory.exportTo(student);
    updatedStudent.booksread++;

    if (student.time == "30 minutes" || "One Hour" || "More than an hour") {
        updatedStudent.thirtymin = true;
    }
       if (student.time ==  "One Hour" || "More than an hour") {
        updatedStudent.thirtymin = true;
        updatedStudent.sixtymin = true;
    }

      if (student.place !== "At Home" || "At School" ) {
          updatedStudent.trip = true;
      }

      if (student.pagesread == "Somewhere between 50 - 100 pages") {
          updatedStudent.overfifty = true;
      }
       if (student.pagesread == "Somewhere between 100 - 200 pages") {
          updatedStudent.overfifty = true;
          updatedStudent.overonehundred = true;
      }
      if (student.pagesread == "200 or more pages") {
          updatedStudent.overfifty = true;
          updatedStudent.overonehundred = true;
          updatedStudent.overtwohundred = true;
      }

      $scope.myValue = false;
      $scope.showAlert = function () {
        $scope.myValue = true;
      };

    dbFactory.updateBooksRead(updatedStudent).then(function() {
      $scope.showAlert();
      $location.path('/formOutput');
    });

  };

});
