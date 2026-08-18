import React, { useState, useMemo } from 'react';
import SummaryCards from './SummaryCards';
import Controls from './Controls';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './Dashboard.css';

const priorityOrder = { High: 0, Medium: 1, Low: 2 };

function Dashboard({ tasks, setTasks, onLogout }) {
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [priorityFilter, setPriorityFilter] = useState('All');
  const [sortBy, setSortBy] = useState('none');

  const handleAddClick = () => {
    setEditingTask(null);
    setShowForm(true);
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setShowForm(true);
  };

  const handleSave = (task) => {
    setTasks((prev) => {
      const exists = prev.some((t) => t.id === task.id);
      return exists ? prev.map((t) => (t.id === task.id ? task : t)) : [...prev, task];
    });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const handleToggleStatus = (id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, status: t.status === 'Completed' ? 'Pending' : 'Completed' } : t
      )
    );
  };

  const visibleTasks = useMemo(() => {
    let result = [...tasks];

    if (search.trim()) {
      result = result.filter((t) => t.title.toLowerCase().includes(search.trim().toLowerCase()));
    }
    if (statusFilter !== 'All') {
      result = result.filter((t) => t.status === statusFilter);
    }
    if (priorityFilter !== 'All') {
      result = result.filter((t) => t.priority === priorityFilter);
    }

    if (sortBy === 'dueDate') {
      result.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    } else if (sortBy === 'priority') {
      result.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
    } else if (sortBy === 'title') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [tasks, search, statusFilter, priorityFilter, sortBy]);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Task Management Dashboard</h1>
        <button className="btn-secondary" onClick={onLogout}>Logout</button>
      </header>

      <SummaryCards tasks={tasks} />

      <Controls
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        priorityFilter={priorityFilter}
        setPriorityFilter={setPriorityFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
        onAddClick={handleAddClick}
      />

      <TaskList
        tasks={visibleTasks}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onToggleStatus={handleToggleStatus}
      />

      {showForm && (
        <TaskForm
          onSave={handleSave}
          onCancel={() => setShowForm(false)}
          editingTask={editingTask}
        />
      )}
    </div>
  );
}

export default Dashboard;
