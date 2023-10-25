import React from "react";
import { FaCheckSquare, FaRegWindowClose } from "react-icons/fa";
import "./TodoItem.css";

function TodoItem({ title, completed }) {
  return (
    <li className={`itemContainer ${completed && "TodoItem-p--complete"}   `}>
      <span>
        <FaCheckSquare
          className={`Icon-check ${completed && "Icon-check--active"} `}
        />
      </span>
      <p className="TodoItem-p ">{title}</p>
      <span>
        <FaRegWindowClose className="Icon-delete" />
      </span>
    </li>
  );
}

export { TodoItem };
