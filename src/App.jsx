import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import AllTodos from "./pages/AllTodos";
import ActiveTodos from "./pages/ActiveTodos";
import CompletedTodos from "./pages/CompletedTodos";
import { useState } from "react";

function App() {
  const [priorityFilter, setPriorityFilter] = useState("");
  return (
    <div className="app">
      <h1 className="title">Todo App</h1>
      <nav className="filter-nav">
        <NavLink to="/">All</NavLink>
        <NavLink to="/active">Active</NavLink>
        <NavLink to="/Completed">Completed</NavLink>

        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<AllTodos priorityFilter={priorityFilter} />}
        />
        <Route
          path="/active"
          element={<ActiveTodos priorityFilter={priorityFilter} />}
        />
        <Route
          path="/completed"
          element={<CompletedTodos priorityFilter={priorityFilter} />}
        />
      </Routes>
    </div>
  );
}

export default App;
