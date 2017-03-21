var app = angular.module('myMod');

app.controller('libInput', function($scope, $route, dbFactory, readingFactory, studentFactory, $location){

  var updatedStudent = studentFactory.returnStudent();


  //taking information from the form and when submit button is clicked it increments the book by one
  $scope.updateBooks = function(student) {

      console.log(student);
    readingFactory.exportTo(student);
    updatedStudent.booksread++;

    if (student.time === "30 minutes" || "One Hour" || "More than an hour") {
        updatedStudent.thirtymin = true;
        console.log("thirty min is now true");
    }
       if (student.time ===  "One Hour" || "More than an hour" && student.time !== "30 minutes") {
        updatedStudent.sixtymin = true;
           console.log(student.time);
           console.log("sixty min ran");
    }

      if (student.place !== "At Home" || "At School" ) {
          updatedStudent.trip = true;
          console.log("I took a trip");
      }

      if (student.pagesread === "Somewhere between 50 - 100 pages") {
          updatedStudent.overfifty = true;
          console.log("fifty plus ran");
      }
       if (student.pagesread === "Somewhere between 100 - 200 pages") {
          updatedStudent.overfifty = true;
          updatedStudent.overonehundred = true;
           console.log("one hundred plus ran");
      }
      if (student.pagesread === "200 or more pages") {
          updatedStudent.overfifty = true;
          updatedStudent.overonehundred = true;
          updatedStudent.overtwohundred = true;
          console.log("two hundred ran");
      }

      //clears the bookTitleField of modal on 'submit'
     var clearField = document.getElementById("bookTitleField");
      clearField.value = '';
      console.log("Book title field cleared!");


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
    $route.reload();
  };

});
