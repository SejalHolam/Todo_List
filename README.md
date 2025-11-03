# React Todo App – Progressive Versions

This project showcases the evolution of a Todo List application using React. It is structured in three versions, each demonstrating improvements in functionality, code organization, and user interaction.

## Version 1 – Basic

A simple static layout with hardcoded todo items. This version establishes the basic structure and components.

### Features
- Static layout using React components
- Hardcoded todo items
- UI elements for adding and deleting tasks (non-functional)

### Components
- `Heading` – Displays the title
- `AddTodo` – Input fields for task and date
- `TodoItem` – Displays each todo entry (hardcoded)

## Version 2 – Dynamic Rendering

This version introduces dynamic data rendering using props and JavaScript arrays.

### Features
- Todo items rendered using `map()` from an array
- List data passed to `TodoItem` component via props
- More modular structure for easier scalability

### Components
- `App.js` – Holds todo array and passes it down
- `AddTodo.js` - Displays input fields and "Add" button
- `TodoItem.js` – Dynamically displays todo items using props

## Version 3 – Advanced Functionality

A full-featured version with interactive todo management including filtering, editing, deleting, and completion tracking.

### Features
- Add new todos with a form
- Delete existing todos
- Edit todo text and due date
- Mark tasks as completed
- Filter todos: All / Active / Completed
- Sort todos by due date
- Fully responsive and styled using Bootstrap + CSS

### Functional Enhancements
- `useState` for managing dynamic data
- `useEffect` (optional for future persistence)
- Handlers for toggle, edit, delete, and filter logic
- Clean, structured component layout

### Components
- `App.js` – Holds todo array and passes it down
- `AddTodo.js` - Displays input fields and "Add" button
- `TodoItem.js` – Dynamically displays todo items using props
- `Heading.js` - Heading for the Todo List

## Version 4 – Context Api Integration
This version introduces React Context API to manage global state, eliminating the need for prop drilling and improving scalability.
The Context API centralizes all todo-related logic (adding, editing, deleting, filtering) in one shared store that any component can access directly.

### Features
- Centralized state management using React Context API
- TodoItemsContext provides todos, filters, and all related functions globally
- Components access shared data using useContext
- Cleaner and more maintainable code structure
- Simplified prop passing (no more prop drilling)
- Same interactive features as Version 3 (add, edit, delete, filter, complete)

### Functional Enhancements

- Global State: All state (todos, filter, etc.) moved from App.js into Context
- Provider Setup: A TodoItemsContext.Provider wraps the app to share data
- Consumer Access: Components (AddTodo, TodoItem, WelcomeMessage) use useContext() to directly access data and functions
- Optional Refactor: Logic can be extracted into a reusable TodoProvider component for larger projects

## Version 5 – useReducer Integration
This version refactors the app’s global state management to use the useReducer hook instead of useState. The goal is to centralize all state updates through dispatch actions, making state management more predictable and easier to maintain as the app grows.

### Features
- All todo state and logic are now managed via useReducer
- Actions handle adding, deleting, editing, completing, and filtering todos
- Reducer ensures immutable updates and automatic sorting by due date
- Maintains all Version 4 functionality:
  Add, edit, delete todos
  Toggle completion
  Filter by All / Active / Completed
  Sort by due date
- Cleaner code with a single source of truth for state transitions

### Functional Enhancements
- Centralized State Updates
  All changes to todos and filter are done via dispatch({ type, payload })
  Reduces risk of inconsistent state updates compared to multiple useState calls

- Reducer Actions
  ADD_TODO → Adds a new todo and sorts the list
  DELETE_TODO → Removes a todo by ID
  TOGGLE_TODO → Marks a todo as completed/uncompleted
  EDIT_TODO → Updates todo text and due date
  SET_FILTER → Updates current filter for todo display

- Simpler Context Provider
  Provider only exposes state and dispatch-driven functions
  Components no longer need to handle state logic internally
  

## Tech Stack

- React (Functional Components + Hooks)
- Bootstrap (Layout and basic styling)
- CSS Modules (Scoped component styling)

## Getting Started

To run the app locally:

```bash
npm install
npm run dev


