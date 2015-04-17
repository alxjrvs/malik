'use strict';

angular.module('oldAndBusted')
  .controller('TodoController', function ($scope) {

    $scope.activeTodos = [];

    $scope.favoredTodo = null;

    $scope.completeTodo = function(todo){
    };

    $scope.addTodo = function(todo){
    };

    $scope.setFavoredTodo = function(todo) {
    };

    $scope.removeTodo = function(todo){
    };
  });
