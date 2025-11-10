import { FaTimes } from 'react-icons/fa'; // Using react-icons for a delete icon

// You may need to install react-icons: npm install react-icons
// Or, just use a simple "X" text instead of <FaTimes />

function Task({ task, onDelete, onToggle }) {
  return (
    // Add 'completed' class if task.completed is true
    <div
      className={`task ${task.completed ? 'completed' : ''}`}
      onDoubleClick={() => onToggle(task.id)} // Toggle complete on double click
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)} // Delete on click
        />
      </h3>
      <p>Double-click to toggle complete</p>
    </div>
  );
}

export default Task;