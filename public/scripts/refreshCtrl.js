var app = angular.module('myMod');
//handles page refresh
app.controller('refreshCtrl', function($location){
//redirects view to intro partial page 
  $location.path("/intro");
});
