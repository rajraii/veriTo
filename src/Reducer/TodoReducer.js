export const TodoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload]
    case "COMPLETE":
      return [...state, state[action.payload.id].complete = true]
    case "REMOVE":
      return state.filter(todo => todo.id !== action.payload.id)
    default:
      return [...state];
  }
}