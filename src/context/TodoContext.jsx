/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useReducer } from "react";
import todoReducer from "../reducers/todoReducer";

export const TodoContext = createContext();

const initialState = JSON.parse(localStorage.getItem("todos")) || [];

export function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  //save todos in localstorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}
