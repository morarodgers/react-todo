import PropTypes from "prop-types";
import Button from "./Button";
import style from "./TodoListItem.module.css";

const TodoListItem = ({ todo, onRemoveTodo }) => {
  return (
    <div className="TodoListItem">
      <span className={style.ListItem}>
        <a href={todo.url}>{todo.title}</a>
      </span>
      <Button handleClick={() => onRemoveTodo(todo.id)} className="remove">
        Remove
      </Button>
    </div>
  );
};

TodoListItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
  }).isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};

export default TodoListItem;
