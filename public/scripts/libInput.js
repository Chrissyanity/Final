var app = angular.module('myMod');

app.controller('libInput', function($scope, dbFactory, readingFactory, studentFactory, $location){

  var updatedStudent = studentFactory.returnStudent();


  //taking information from the form and when submit button is clicked it increments the book by one
  $scope.updateBooks = function(student) {
      console.log(student);
    readingFactory.exportTo(student);
    updatedStudent.booksread++;

    if (student.time === "30 minutes" || "One Hour" || "More than an hour") {
        updatedStudent.thirtymin = true;
        console.log("I ran for no reason");
    }
       if (student.time ===  "One Hour" || "More than an hour" && student.time !== "30 minutes") {
        updatedStudent.sixtymin = true;
           console.log(student.time);
           console.log("I also ran for no reason");
    }

      if (student.place !== "At Home" || "At School" ) {
          updatedStudent.trip = true;
          console.log("I'm a big dumb idiot");
      }

      if (student.pagesread === "Somewhere between 50 - 100 pages") {
          updatedStudent.overfifty = true;
          console.log("Jerk code in effect");
      }
       if (student.pagesread === "Somewhere between 100 - 200 pages") {
          updatedStudent.overfifty = true;
          updatedStudent.overonehundred = true;
           console.log("I'm running for some reason");
      }
      if (student.pagesread === "200 or more pages") {
          updatedStudent.overfifty = true;
          updatedStudent.overonehundred = true;
          updatedStudent.overtwohundred = true;
          console.log("I'm a crappy piece of code and I  just plain hate people");
      }

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
