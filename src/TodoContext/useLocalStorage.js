import React, { useState } from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 5000);
  }, []);

  const saveItems = (newItems) => {
    localStorage.setItem(itemName, JSON.stringify(newItems));
    setItem(newItems);
  };

  return { item, saveItems, loading, error };
}

export { useLocalStorage };

/*const defaultTodos = [
   { title: "Cortar cebolla", completed: true },
   { title: "Tomar curso Intro react.js", completed: false },
   { title: "Llorar con la llorona", completed: false },
   { title: "Ser el mejor", completed: true },
   { title: "Usar estados derivados", completed: true },
];*/

// localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');
