var app = angular.module('myMod');

app.controller('updateCtrl', function($scope, $route, dbFactory, studentFactory, $location) {

    var updatedStudent = studentFactory.returnStudent();

    updatePages();

    //myValue determines whether or not madLib output displays. true = yes false=no
    $scope.myValue = false;
    $scope.showAlert = function() {
        console.log("show story");
        $scope.myValue = true;
    };

    $scope.hideAlert = function() {
        console.log("hide story");

        $scope.myValue = false;
    };

    //setting $scope.maxPages depending on selectedStudent values from database
    function updatePages() {
        if ($scope.selectedStudent.overfifty === true) {
            $scope.selectedStudent.maxPages = "Over 50 pages";
        }

        if ($scope.selectedStudent.overonehundred === true) {
            $scope.selectedStudent.maxPages = "Over 100 pages";
        }

        if ($scope.selectedStudent.overtwohundred === true) {
            $scope.selectedStudent.maxPages = "Over 200 pages";
        }

        if ($scope.selectedStudent.overfifty === false) {
            $scope.selectedStudent.maxPages = "None yet. Get Reading!";
        }
    }

    //taking information from the form and when submit button is clicked it increments the book by one
    $scope.updateBooks = function(student) {

        studentFactory.exportTo(student);
        updatedStudent.booksread++;

        //setting $scope.student to the input recieved from the "Log a new book" form
        $scope.student = studentFactory.importIn();




        //conditional logic to reset database values for updatedStudent

        if (student.time === "30 minutes" || "One Hour" || "More than an hour") {
            updatedStudent.thirtymin = true;
        }
        if (student.time === "One Hour" || "More than an hour" && student.time !== "30 minutes") {
            updatedStudent.sixtymin = true;
        }

        if (student.place !== "At Home" || "At School") {
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

        dbFactory.updateBooksRead(updatedStudent).then(function() {
            updatePages();
            $scope.showAlert();
            $location.path('/formOutput');
        });

    };

});
