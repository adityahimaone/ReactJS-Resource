import React, { FormEvent, useRef } from "react";
import Styles from "../styles/NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={Styles.form}>
      <label htmlFor="todo text" className={Styles.label}>
        Todo Text
      </label>
      <input type="text" ref={todoTextInputRef} className={Styles.input} />
      <button className={Styles.button}>Add Todo</button>
    </form>
  );
};

export default NewTodo;
