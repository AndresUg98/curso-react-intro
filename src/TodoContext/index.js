import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const {
    item: todos,
    saveItems: saveTodos,
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
    if (newTodos[todoIndex].completed === false) {
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos);
    } else {
      newTodos[todoIndex].completed = false;
      saveTodos(newTodos);
    }
  };

  const deleteTodo = (title) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.title === title);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const addTodo = (title) => {
    const newTodos = [...todos];

    newTodos.push({
      title,
      completed: false,
    });
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        loading,
        error,
        openModal,
        setOpenModal,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
