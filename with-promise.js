var Q = require("q");
var http = require('http');

var get = function (url) {
  var deferred = Q.defer();
  http.get(url, deferred.resolve);
  return deferred.promise;
};

get("http://www.example.com")
  .then(function(res) {
  	console.log(res);
  }
);