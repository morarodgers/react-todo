// import * as React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  return (
    <div>
      <h1>Todo List</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
