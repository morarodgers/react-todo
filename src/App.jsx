import { useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import Search from "./Search";
import Header from "./Header";
import Footer from "./Footer";
import "./styles1.css";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [search, setSearch] = useState("React");

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

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
