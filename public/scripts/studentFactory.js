var app = angular.module('myMod');
//getting currently logged in student from headerCtrl, storing that student in an object called studentInfo, in order to pass that object into output controller (updateCtrl)
app.factory('studentFactory', function () {
    var studentInfo = {};
   //storing information "data" from new book form from object called bookInfo, to be accessed by dbFactory
    var bookInfo = {};
    return {
        sendStudent: sendStudent,
        returnStudent: returnStudent,
        exportTo: function (data) {
            bookInfo = data;
        },
        importIn: function () {
            return bookInfo;
        }
    }
    //passing data between two controllers
    function sendStudent(selectedStudent) {
        studentInfo = selectedStudent;
    }
    function returnStudent() {
        return studentInfo;
    };

});
