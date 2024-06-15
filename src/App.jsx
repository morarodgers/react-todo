/*import * as React from "react";*/

const todoList = [
  {
    id: 1,
    title: "Complete assignment1",
  },
  {
    id: 2,
    title: "Extra practice",
  },
  {
    id: 3,
    title: "Extra practice1",
  },
  {
    id: 4,
    title: "Complete assignment2",
  },
];

function App() {
  return (
    <div>
      <h1>Todo list</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
      <ul>
        {todoList.map(function (todo) {
          return (
            <li key={todo.id}>
              <span>{todo.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
