var app = angular.module('myMod');

app.controller('headerCtrl', function($scope, $rootScope, studentFactory, $location){
  var date = new Date();
  $scope.year = date.getFullYear();

  $scope.student = {};
  $scope.getUser = function() {
      console.log($scope.student);
      var index = $rootScope.students.map(function(x) {
          return x.studentname;
      }).indexOf($scope.student.studentname);
      $rootScope.selectedStudent = $rootScope.students[index];

      if ($rootScope.selectedStudent === undefined){
        alert("Check your spelling and try again");
      }else{
        studentFactory.sendStudent($rootScope.selectedStudent);
        //displays the message shown on login
        if (!$scope.loginConfirmMessage) {
            $scope.loginConfirmMessage = !$scope.loginConfirmMessage;
        } else {
        };
        if (!$scope.loginButton) {
            $scope.loginButton = !$scope.loginButton;
            $scope.registerButton = !$scope.registerButton;
        } else {
        };
        $location.path('/formOutput');
      }
  };
});
