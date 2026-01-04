import { useContext, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { TodoContext } from "../context/TodoContext";
import TodoSearch from "../components/TodoSearch";

function AllTodos({ priorityFilter }) {
  const { todos } = useContext(TodoContext);
  const [search, setSearch] = useState("");
  const filterTodos = todos
    .filter((todo) =>
      todo.text.toLowerCase().includes(search.toLocaleLowerCase())
    )
    .filter((todo) =>
      priorityFilter ? todo.priority === priorityFilter : true
    );

  return (
    <div>
      <TodoForm />
      <TodoSearch search={search} setSearch={setSearch} />
      <TodoList todos={filterTodos} />
    </div>
  );
}

export default AllTodos;
