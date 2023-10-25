import "./App.css";

import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import React from "react";

const defaultTodos = [
  { title: "Cortar cebolla", completed: true },
  { title: "Tomar curso Intro react.js", completed: false },
  { title: "Llorar con la llorona", completed: false },
  { title: "Ser el mejor", completed: true },
];

function App() {
  return (
    <React.Fragment>
      <div className="appCoontainer">
        <TodoCounter completed={16} total={25} />
        <TodoSearch />

        <TodoList>
          {defaultTodos.map((todo) => (
            <TodoItem
              key={todo.title}
              title={todo.title}
              completed={todo.completed}
            />
          ))}
        </TodoList>

        <CreateTodoButton />
      </div>
    </React.Fragment>
  );
}

export default App;
