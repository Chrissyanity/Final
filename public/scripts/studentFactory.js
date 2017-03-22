var app = angular.module('myMod');
//getting currently logged in student from headerCtrl, storing that student in an object called studentInfo, in order to pass that object into output controller (libOutput)
app.factory('studentFactory', function(){

  var studentInfo = {};

  return {
    sendStudent: sendStudent,
    returnStudent: returnStudent
  }


  //passing data between two controllers
  function sendStudent(selectedStudent){

    studentInfo = selectedStudent;
  }

  function returnStudent() {
    return studentInfo;
  }

});
