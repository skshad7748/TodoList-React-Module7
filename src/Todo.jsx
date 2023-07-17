import { useState } from 'react';

const TaskList = () => {
  // Step 1: Set up the state to store the tasks
  const [tasks, setTasks] = useState([]);

  // Step 2: Create a state to capture the user's input
  const [newTask, setNewTask] = useState('');

  // Step 3: Function to handle the input change
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  // Function to handle task submission
  const handleTaskSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() !== '') {
      // Adding the new task to the tasks array
      setTasks([...tasks, newTask]);

      // Clearing the input field after adding the task
      setNewTask('');
    }
  };

  const handleTaskDelete = (index) => {
    // Removing the task at the given index
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Task List</h1>
      <form onSubmit={handleTaskSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a new task"
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleTaskDelete(index)}>Delete</button>
          </li>
         
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
