const initialState = {
  todos: [],
  loading: false,
  error: null,
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_TODOS_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_TODOS_SUCCESS':
      return { ...state, loading: false, todos: action.payload };
    case 'FETCH_TODOS_FAILURE':
      return { ...state, loading: false, error: action.error };
    case 'ADD_TODO_SUCCESS':
      return { ...state, todos: [...state.todos, action.payload] };
    default:
      return state;
  }
}

export default todoReducer;