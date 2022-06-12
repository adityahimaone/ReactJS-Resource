import React, { useState } from "react";
import "./App.css";
import Todos from "./components/Todos";
import TodoClass from "./models/todoClass";
import NewTodo from "./components/NewTodo";

function App(): JSX.Element {
  // const items = [
  //   new TodoClass("Learn TypeScript"),
  //   new TodoClass("Learn React"),
  // ];

  const [todos, setTodos] = useState<TodoClass[]>([]);

  const addTodoHandler = (text: string): void => {
    const newTodo = new TodoClass(text);
    setTodos((prevTodos) => {
      // [...prevTodos, newTodo]
      return prevTodos.concat(newTodo);
    });
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Todos</h1>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
