import { useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import Search from "./Search";
//import actualTodoList from "./actualTodoList";
import "./styles.css"; // Import the stylesheet

const App = () => {
  const [todoList, setTodoList] = useState([]);
  //const [todoList, setTodoList] = useState(actualTodoList);
  //const [newTodo, setNewTodo] = useState("");
  const [search, setSearch] = useState("React");

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
    console.log(event.target.value);
  };

  const filteredTodoList = todoList.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Todo List</h1>

      <Search onSearch={handleSearch} search={search} />
      <hr />

      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={filteredTodoList} />
      {/*<TodoList list={todoList} />*/}
    </div>
  );
};

export default App;
