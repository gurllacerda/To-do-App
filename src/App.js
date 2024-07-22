import React, { useEffect, useState } from "react";
import TaskList from "./COMPONENTS/TaskList";
import "./App.css";

function App() {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);
  const [newId, setNewId] = useState(0);
  const [editableTaskId, setEditableTaskId] = useState(null);
  const [editText, setEditText] = useState("");

  // Controla o submit do form 
  const handleSubmit = (event) => {
    event.preventDefault();

    if (taskName.trim()) {
      const task = { id: newId, tarefa: taskName };
      setTasks([...tasks, task]);
      setTaskName(""); 
      setNewId(newId + 1); 
    }
  };

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const handleDelete = (id) => {
    const newTaskList = tasks.filter((task) => task.id !== id);
    setTasks(newTaskList);
  };

  const handleEdit = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    setEditableTaskId(id);
    setEditText(taskToEdit.tarefa);
  };

  const handleSave = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, tarefa: editText } : task
    ));
    setEditableTaskId(null);
    setEditText("");
  };

  const handleCancel = () => {
    setEditableTaskId(null);
    setEditText("");
  };

  return (
    <div className="container">
      <div className="title">
        <h2>GUSTAVO'S TO DO LIST</h2>
      </div>
      <form className="taskForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="task"
          value={taskName}
          placeholder="Digite sua nova tarefa"
          onChange={(event) => setTaskName(event.target.value)}
        />
        <button type="submit">
          <i className="fa-solid fa-check"></i>
          <span>Add Task</span>
        </button>
      </form>
      <TaskList
        tasks={tasks}
        onDelete={handleDelete}
        onEdit={handleEdit}
        editableTaskId={editableTaskId}
        editText={editText}
        onSave={handleSave}
        onCancel={handleCancel}
        setEditText={setEditText}
      />
    </div>
  );
}

export default App;