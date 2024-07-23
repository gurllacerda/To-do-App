import React, {  useState } from "react";
import TaskList from "./COMPONENTS/TaskList";
import "./App.css";

function App() {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);
  const [newId, setNewId] = useState(0);
  const [taskId, setTaskId] = useState(null);
  const [editText, setEditText] = useState("");
  const [isCompleted, setIsCompleted] = useState(false)

  // Controla o submit do form 
  const handleSubmit = (event) => {
    event.preventDefault();

    if (taskName.trim()) {
      const task = { id: newId, tarefa: taskName, complete: isCompleted };
      setTasks([...tasks, task]);
      setTaskName(""); 
      setNewId(newId + 1); 
    }
  };

  // useEffect(() => {
  //   console.log(tasks);
  // }, [tasks]);

  const handleDelete = (id) => {
    const newTaskList = tasks.filter((task) => task.id !== id);
    setTasks(newTaskList);
  };

  const handleEdit = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    setTaskId(id);
    setEditText(taskToEdit.tarefa);
  };

  const handleSave = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, tarefa: editText } : task
    ));
    setTaskId(null);
    setEditText("");
  };

  const handleCancel = () => {
    setTaskId(null);
    setEditText("");
  };

  const handleChecked = (id) => {
    setIsCompleted(!isCompleted)
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, complete: !task.complete } : task
    ));
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
        taskId={taskId}
        editText={editText}
        // isCompleted={isCompleted}
        onChecked={handleChecked}
        onSave={handleSave}
        onCancel={handleCancel}
        setEditText={setEditText}
      />
    </div>
  );
}

export default App;