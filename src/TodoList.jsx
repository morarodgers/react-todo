// import * as React from "react";

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

function TodoList() {
  return (
    <div>
      <ul>
        {todoList.map((todo) => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
