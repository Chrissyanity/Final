var app = angular.module('myMod');
//takes information in from studentFactory and stores it as "individual"
app.controller('trophyController', function ($scope, studentFactory) {
    $scope.individual = studentFactory.returnStudent();
    //array to hold trophy image objects
    $scope.trophyTally;
    $scope.trophies = [{
            source: '../img/allTheTrophies/1.png',
            backsource: '../img/trophy_backs/1.png',
            alternate: 'one small step',
            trophyName: 'Unlock this trophy after reading your first book!',
            locked: true,
            progress: true,
            barValue: Math.floor(($scope.individual.booksread / 1) * 100)

        },
        {
            source: '../img/allTheTrophies/3.png',
            backsource: '../img/trophy_backs/3.png',
            alternate: 'triple threat!',
            trophyName: 'Three can be great company when it comes to books. Read three books to unlock this trophy!',
            locked: true,
            progress: true,
            barValue: Math.floor(($scope.individual.booksread / 3) * 100)
        },
        {
            source: '../img/book.png',
            backsource: '../img/allTheTrophies/50pagesback.png',
            alternate: 'read more than 50 pages',
            trophyName: 'Read 50 pages, and you will unlock this sweet reward! (Need at least 3 books read)',
            locked: true,
            progress: false,
            barValue: 0
        },
        {
            source: '../img/allTheTrophies/5.png',
            backsource: '../img/trophy_backs/5.png',
            alternate: 'fab five!',
            trophyName: 'This trophy is yours after you log your first five books!',
            locked: true,
            progress: true,
            barValue: Math.floor(($scope.individual.booksread / 5) * 100)
        },
        {
            source: '../img/allTheTrophies/time.png',
            backsource: '../img/allTheTrophies/30minback.png',
            alternate: 'read for longer than 30 minutes',
            trophyName: 'After you have 2 or more books under your belt, unlock this sweet reward for reading longer than 30 minutes!',
            locked: true,
            progress: false,
            barValue: 0
        },
        {
            source: '../img/allTheTrophies/10.png',
            backsource: '../img/trophy_backs/10.png',
            alternate: 'double digital!',
            trophyName: 'Double Digit! Unlock this reward after your 10th book!',
            locked: true,
            progress: true,
            barValue: Math.floor(($scope.individual.booksread / 10) * 100)
        },
        {
            source: '../img/allTheTrophies/book.png',
            backsource: '../img/allTheTrophies/100pagesback.png',
            alternate: 'over 100 pages!',
            trophyName: 'Finishing a chapter book is a major feat! This trophy unlocks after reading 100 pages or more. (You need to read 7 books or more to be eligible for this trophy)',
            locked: true,
            progress: false,
            barValue: 0
        },


        {
            source: '../img/allTheTrophies/20.png',
            backsource: '../img/trophy_backs/20.png',
            alternate: 'walking library!',
            trophyName: 'You’ve gotta be a walking library to unlock this 20 book trophy!',
            locked: true,
            progress: true,
            barValue: Math.floor(($scope.individual.booksread / 20) * 100)
        },
        {
            source: '../img/allTheTrophies/time.png',
            backsource: '../img/allTheTrophies/60minback.png',
            alternate: 'over 60 minutes!',
            trophyName: 'Devoted reading will unlock this trophy, read for more than an hour! (You need to read 7 books or more to be eligible for this trophy)',
            locked: true,
            progress: false,
            barValue: 0
        }, {
            source: '../img/allTheTrophies/5trophiesfront.png',
            backsource: '../img/allTheTrophies/5trophies.png',
            alternate: 'more than 5 trophies!',
            trophyName: 'more than 5 trophies (trophy)!',
            locked: true,
            progress: false,
            barValue: 0
        },

        {
            source: '../img/allTheTrophies/25.png',
            backsource: '../img/trophy_backs/25.png',
            alternate: 'crucial quarter!',
            trophyName: 'Unlock this reward after reading your 25th book!',
            locked: true,
            progress: true,
            barValue: Math.floor(($scope.individual.booksread / 25) * 100)
        },
        {
            source: '../img/allTheTrophies/trip.png',
            backsource: '../img/allTheTrophies/tripback.png',
            alternate: 'took a book on a trip!',
            trophyName: 'You’re going places! This trophy unlocks once you take a good book along on a trip with you. (Must have read at least 5 books)',
            locked: true,
            progress: false,
            barValue: 0
        },

        {
            source: '../img/allTheTrophies/50.png',
            backsource: '../img/trophy_backs/50.png',
            alternate: 'nifty fifty!',
            trophyName: 'Power up! Reading more than 50 books will unlock this trophy.',
            locked: true,
            progress: true,
            barValue: Math.floor(($scope.individual.booksread / 50) * 100)
        }, {
            source: '../img/allTheTrophies/book.png',
            backsource: '../img/allTheTrophies/200pagesback.png',
            alternate: 'over 200 pages!',
            trophyName: 'Wow you love to read! Once you hit double digits and read a book with 200 pages or more, you unlock this great award.',
            locked: true,
            progress: false,
            barValue: 0
        }, {
            source: '../img/allTheTrophies/75a.png',
            backsource: '../img/trophy_backs/75.png',
            alternate: 'read 75 books!',
            trophyName: 'You are a superstar! This trophy unlocks after you read 75 books.',
            locked: true,
            progress: true,
            barValue: Math.floor(($scope.individual.booksread / 75) * 100)
        }, {
            source: '../img/trophyImages/100Trophy.png',
            backsource: '../img/trophy_backs/100.png',
            alternate: 'read 100 books!',
            trophyName: 'READING CHAMPION! You read 100 whole books!',
            locked: true,
            progress: true,
            barValue: Math.floor(($scope.individual.booksread / 100) * 100)
        }
    ];
//conditional logic to update "locked" property on trophy objects in trophies array, from false to true, based on values of properties of the current $scope.individual object

//unlocks trophies
    if ($scope.individual.booksread >= 1) {
        $scope.trophies[0].locked = false;
    }
     if ($scope.individual.booksread >= 3) {
        $scope.trophies[1].locked = false;
    }
    if ($scope.individual.overfifty === true && $scope.individual.booksread >= 3) {
        $scope.trophies[2].locked = false;
    }
    if ($scope.individual.booksread >= 5) {
        $scope.trophies[3].locked = false;
    }
     if ($scope.individual.thirtymin === true && $scope.individual.booksread >= 2) {
        $scope.trophies[4].locked = false;
    }
    if ($scope.individual.booksread >= 10) {
        $scope.trophies[5].locked = false;
    }
    if ($scope.individual.overonehundred === true && $scope.individual.booksread >= 5) {
        $scope.trophies[6].locked = false;
    }

    if ($scope.individual.booksread >= 20 ) {
        $scope.trophies[7].locked = false;
    }
    if ($scope.individual.sixtymin === true && $scope.individual.booksread >= 7) {
        $scope.trophies[8].locked = false;
    }

    if ($scope.individual.booksread >= 25) {
        $scope.trophies[10].locked = false;
    }

     if ($scope.individual.trip === true && $scope.individual.booksread >= 5) {
        $scope.trophies[11].locked = false;
    }
     if ($scope.individual.booksread >= 50) {
        $scope.trophies[12].locked = false;
    }

    if ($scope.individual.overtwohundred === true && $scope.individual.booksread >= 10) {
        $scope.trophies[13].locked = false;
    }

if ($scope.individual.booksread >= 75) {
        $scope.trophies[14].locked = false;
    }

    if ($scope.individual.booksread >= 100) {
        $scope.trophies[15].locked = false;
    }
//function cycles through trophies array, if trophy is unlocked, tally increments by 1
function tallyTrophies() {
    var tally = 0;
    for (var i = 0; i < $scope.trophies.length; i++) {
        if($scope.trophies[i].locked === false) {
            tally ++;
        }
    }
    //uses tally count to unlock "5 trophies" trophy
   if (tally >= 5){ $scope.trophies[9].locked = false; }
}
    tallyTrophies();
    //     $scope.backTrophies = [{
    //        source: '../img/Trophies/1.png',
    //        alternate: 'one small step',
    //        trophyName: 'one small step'
    //
    //    },
    //];
});
