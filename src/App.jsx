import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import Search from "./Search";
import Header from "./Header";
import Footer from "./Footer";
import "./styles.css";

const App = () => {
  const [todoList, setTodoList] = useState(() => {
    const saveTodoList = localStorage.getItem("todoList");
    return saveTodoList ? JSON.parse(saveTodoList) : [];
  });

  const [search, setSearch] = useState("React");
  //localStorage.getItem("search") || "React";
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  useEffect(() => {
    localStorage.setItem("search", search);
  }, [search]);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <Header />
      <h1>Todo List</h1>

      <Search onSearch={handleSearch} search={search} />
      <hr />

      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />

      <Footer />
    </div>
  );
};

export default App;
