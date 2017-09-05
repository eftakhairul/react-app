export const addTodo = (list, item) => ([...list, item])
export const generateId = (list) => (list.length + 1);
export const findById = (id, list) => list.find(item => item.id === id)
export const toggleTodo = (todo) => ({...todo, isComplete: !todo.isComplete})
export const updateTodo = (list, updated) => {
    const updatedIndex = list.findIndex(item => item.id === updated.id)

    return [
        ...list.slice(0, updatedIndex),
        updated,
        ...list.slice(updatedIndex+1),
    ]

}


export const removeTodo = (list, id) => {
    const updatedIndex = list.findIndex(item => item.id === id)
    
        return [
            ...list.slice(0, updatedIndex),            
            ...list.slice(updatedIndex+1),
        ]
} 