import Task from './Task';

function TaskList({ tasks, onDelete, onToggle }) {
  return (
    <div className="task-list">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))
      ) : (
        <p className="no-tasks-msg">You have no tasks! 🎉</p>
      )}
    </div>
  );
}

export default TaskList;