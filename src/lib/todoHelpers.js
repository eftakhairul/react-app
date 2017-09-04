export const addTodo = (list, item) => ([...list, item])
export const generateId = (list) => (list.length + 1);
export const findById = (id, list) => list.find(item => item.id === id)
export const toggleTodo = (todo) => ({...todo, isComplete: !todo.isComplete})