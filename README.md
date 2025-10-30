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

## Tech Stack

- React (Functional Components + Hooks)
- Bootstrap (Layout and basic styling)
- CSS Modules (Scoped component styling)

## Getting Started

To run the app locally:

```bash
npm install
npm run dev


