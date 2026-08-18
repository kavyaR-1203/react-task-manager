import React from 'react';

function Controls({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  priorityFilter,
  setPriorityFilter,
  sortBy,
  setSortBy,
  onAddClick,
}) {
  return (
    <div className="controls">
      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
        <option value="All">All Statuses</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>

      <select value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)}>
        <option value="All">All Priorities</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="none">Sort By</option>
        <option value="dueDate">Due Date</option>
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>

      <button className="btn-primary" onClick={onAddClick}>+ Add Task</button>
    </div>
  );
}

export default Controls;
