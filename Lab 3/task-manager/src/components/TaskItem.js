import React from 'react';

function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        {/* Checkbox to toggle completion */}
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
        />
        {/* Task text (strikethrough if completed) */}
        <span className="task-text">{task.text}</span>
      </div>
      
      {/* Delete button */}
      <button 
        className="delete-btn" 
        onClick={() => onDeleteTask(task.id)}
      >
        &times;
      </button>
    </li>
  );
}

export default TaskItem;