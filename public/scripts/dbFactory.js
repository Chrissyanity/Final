var app = angular.module('myMod');

//putting everything into an array
app.factory('dbFactory', function($http) {
    var student = [];
    return {
        update: update,
        getStudent: getStudent,
        addStudent: addStudent,
        updateBooksRead: updateBooksRead
    };

    //spits out info from our database
    function update() {
        return student;
    };
    //retrieves data from our database
    function getStudent() {
        var promise = $http({
            method: 'GET',
            url: '/get-student'
        }).then(function success(response) {
<<<<<<< HEAD
<<<<<<< d5c194504fa9a8de20a675624710ab80c641714a
=======

>>>>>>> changed intro list
=======

>>>>>>> 0cd8bcca669bfba0ab568ddb66848ddf85a7f9c6
            student = response.data;
        });
        return promise;
    };

    //this function is for adding new students
    function addStudent(newStudent) {
<<<<<<< HEAD
<<<<<<< d5c194504fa9a8de20a675624710ab80c641714a

=======
        console.log('add student has been called');
        console.log(newStudent);
>>>>>>> changed intro list
        var newStudent = {
            studentname: newStudent,
            booksread: 0
        };
        var promise = $http({
            method: 'POST',
            url: '/add-student',
            data: newStudent
        }).then(function success(response) {
<<<<<<< d5c194504fa9a8de20a675624710ab80c641714a
=======

>>>>>>> changed intro list
            student = response.data;
        });
        return promise;
    };

    //this function updates the number of books by id
    function updateBooksRead(updatedStudent) {

=======
        console.log('add student has been called');
        console.log(newStudent);
        var newStudent = {
            studentname: newStudent,
            booksread: 0
        };
        var promise = $http({
            method: 'POST',
            url: '/add-student',
            data: newStudent
        }).then(function success(response) {

            student = response.data;
        });
        return promise;
    };

    //this function updates the number of books by id
    function updateBooksRead(updatedStudent) {

>>>>>>> 0cd8bcca669bfba0ab568ddb66848ddf85a7f9c6
        var promise = $http({
            method: 'PUT',
            url: '/update-books-read/' + updatedStudent.id,
            data: updatedStudent
        }).then(function success(response) {
<<<<<<< HEAD
<<<<<<< d5c194504fa9a8de20a675624710ab80c641714a
=======
            console.log("The student has been updated");
            console.log(updatedStudent);
>>>>>>> changed intro list
=======
            console.log("The student has been updated");
            console.log(updatedStudent);
>>>>>>> 0cd8bcca669bfba0ab568ddb66848ddf85a7f9c6
            student = response.data;
        });
        return promise;
    };


});
