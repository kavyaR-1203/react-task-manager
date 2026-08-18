import React from 'react';

function TaskItem({ task, onEdit, onDelete, onToggleStatus }) {
  return (
    <div className={`task-item priority-${task.priority.toLowerCase()}`}>
      <div className="task-item-header">
        <h3>{task.title}</h3>
        <span className={`status-badge status-${task.status.toLowerCase()}`}>{task.status}</span>
      </div>
      <p className="task-description">{task.description}</p>
      <div className="task-meta">
        <span>Due: {task.dueDate}</span>
        <span>Priority: {task.priority}</span>
      </div>
      <div className="task-actions">
        <button onClick={() => onToggleStatus(task.id)}>
          {task.status === 'Completed' ? 'Mark Pending' : 'Mark Completed'}
        </button>
        <button onClick={() => onEdit(task)}>Edit</button>
        <button className="btn-danger" onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;
