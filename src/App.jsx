import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
//import Search from "./Search";
import Header from "./Header";
import Footer from "./Footer";
import "./styles.css";

// Custom hook
const useSemiPersistentState = () => {
  const [todoList, setTodoList] = useState(() => {
    const saveTodoList = localStorage.getItem("todoList");
    return saveTodoList ? JSON.parse(saveTodoList) : [];
  });

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
};

// Reusable custom hook
/* const useSemiPersistentState = (key, initialState) => {
  const [state, setState] = useState(() => {
    const savedState = localStorage.getItem(key);
    return savedState ? JSON.parse(savedState) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};
 */
const App = () => {
  // Custom hook used
  const [todoList, setTodoList] = useSemiPersistentState();
  //const [todoList, setTodoList] = useSemiPersistentState("todoList", []);
  //const [search, setSearch] = useSemiPersistentState("search", "React");

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  /* const handleSearch = (event) => {
    setSearch(event.target.value);
    console.log(event.target.value);
  };
 */
  return (
    <>
      <Header />
      <h1>Todo List</h1>

      {/* <Search onSearch={handleSearch} search={search} />*/}
      <hr />

      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />

      <Footer />
    </>
  );
};

export default App;
