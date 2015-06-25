'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('CtrlTodoList', ["$scope", function($scope) {
  	$scope.todos = [
  		{
  			done: true,
  			text: 'Learn Angular'
  		},
  		{
  			done: false,
  			text: 'Build an app'
  		}
  	]

  	// add new todo function
  	$scope.addTodo = function(){

  		// if newItem input is blank, return nothing
  		if ($scope.newItem.length < 1){
  			return;
  		}
  		// create newTodo that gets pushed to todos
  		var newTodo = {
  			done: false,
  			text: $scope.newItem
  		}

  		$scope.todos.push(newTodo);
  		$scope.newItem = '';
  	};

  	// remove todo function
  	$scope.removeTodo = function(start){
  		$scope.todos.splice(start,1);
  	};

  	// move down function
  	$scope.move = function(index, direction) {
  		// if direction is 'down'
  		if (direction === 'down') {
  			if ($scope.todos.length - 1 === index){
  				return;
  			}
  		}

  		// if direction is 'up'
  		if (direction === 'up') {
  			if (index === 0) {
  				return;
  			}
  			index = index - 1
  		}

  		var todoIndex = $scope.todos[index];
  		$scope.todos.splice(index + 2, 0, todoIndex);
  		$scope.todos.splice(index, 1);

  	};








  }]);




