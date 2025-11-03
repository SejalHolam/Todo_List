export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      const updatedTodoList = [...state.todos, action.payload];
      updatedTodoList.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
      return { ...state, todos: updatedTodoList };
    }

    case "DELETE_TODO": {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    }

    case "TOGGLE_TODO": {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    }

    case "EDIT_TODO": {
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              itemName: action.payload.newName,
              dueDate: action.payload.newDueDate,
            }
          : todo
      );
      updatedTodos.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
      return { ...state, todos: updatedTodos };
    }

    case "SET_FILTER":
      return { ...state, filter: action.payload };

    default:
      return state;
  }
};