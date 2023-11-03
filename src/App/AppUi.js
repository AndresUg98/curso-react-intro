import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";

function AppUi({
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
  loading,
  error,
}) {
  return (
    <React.Fragment>
      <div className="appCoontainer">
        <TodoCounter completed={completedTodos} total={totalTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

        <TodoList>
          {loading && <p>Estamos cargando</p>}
          {error && <p>Desespérate, hubo un ERROR!!</p>}
          {!loading && searchedTodos.length === 0 && (
            <p>Crea tu primer Todo!</p>
          )}

          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.title}
              title={todo.title}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.title)}
              onDelete={() => deleteTodo(todo.title)}
            />
          ))}
        </TodoList>

        <CreateTodoButton />
      </div>
    </React.Fragment>
  );
}
export { AppUi };
