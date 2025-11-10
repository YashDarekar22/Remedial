import React, { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  // State to hold the list of tasks
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (text) => {
    // A task object has an id, text, and completion status
    const newTask = {
      id: Date.now(), // Use timestamp for a unique ID
      text: text,
      completed: false,
    };
    setTasks([...tasks, newTask]); // Add the new task to the existing list
  };

  // Function to toggle the 'completed' status of a task
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app-container">
      <header>
        <h1>My Task Manager</h1>
      </header>
      <main>
        {/* Pass the addTask function as a prop to the form */}
        <TaskForm onAddTask={addTask} />
        
        {/* Pass the task list and handler functions to the list */}
        <TaskList
          tasks={tasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />
      </main>
    </div>
  );
}

export default App;