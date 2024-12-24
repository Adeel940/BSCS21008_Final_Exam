import React, { useState, useEffect } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ name: '', description: '', dueDate: '' });

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch('http://localhost:5000/tasks');
      const data = await response.json();
      setTasks(data);
    };
    fetchTasks();
  }, []);

  // Add a task
  const handleAddTask = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTask),
    });
    const data = await response.json();
    setTasks((prev) => [...prev, data]);
    setNewTask({ name: '', description: '', dueDate: '' });
  };

  // Delete a task
  const handleDeleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    });
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="mb-4 text-2xl font-bold text-center">Task Management</h1>
      
      <form onSubmit={handleAddTask} className="mb-4">
        <div className="mb-2">
          <input
            type="text"
            placeholder="Task Name"
            value={newTask.name}
            onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            placeholder="Description"
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-2">
          <input
            type="date"
            value={newTask.dueDate}
            onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full px-3 py-2 text-white bg-blue-500 rounded">
          Add Task
        </button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="p-2 mb-2 bg-white rounded shadow">
            <h3 className="font-bold">{task.name}</h3>
            <p>{task.description}</p>
            <p>Due: {task.dueDate}</p>
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="px-3 py-1 text-white bg-red-500 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
