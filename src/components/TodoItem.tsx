import React, { FC } from "react";
import Styles from "../styles/TodoItem.module.css";

const TodoItem: FC<{ text: string }> = (props) => {
  return <li className={Styles.item}>{props.text}</li>;
};

export default TodoItem;
