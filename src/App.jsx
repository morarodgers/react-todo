// import * as React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import Search from "./Search";

const App = () => (
  <div>
    <h1>Todo List</h1>

    <Search />
    <hr />

    <AddTodoForm />
    <TodoList />
  </div>
);

export default App;
