'use strict';

describe('TodoControllerSpec', function(){
  var scope;

  beforeEach(module('oldAndBusted'));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));


  describe('completeTodo', function(){
    var exampleTodo;

    beforeEach(function(){
      exampleTodo = {text: "This is Complete!", completed: false};
      scope.activeTodos.push(exampleTodo);

    });

    it('sets the todo to complete', function(){
      expect(exampleTodo.completed).toEqual(false);
      scope.completeTodo(exampleTodo)
      expect(exampleTodo.completed).toEqual(true);
    });
  });

  describe('setFavoredTodo', function(){
    it('adds a Todo to the activeTodos array', function(){
      expect(scope.activeTodos.count).toEqual(0);
      scope.addTodo("example todo");
      expect(scope.activeTodos.count).toEqual(1);
      expect(scope.activeTodos.first.text).toEqual("example todo");
    });
  });

  describe('addTodo', function(){
    it('adds a Todo to the activeTodos array', function(){
      expect(scope.activeTodos.count).toEqual(0);
      scope.addTodo("example todo");
      expect(scope.activeTodos.count).toEqual(1);
      expect(scope.activeTodos.first.text).toEqual("example todo");
    });
  });
});
