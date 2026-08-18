# Task Management Application

A responsive Task Management Application built with React (functional components + hooks).

## Features
- UI-only Login page with email/password validation (no backend)
- Dashboard with Total, Completed, Pending, and High Priority task counts
- Create, Edit, Delete, and Mark Completed/Pending for tasks
- Each task has: Title, Description, Due Date, Priority (Low/Medium/High), Status (Pending/Completed)
- Search tasks by title
- Filter tasks by Status and Priority
- Sort tasks by Due Date, Priority, or Title
- Form validation on all mandatory fields
- Persistence via browser Local Storage
- Responsive layout (Desktop, Tablet, Mobile) using CSS Grid + media queries

## Tech Stack
- React 18 (functional components, hooks: useState, useEffect, useMemo)
- Plain CSS (no external UI library)
- Browser localStorage for persistence

## Project Structure
```
src/
  App.jsx                 # Root component, holds auth state + tasks state
  App.css
  main.jsx                # Entry point. 
  index.css                # Global reset/styles
  components/
    Login.jsx              # Login form with validation
    Login.css
    Dashboard.jsx           # Main dashboard, composes everything below
    Dashboard.css
    SummaryCards.jsx        # Total/Completed/Pending/High Priority counters
    Controls.jsx            # Search, filter, sort, add-task button
    TaskForm.jsx             # Modal form for create/edit
    TaskList.jsx              # Maps tasks to TaskItem
    TaskItem.jsx               # Single task card
  utils/
    storage.js                # localStorage load/save helpers
```

## Setup & Run
## Setup & Run

### Prerequisites
- Node.js (v16 or higher) and npm installed

### Steps
1. Clone the repository:
    ```
    git clone <your-repo-url>
    cd react-task-manager
    
    ```
2. Install dependencies:
   ```
   npm install

   ```
3. Start the dev server:
   ```
   npm run dev       # Vite

   ```
4. Open the app in your browser (Vite: http://localhost:5173).

## Notes
- Login accepts any syntactically valid email + a password of 6+ characters (no real backend, per the assessment requirements).
- Tasks persist automatically to localStorage on every change and reload on refresh.