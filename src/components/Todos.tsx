import React, { FC } from "react";
// import TodoClass from "../models/todoClass";
import TodoItem from "./TodoItem";
import Todo from "../models/todoInterface";
import Styles from "../styles/Todos.module.css";

const Todos: FC<{ items: Todo[] }> = (props) => {
  return (
    <ul className={Styles.todos}>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
