import PropTypes from "prop-types";
//import TodoList from "./TodoList";

const TodoListItem = ({ todo, onRemoveTodo }) => {
  return (
    <div>
      <span>
        <a href={todo.url}>{todo.title}</a>
      </span>
      <span>
        <button onClick={() => onRemoveTodo(todo.id)}>Remove</button>
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
  onRemoveTodo: PropTypes.func.isRequired,
};

export default TodoListItem;
