import React, { useState, useEffect } from 'react';

const emptyTask = {
  title: '',
  description: '',
  dueDate: '',
  priority: 'Low',
  status: 'Pending',
};

function TaskForm({ onSave, onCancel, editingTask }) {
  const [form, setForm] = useState(emptyTask);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setForm(editingTask ? editingTask : emptyTask);
    setErrors({});
  }, [editingTask]);

  const validate = () => {
    const newErrors = {};
    if (!form.title.trim()) newErrors.title = 'Title is required';
    if (!form.description.trim()) newErrors.description = 'Description is required';
    if (!form.dueDate) newErrors.dueDate = 'Due date is required';
    if (!form.priority) newErrors.priority = 'Priority is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onSave({
      ...form,
      id: editingTask ? editingTask.id : Date.now().toString(),
    });
  };

  return (
    <div className="modal-overlay">
      <form className="task-form" onSubmit={handleSubmit} noValidate>
        <h2>{editingTask ? 'Edit Task' : 'Create Task'}</h2>

        <div className="form-group">
          <label>Title</label>
          <input name="title" value={form.title} onChange={handleChange} />
          {errors.title && <span className="error-text">{errors.title}</span>}
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea name="description" rows="3" value={form.description} onChange={handleChange} />
          {errors.description && <span className="error-text">{errors.description}</span>}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Due Date</label>
            <input type="date" name="dueDate" value={form.dueDate} onChange={handleChange} />
            {errors.dueDate && <span className="error-text">{errors.dueDate}</span>}
          </div>

          <div className="form-group">
            <label>Priority</label>
            <select name="priority" value={form.priority} onChange={handleChange}>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Status</label>
          <select name="status" value={form.status} onChange={handleChange}>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="form-actions">
          <button type="button" className="btn-secondary" onClick={onCancel}>Cancel</button>
          <button type="submit" className="btn-primary">Save Task</button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
