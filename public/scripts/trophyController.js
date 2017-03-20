var app = angular.module('myMod');

app.controller('trophyController', function ($scope, studentFactory) {
    $scope.individual = studentFactory.returnStudent();
    console.log($scope.individual);

    
    //array to hold trophy image objects
    $scope.trophies = [{
        sauce: '../img/trophyImages/oneSmallStepTrophy.png',
        alternate: 'one small step',
        trophyName: 'one small step',
        locked: false
        
    }, {
        sauce: '../img/trophyImages/tripleThreatTrophy.png',
        alternate: 'triple threat!',
        trophyName: 'triple threat!',
        locked: false
    }, {
        sauce: '../img/trophyImages/fabFiveTrophy.png',
        alternate: 'fab five!',
        trophyName: 'fab five!',
        locked: true
    }, {
        sauce: '../img/trophyImages/doubleDigitalTrophy.png',
        alternate: 'double digital!',
        trophyName: 'double digital!',
        locked: true
    }];
});
    