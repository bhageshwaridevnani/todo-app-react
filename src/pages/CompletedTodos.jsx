import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";
import TodoSearch from "../components/TodoSearch";
import TodoList from "./TodoList";

function CompletedTodos({ priorityFilter }) {
  const { todos } = useContext(TodoContext);
  const [search, setSearch] = useState("");

  const filterTodos = todos
    .filter((todo) => todo.completed)
    .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
    .filter((todo) =>
      priorityFilter ? todo.priority === priorityFilter : true
    );

  // const completeTodos = todos.filter((todo) => todo.completed);
  return (
    <div>
      <h2>Completed Todos</h2>
      <TodoSearch search={search} setSearch={setSearch} />
      <TodoList todos={filterTodos} />
      {/* <ul>
        {completeTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul> */}
    </div>
  );
}

export default CompletedTodos;
