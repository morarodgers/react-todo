// import * as React from "react";
import PropTypes from "prop-types";
import TodoListItem from "./TodoListItem";
/* const todoList = [
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
]; */

const TodoList = ({ todoList, onRemoveTodo }) => (
  <div>
    <ul>
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
      ))}
    </ul>
  </div>
);

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string,
    })
  ).isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};

export default TodoList;
