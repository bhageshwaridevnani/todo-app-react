import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoForm() {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("General");
  const [priority, setPriority] = useState("Medium");
  const { dispatch } = useContext(TodoContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;

    dispatch({
      type: "ADD_TODO",
      payload: {
        text,
        category,
        priority,
      },
    });

    setText("");
    setCategory("General");
    setPriority("Medium");
  }
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        placeholder="Add a todo... "
        onChange={(e) => setText(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>General</option>
        <option>Work</option>
        <option>Personal</option>
        <option>Study</option>
      </select>

      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      <button>Add</button>
    </form>
  );
}

export default TodoForm;
