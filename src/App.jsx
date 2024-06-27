import { useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import Search from "./Search";
import actualTodoList from "./actualTodoList";

const App = () => {
  const [todoList, setTodoList] = useState(actualTodoList);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (newTodoItem) => {
    setTodoList([...todoList, newTodoItem]);
  };

  return (
    <div>
      <h1>Todo List</h1>

      <Search />
      <hr />

      <AddTodoForm addTodo={addTodo} onAddTodo={setNewTodo} />
      <p>
        Searching for <strong>{newTodo}</strong>.
      </p>
      <TodoList list={todoList} />
    </div>
  );
};

export default App;
