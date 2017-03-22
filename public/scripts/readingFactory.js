var app = angular.module('myMod');
//factory for libInput and libOutput controllers
//storing information (data) from new book form inside of an object called bookInfo, to be accessed by dbFactory
app.factory('readingFactory', function() {
  var bookInfo = {};
  return {
    exportTo: function(data) {
      bookInfo = data;
      },
    importIn: function() {

        console.log(bookInfo);
      return bookInfo;
    }
  }

});
