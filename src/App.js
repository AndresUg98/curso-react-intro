import "./App.css";

import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import React, { useState } from "react";

const defaultTodos = [
  { title: "Cortar cebolla", completed: true },
  { title: "Tomar curso Intro react.js", completed: false },
  { title: "Llorar con la llorona", completed: false },
  { title: "Ser el mejor", completed: true },
  { title: "Usar estados derivados", completed: true },
];

function App() {
  const [searchValue, setSearchValue] = useState("");

  const [todos, setTodos] = useState(defaultTodos);

  //Friltrando los todos que que han completado
  const completedTodos = todos.filter((todo) => !!todo.completed).length;

  const totalTodos = todos.length;

  return (
    <React.Fragment>
      <div className="appCoontainer">
        <TodoCounter completed={completedTodos} total={totalTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

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
