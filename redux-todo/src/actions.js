export const toggleTodo = (id) => ({type: 'TOGGLE_TODO', id});
export const addTodo = (id, itemText) => ({type: 'ADD_TODO', id, itemText});
export const hideTodo = () => ({type: 'HIDE_TODO'});
export const setValue = (value) => ({type: 'SET_VALUE', value});
export const clearValue = (value) => ({type: 'CLEAR_VALUE', value});