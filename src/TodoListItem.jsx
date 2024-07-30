import PropTypes from "prop-types";
//import TodoList from "./TodoList";

const TodoListItem = ({ todo, onRemoveTodo }) => {
  return (
    <div className="TodoListItem">
      <span>
        <a href={todo.url}>{todo.title}</a>
      </span>
      <button onClick={() => onRemoveTodo(todo.id)}>Remove</button>
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
