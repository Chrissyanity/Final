var app = angular.module('myMod');

//does all the functionality for logging in and registering
app.controller('headerCtrl', function($scope, $rootScope, $window, studentFactory, $location) {
    var date = new Date();
    $scope.year = date.getFullYear();

    //pull focus to textbox
    $('#loginModal').on('shown.bs.modal', function() {
        $('#loginUserName').focus()
    });
    $('#registerModal').on('shown.bs.modal', function() {
        $('#registerUserName').focus()
    });

    $scope.student = {};
    //takes .student array and filters the array based on the name typed in
    $scope.getUser = function() {
        var index = $rootScope.students.map(function(x) {
            return x.studentname;
        }).indexOf($scope.student.studentname);
        $rootScope.selectedStudent = $rootScope.students[index];
        //error message displays if the name typed in doesnt exactly match a name in array
        if ($rootScope.selectedStudent === undefined) {
            alert("Check your spelling and try again");
        } else {
            studentFactory.sendStudent($rootScope.selectedStudent);
            //displays the message shown on login if login is correct
            if (!$scope.loginConfirmMessage) {
                $scope.loginConfirmMessage = !$scope.loginConfirmMessage;
            } else {};
            //switches visibility of login/registration/nav links
            if (!$scope.loginButton) {
                $scope.loginButton = !$scope.loginButton;
                $scope.registerButton = !$scope.registerButton;
                $scope.navLinks = !$scope.navLinks;
            } else {};
            //makes logout button option appear after user is logged in
            if (!$scope.logoutButton) {
                $scope.logoutButton = !$scope.logoutButton;
            } else {};
            //redirects to form page after log in is complete
            $location.path('/formOutput');
        }
    };
    //refreshes page after logout or registration
    $scope.logout = function() {
        $window.location.reload();
    }
});
