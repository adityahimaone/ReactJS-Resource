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

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Todos</h1>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
