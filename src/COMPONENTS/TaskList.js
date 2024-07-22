import React from "react";

const TaskList = (props) => {
  const { tasks, onDelete, onEdit, editableTaskId, onSave, onCancel, editText, setEditText } = props;
//   console.log(isEditable);

  return (
    <div className="task-list">
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            {editableTaskId === task.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <i
                  className="fa-solid fa-check"
                  onClick={() => onSave(task.id)}
                  style={{ cursor: "pointer", marginLeft: "10px" }}
                ></i>
                <i
                  className="fa-solid fa-times"
                  onClick={onCancel}
                  style={{ cursor: "pointer", marginLeft: "10px" }}
                ></i>
              </>
            ) : (
              <>
                <span>{task.tarefa}</span>
                <i
                  className="fa-solid fa-trash"
                  aria-hidden="true"
                  onClick={() => onDelete(task.id)}
                  style={{ cursor: "pointer", marginLeft: "10px" }}
                ></i>
                <i
                  className="fa-solid fa-pen-to-square"
                  aria-hidden="true"
                  onClick={() => onEdit(task.id)}
                  style={{ cursor: "pointer", marginLeft: "10px" }}
                ></i>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
