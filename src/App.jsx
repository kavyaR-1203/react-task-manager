import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { loadTasks, saveTasks } from './utils/storage';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Lazy initializer: runs once, synchronously, before first render.
  // This avoids a race where an empty array could get saved over
  // real data before the "load" effect finishes.
  const [tasks, setTasks] = useState(() => loadTasks());

  // Persist tasks to localStorage whenever they change
  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  return (
    <div className="app">
      {isLoggedIn ? (
        <Dashboard tasks={tasks} setTasks={setTasks} onLogout={() => setIsLoggedIn(false)} />
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
