"use strict";


var app = angular.module("app",['ngStorage']); // instantiating a new module named 'MyApp'
//var app = angular.module("MyApp"); // refering to an existing module named "MyApp"


app.controller("mainCtrl", function($scope, $localStorage, $filter) {
  console.log("hello from mainCtrl");
  $scope.$storage = $localStorage;
  $scope.contacts = $scope.$storage.contacts;

  var orderBy = $filter('orderBy');

  $scope.sort = function(predicate) {
    $scope.predicate = predicate;
    $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
    $scope.contacts = orderBy($scope.contacts, predicate, $scope.reverse);
  }

  $scope.update = function(update){
    $scope.contacts.splice(update, 1, $scope.newContact);
    console.log("update:", update);
  }

  $scope.addContact = function() {
    $scope.contacts.push($scope.newContact);
    // $scope.$storage.contacts = $scope.contacts;
    console.log("done:", $scope.$storage.contacts);
    location.reload(true)
  }


  $scope.delName = function(index) {
    $scope.contacts.splice(index, 1)
    console.log(index)
  }

});


console.log("main.js");
