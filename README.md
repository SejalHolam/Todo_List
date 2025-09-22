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

## Tech Stack

- React (Functional Components + Hooks)
- Bootstrap (Layout and basic styling)
- CSS Modules (Scoped component styling)

## Getting Started

To run the app locally:

```bash
npm install
npm run dev
