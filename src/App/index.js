import "./App.css";
import { useLocalStorage } from "./useLocalStorage";
import { AppUi } from "./AppUi";
import React, { useState } from "react";

/*const defaultTodos = [
   { title: "Cortar cebolla", completed: true },
   { title: "Tomar curso Intro react.js", completed: false },
   { title: "Llorar con la llorona", completed: false },
   { title: "Ser el mejor", completed: true },
   { title: "Usar estados derivados", completed: true },
];*/

// localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');

function App() {
  const [searchValue, setSearchValue] = useState("");

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  //Friltrando los todos que que han completado
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  //Obteniendo toda la cantidad de todo's
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.title.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (title) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.title === title);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (title) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.title === title);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUi
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      loading={loading}
      error={error}
    />
  );
}

export default App;
