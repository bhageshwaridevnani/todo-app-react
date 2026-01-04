import { TodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";

function TodoList({ todos }) {
  // const { todos } = useContext(TodoContext);

  if (todos.length === 0) {
    return <p>No todos yet!!!</p>;
  }
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
