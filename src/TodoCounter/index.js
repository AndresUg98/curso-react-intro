import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  return (
    <h1>
      Has completado {completedTodos} de {totalTodos} Todo's
    </h1>
  );
}

export { TodoCounter };
