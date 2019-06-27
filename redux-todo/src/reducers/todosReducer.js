const initialTodos = [
  {
    itemCompleted: true, 
    id: "1",
    itemText: 'Learn React'
  }, 
  {
    itemCompleted: false, 
    id: "2",
    itemText: 'Redux is awsome'
  }
];

export default function todosReducer(state = initialTodos, action) {
  const {type, id, itemText} = action;
    switch (type) {
      case 'TOGGLE_TODO':
        return state.map(item => {
          if (item.id === id) {
            return {...item, itemCompleted: !item.itemCompleted}
          }
          return item;
        })
      case 'ADD_TODO':
        return [...state,{
          itemCompleted: false, 
          id,
          itemText
        }]
      case 'HIDE_TODO':
        return state.filter(item => !item.itemCompleted)        
      default:
        return state
    }
  }