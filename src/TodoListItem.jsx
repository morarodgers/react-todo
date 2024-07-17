import PropTypes from "prop-types";
//import TodoList from "./TodoList";

const TodoListItem = ({ todo }) => {
  return (
    <div>
      <span>
        <a href={todo.url}>{todo.title}</a>
      </span>
    </div>
  );
};

TodoListItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
  }).isRequired,
};

export default TodoListItem;
