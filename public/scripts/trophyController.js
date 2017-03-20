var app = angular.module('myMod');

app.controller('trophyController', function ($scope, studentFactory) {
    $scope.individual = studentFactory.returnStudent();

    //array to hold trophy image objects
    $scope.trophies = [{
        source: '../img/trophyImages/oneSmallStepTrophy.png',
        alternate: 'one small step',
        trophyName: 'one small step',
        locked: true,
        progress: true,
        barValue: Math.floor(($scope.individual.booksread/1)*100)

    }, {
        source: '../img/trophyImages/trophy.png',
        alternate: 'read more than 50 pages',
        trophyName: 'read more than 50 pages',
        locked: true,
        progress: false,
        barValue: 0
    }, {
        source: '../img/trophyImages/tripleThreatTrophy.png',
        alternate: 'triple threat!',
        trophyName: 'triple threat!',
        locked: true,
        progress: true,
        barValue: Math.floor(($scope.individual.booksread/3)*100)
    },
    {
        source: '../img/trophyImages/fabFiveTrophy.png',
        alternate: 'fab five!',
        trophyName: 'fab five!',
        locked: true,
        progress: true,
        barValue: Math.floor(($scope.individual.booksread/5)*100)
    }, {
        source: '../img/trophyImages/doubleDigitalTrophy.png',
        alternate: 'double digital!',
        trophyName: 'double digital!',
        locked: true,
        progress: true,
        barValue: Math.floor(($scope.individual.booksread/10)*100)
    }, {
        source: '../img/trophyImages/trophy.png',
        alternate: 'read for longer than 30 minutes',
        trophyName: 'read for longer than 30 minutes',
        locked: true,
        progress: false,
        barValue: 0

    }, {
        source: '../img/trophyImages/walkingLibraryTrophy.png',
        alternate: 'walking library!',
        trophyName: 'walking library!',
        locked: true,
        progress: true,
        barValue: Math.floor(($scope.individual.booksread/20)*100)
    }, {
        source: '../img/trophyImages/25Trophy.png',
        alternate: 'crucial quarter!',
        trophyName: 'crucial quarter!',
        locked: true,
        progress: true,
        barValue: Math.floor(($scope.individual.booksread/25)*100)
    }, {
        source: '../img/trophyImages/trophy.png',
        alternate: 'over 100 pages!',
        trophyName: 'over 100 pages!',
        locked: true,
        progress: false,
        barValue: 0
    }, {
        source: '../img/trophyImages/trophy.png',
        alternate: 'over 30 minutes!',
        trophyName: 'over 30 minutes!',
        locked: true,
        progress: false,
        barValue: 0
    }, {
        source: '../img/trophyImages/trophy.png',
        alternate: 'more than 5 trophies!',
        trophyName: 'more than 5 trophies!',
        locked: true,
        progress: false,
        barValue: 0
    }, {
        source: '../img/trophyImages/trophy.png',
        alternate: 'over 60 minutes!',
        trophyName: 'over 60 minutes!',
        locked: true,
        progress: false,
        barValue: 0
    }, {
        source: '../img/trophyImages/trophy.png',
        alternate: 'nifty fifty!',
        trophyName: 'nifty fifty!',
        locked: true,
        progress: true,
        barValue: Math.floor(($scope.individual.booksread/50)*100)
    },  {
        source: '../img/trophyImages/trophy.png',
        alternate: 'over 100 pages!',
        trophyName: 'over 100 pages!',
        locked: true,
        progress: false,
        barValue: 0
    }, {
        source: '../img/trophyImages/trophy.png',
        alternate: 'took a book on a trip!',
        trophyName: 'took a book on a trip!',
        locked: true,
        progress: false,
        barValue: 0
    },  {
        source: '../img/trophyImages/100Trophy.png',
        alternate: 'read 100 books!',
        trophyName: 'read 100 books!',
        locked: true,
        progress: true,
        barValue: Math.floor(($scope.individual.booksread/100)*100)
    }
];

    if ($scope.individual.booksread >= 1) {
    $scope.trophies[0].locked = false;
}
    if ($scope.individual.booksread >= 3) {
    $scope.trophies[2].locked = false;
}
     if ($scope.individual.booksread >= 5) {
    $scope.trophies[3].locked = false;
}
   if ($scope.individual.booksread >= 10) {
    $scope.trophies[4].locked = false;
}
     if ($scope.individual.booksread >= 25) {
    $scope.trophies[7].locked = false;
}
    if ($scope.individual.booksread >= 50) {
    $scope.trophies[12].locked = false;
}
    if ($scope.individual.booksread >= 100) {
    $scope.trophies[15].locked = false;
}



//     $scope.backTrophies = [{
//        source: '../img/Trophies/1.png',
//        alternate: 'one small step',
//        trophyName: 'one small step'
//
//    },
//];
});
