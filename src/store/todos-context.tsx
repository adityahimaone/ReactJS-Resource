import React, { useState } from "react";
import Todo from "../models/todoInterface";
import TodoClass from "../models/todoClass";

const TodosContext = React.createContext<{
  items: Todo[];
  addTodo: () => void;
  deleteTodo: (id: string) => void;
}>({
  items: [],
  addTodo: () => {},
  deleteTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<TodoClass[]>([]);

  const addTodoHandler = (text: string): void => {
    const newTodo = new TodoClass(text);
    setTodos((prevTodos) => {
      // [...prevTodos, newTodo]
      return prevTodos.concat(newTodo);
    });
  };

  const deleteTodoHandler = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const contextValue = {
    items: todos,
    addTodo: addTodoHandler,
    deleteTodo: deleteTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};
