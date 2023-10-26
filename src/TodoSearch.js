import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  console.log(searchValue);
  return (
    <input
      placeholder="Cortar cebolla"
      className="searchInput"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    ></input>
  );
}

export { TodoSearch };
