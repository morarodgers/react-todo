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

const TodoList = ({ list }) => (
  <div>
    <ul>
      {list.map((todo) => (
        // return <TodoListItem key={TodoListItem.id} todo={TodoListItem} />;
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  </div>
);

TodoList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string,
    })
  ).isRequired,
};

export default TodoList;
