import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import Search from "./Search";
import Header from "./Header";
import Footer from "./Footer";

// Custom hook
/*const useSemiPersistentState = () => {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("savedTodoList")) || []
  );

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
};*/

// Reusable custom hook
const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = useState(() => {
    const savedValue = localStorage.getItem(key);
    try {
      return savedValue ? JSON.parse(savedValue) : initialState;
    } catch (e) {
      console.warn(`Error parsing localStorage key "${key}":`, e);
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

const App = () => {
  // Custom hook used
  //const [todoList, setTodoList] = useSemiPersistentState();
  const [todoList, setTodoList] = useSemiPersistentState("todoList", []);
  const [search, setSearch] = useSemiPersistentState("search", "React");

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
    console.log(event.target.value);
  };

  return (
    <>
      <Header />
      <h1>Todo List</h1>

      <Search onSearch={handleSearch} search={search} />
      <hr />

      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />

      <Footer />
    </>
  );
};

export default App;
