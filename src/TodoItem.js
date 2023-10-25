import React from "react";
import './TodoItem.css'

function TodoItem({title}) {
  return (
    <li className="itemContainer">
      <span>V</span>
      <p>{title}</p>
      <span>x</span>
    </li>
  );
}

export { TodoItem };
