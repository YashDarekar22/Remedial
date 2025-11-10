import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import About from './components/About';

function App() {
  // We'll try to get tasks from localStorage first
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add Task
  const addTask = (taskText) => {
    const newTask = {
      id: uuidv4(),
      text: taskText,
      completed: false,
    };
    setTasks([newTask, ...tasks]); // Add new task to the top
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Completed
  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="app-container">
      <Header />
      <main className="content">
        <Routes>
          {/* Main Page Route */}
          <Route
            path="/"
            element={
              <>
                <AddTask onAddTask={addTask} />
                <TaskList
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleCompleted}
                />
              </>
            }
          />
          {/* About Page Route */}
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;