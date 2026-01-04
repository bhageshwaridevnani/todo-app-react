function TodoSearch({ search, setSearch }) {
  return (
    <input
      className="todo-search"
      type="text"
      placeholder="Search Todos..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default TodoSearch;
