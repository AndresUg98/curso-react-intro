import React from "react";
import './TodoList.css';

function TodoList({children}) {
  return <ul className="container">{children}</ul>;
}

export { TodoList };
