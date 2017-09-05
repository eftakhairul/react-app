import { addTodo, findById, toggleTodo, updateTodo, removeTodo } from './todoHelpers';

test('add item to todo list', () => {
    const startTodos = [
        {id: 1, name: 'one', isComplete: false },
        {id: 2, name: 'two', isComplete: false },
    ]

    const newTodo = {id: 3, name: 'three', isComplete: false };

    const expected = [
        {id: 1, name: 'one', isComplete: false },
        {id: 2, name: 'two', isComplete: false },
        {id: 3, name: 'three', isComplete: false }
    ]

    const result = addTodo(startTodos, newTodo);
    expect(result.length).toBe(expected.length);
})

test('findById shuuld return the item from todo list', () => {
    const startTodos = [
        {id: 1, name: 'one', isComplete: false },
        {id: 2, name: 'two', isComplete: false },
        {id: 3, name: 'three', isComplete: false }
    ]   

    const expected = {id: 2, name: 'two', isComplete: false };

    const result = findById(2, startTodos);
    expect(result.id).toBe(expected.id);
    expect(result.name).toBe(expected.name);
})

test('ToggleTodo should toggle the isComplete prop of a todo', () => {
    const startTodo = {id: 2, name: 'two', isComplete: false };
    const expected = {id: 2, name: 'two', isComplete: true };
    const result = toggleTodo(startTodo);
    expect(result.isComplete).toBe(expected.isComplete);
});

test('ToggleTodo should not retun the mutate todo object', () => {
    const startTodo = {id: 2, name: 'two', isComplete: false };    
    const result = toggleTodo(startTodo);
    expect(result).not.toBe(startTodo);
});

test('UpdateTodo should update by an item', () => {
    const startTodos = [
        {id: 1, name: 'one', isComplete: false },
        {id: 2, name: 'two', isComplete: false },
        {id: 3, name: 'three', isComplete: false }
    ]  

    const expected = [
        {id: 1, name: 'one', isComplete: false },
        {id: 2, name: 'two', isComplete: true },
        {id: 3, name: 'three', isComplete: false }
    ] 

    const updatedTodo = {id: 2, name: 'two', isComplete: true };    
    
    const result = updateTodo(startTodos, updatedTodo);
    expect(result).toEqual(expected);
});

test('UpdateTodo should not mutate the original array', () => {
    const startTodos = [
        {id: 1, name: 'one', isComplete: false },
        {id: 2, name: 'two', isComplete: false },
        {id: 3, name: 'three', isComplete: false }
    ]  

    const expected = [
        {id: 1, name: 'one', isComplete: false },
        {id: 2, name: 'two', isComplete: true },
        {id: 3, name: 'three', isComplete: false }
    ] 

    const updatedTodo = {id: 2, name: 'two', isComplete: true };    
    
    const result = updateTodo(startTodos, updatedTodo);
    expect(result).not.toBe(startTodos);
});


test('removeTodo should remove an item from the provided list', () => {
    const startTodos = [
        {id: 1, name: 'one', isComplete: false },
        {id: 2, name: 'two', isComplete: false },
        {id: 3, name: 'three', isComplete: false }
    ]  

    const expected = [
        {id: 1, name: 'one', isComplete: false },        
        {id: 3, name: 'three', isComplete: false }
    ] 

    const updatedId = 2;
    
    const result = removeTodo(startTodos, updatedId);
    expect(result.length).toBe(expected.length);
});