import { addTodo, findById, toggleTodo } from './todoHelpers';

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