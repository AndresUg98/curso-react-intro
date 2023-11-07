import React from "react";
import { FaPlus } from "react-icons/fa";
import "./CreateTodoBotton.css";

function CreateTodoButton({ setOpenModal }) {
  return (
    <button
      onClick={() => {
        setOpenModal((state) => !state);
      }}
    >
      <FaPlus className="PlusIcon" />
    </button>
  );
}

export { CreateTodoButton };
