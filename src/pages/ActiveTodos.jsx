import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoList from "./TodoList";
import TodoSearch from "../components/TodoSearch";

export default function ActiveTodos({ priorityFilter }) {
  const { todos } = useContext(TodoContext);
  const [search, setSearch] = useState("");

  const filteredTodos = todos
    .filter((todo) => !todo.completed)
    .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
    .filter((todo) =>
      priorityFilter ? todo.priority === priorityFilter : true
    );

  return (
    <>
      <h2>Active Todos</h2>
      <TodoSearch search={search} setSearch={setSearch} />
      <TodoList todos={filteredTodos} />
    </>
  );
}
