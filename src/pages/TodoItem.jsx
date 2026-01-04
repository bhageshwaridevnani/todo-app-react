import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoItem({ todo }) {
  const { dispatch } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  // const priorityColor =
  //   todo.priority === "High"
  //     ? "red"
  //     : todo.priority === "Medium"
  //     ? "orange"
  //     : "green";

  function handleEdit() {
    dispatch({
      type: "EDIT_TODO",
      payload: {
        id: todo.id,
        text: text,
      },
    });

    setIsEditing(false);
  }
  return (
    <li className="todo-item">
      {isEditing ? (
        <div className="edit-row">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <>
          <div className="todo-left">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() =>
                dispatch({ type: "TOGGLE_TODO", payload: todo.id })
              }
            />

            <span
              className={todo.completed ? "todo-text completed" : "todo-text"}
            >
              {todo.text}
            </span>

            <span className="tag category">{todo.category}</span>

            <span className={`tag priority ${todo.priority.toLowerCase()}`}>
              {todo.priority}
            </span>
          </div>

          <div className="todo-actions">
            <button onClick={() => setIsEditing(true)}>✏️</button>
            <button
              onClick={() =>
                dispatch({ type: "DELETE_TODO", payload: todo.id })
              }
            >
              ❌
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
