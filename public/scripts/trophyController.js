var app = angular.module('myMod');

app.controller('trophyController', function ($scope, studentFactory) {
    $scope.individual = studentFactory.returnStudent();
    console.log($scope.individual);

    //array to hold trophy image objects
    $scope.trophies = [{
        source: '../img/trophyImages/oneSmallStepTrophy.png',
        alternate: 'one small step',
        trophyName: 'one small step',
        locked: false

    }, {
        source: '../img/trophyImages/trophy.png',
        alternate: 'read more than 50 pages',
        trophyName: 'read more than 50 pages',
        locked: false
    },
       {
        source: '../img/trophyImages/tripleThreatTrophy.png',
        alternate: 'triple threat!',
        trophyName: 'triple threat!',
        locked: false
    },

                       {
        source: '../img/trophyImages/fabFiveTrophy.png',
        alternate: 'fab five!',
        trophyName: 'fab five!',
        locked: false
    }, {
        source: '../img/trophyImages/doubleDigitalTrophy.png',
        alternate: 'double digital!',
        trophyName: 'double digital!',
        locked: false
    }, {
        source: '../img/trophyImages/trophy.png',
        alternate: 'read for longer than 30 minutes',
        trophyName: 'read for longer than 30 minutes',
        locked: false

    }, {
        source: '../img/trophyImages/walkingLibraryTrophy.png',
        alternate: 'walking library!',
        trophyName: 'walking library!',
        locked: false
    }, {
        source: '../img/trophyImages/25Trophy.png',
        alternate: 'crucial quarter!',
        trophyName: 'crucial quarter!',
        locked: false
    },
        {
        source: '../img/trophyImages/trophy.png',
        alternate: 'over 100 pages!',
        trophyName: 'over 100 pages!',
        locked: false
    },
            {
        source: '../img/trophyImages/trophy.png',
        alternate: 'over 30 minutes!',
        trophyName: 'over 30 minutes!',
        locked: false
    },

        {
        source: '../img/trophyImages/trophy.png',
        alternate: 'more than 5 trophies!',
        trophyName: 'more than 5 trophies!',
        locked: false
    },
            {
        source: '../img/trophyImages/trophy.png',
        alternate: 'over 60 minutes!',
        trophyName: 'over 60 minutes!',
        locked: false
    },

        {
        source: '../img/trophyImages/trophy.png',
        alternate: 'nifty fifty!',
        trophyName: 'nifty fifty!',
        locked: false
    },  {
        source: '../img/trophyImages/trophy.png',
        alternate: 'over 100 pages!',
        trophyName: 'over 100 pages!',
        locked: false
    },  {
        source: '../img/trophyImages/trophy.png',
        alternate: 'took a book on a trip!',
        trophyName: 'took a book on a trip!',
        locked: false
    },
        {
        source: '../img/trophyImages/100Trophy.png',
        alternate: 'read 100 books!',
        trophyName: 'read 100 books!',
        locked: false
    },

];
});
